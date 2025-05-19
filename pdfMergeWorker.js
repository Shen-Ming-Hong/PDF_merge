// PDF 合併 Web Worker
importScripts('https://cdn.jsdelivr.net/pyodide/v0.27.6/full/pyodide.js');

let pyodide = null;
let initialized = false;

// 初始化 Pyodide
async function initializePyodide() {
	if (initialized) return;

	self.postMessage({ type: 'status', message: '⌛ 正在載入 Pyodide...' });
	pyodide = await loadPyodide({
		stdout: msg => self.postMessage({ type: 'log', message: msg }),
	});

	self.postMessage({ type: 'status', message: '✅ Pyodide 載入完成' });

	// 安裝純 Python 套件 pypdf
	self.postMessage({ type: 'status', message: '⌛ 正在安裝 pypdf...' });
	await pyodide.loadPackage('micropip');
	const micropip = pyodide.pyimport('micropip');
	await micropip.install('pypdf');

	self.postMessage({ type: 'status', message: '✅ pypdf 安裝完成' });
	initialized = true;
}

// 主要處理函數
self.onmessage = async function (e) {
	const { type, data } = e.data;

	if (type === 'init') {
		try {
			await initializePyodide();
			self.postMessage({ type: 'initialized' });
		} catch (error) {
			self.postMessage({
				type: 'error',
				message: `初始化失敗: ${error.message}`,
			});
		}
		return;
	}

	if (type === 'merge') {
		if (!initialized) {
			self.postMessage({
				type: 'error',
				message: 'Pyodide 尚未初始化，請先呼叫 init',
			});
			return;
		}

		try {			const { files } = data;
			self.postMessage({ type: 'status', message: `⌛ 開始處理 ${files.length} 份檔案...` });

			// 寫入檔案到虛擬檔案系統
			for (let i = 0; i < files.length; i++) {
				const file = files[i];
				self.postMessage({
					type: 'status',
					message: `⌛ 載入檔案: ${file.name}`,
					progress: (i / files.length) * 40,
				});

				pyodide.FS.writeFile(`/tmp/${file.name}`, file.data);
			}

			// 合併 PDF
			self.postMessage({
				type: 'status',
				message: '⌛ 正在合併 PDF...',
				progress: 50,
			});			const fileNames = files.map(f => f.name);
			const pyCode = `
import io, sys
from pypdf import PdfWriter

merger = PdfWriter()
file_names = ${JSON.stringify(fileNames)}

for i, name in enumerate(file_names):
    print(f"合併檔案 {i+1}/{len(file_names)}: {name}")
    merger.append(f"/tmp/{name}")

output = io.BytesIO()
# 移除不支援的 compress_streams 參數
merger.write(output)
output_bytes = output.getvalue()
print(f"合併完成，輸出大小: {len(output_bytes) / 1024:.1f} KB")
`;
			await pyodide.runPythonAsync(pyCode);

			// 取得輸出 bytes
			self.postMessage({
				type: 'status',
				message: '⌛ 準備輸出檔案...',
				progress: 80,
			});

			const outputBytes = pyodide.globals.get('output_bytes').toJs();

			// 回傳合併結果
			self.postMessage({
				type: 'result',
				data: outputBytes,
				progress: 100,
			});
		} catch (error) {
			self.postMessage({
				type: 'error',
				message: `合併失敗: ${error.message || error}`,
			});
		}
	}
};
