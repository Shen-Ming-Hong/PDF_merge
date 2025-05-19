// PDF 合併工具 Service Worker
const CACHE_NAME = 'pdf-merge-cache-v1';
const urlsToCache = [
	'./',
	'./index.html',
	'./pdfMergeWorker.js',
	'https://cdn.jsdelivr.net/pyodide/v0.27.6/full/pyodide.js',
	'https://cdn.jsdelivr.net/pyodide/v0.27.6/full/pyodide.asm.wasm',
	'https://cdn.jsdelivr.net/pyodide/v0.27.6/full/python_stdlib.zip',
	'https://cdn.jsdelivr.net/pyodide/v0.27.6/full/micropip.js',
	'https://cdn.jsdelivr.net/pyodide/v0.27.6/full/pyparsing.js',
	'https://cdn.jsdelivr.net/pyodide/v0.27.6/full/packaging.js',
];

// 安裝 Service Worker 及緩存資源
self.addEventListener('install', event => {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then(cache => {
				console.log('緩存已開啟');
				return cache.addAll(urlsToCache);
			})
			.then(() => self.skipWaiting()) // 確保新的 Service Worker 立即激活
	);
});

// 激活 Service Worker
self.addEventListener('activate', event => {
	event.waitUntil(
		caches
			.keys()
			.then(cacheNames => {
				return Promise.all(
					cacheNames.map(cacheName => {
						// 刪除舊的緩存
						if (cacheName !== CACHE_NAME) {
							console.log(`刪除舊緩存: ${cacheName}`);
							return caches.delete(cacheName);
						}
					})
				);
			})
			.then(() => {
				// 立即控制所有頁面
				return self.clients.claim();
			})
	);
});

// 攔截網絡請求
self.addEventListener('fetch', event => {
	// 跳過不支援緩存的請求
	if (!event.request.url.startsWith('http')) {
		return;
	}

	event.respondWith(
		caches.match(event.request).then(response => {
			// 如果找到緩存的響應，則返回緩存的版本
			if (response) {
				return response;
			}

			// 否則發出網絡請求
			return fetch(event.request).then(response => {
				// 檢查是否獲得有效響應
				if (!response || response.status !== 200 || response.type !== 'basic') {
					return response;
				}

				// 為 Pyodide 和重要資源進行緩存
				// 不要緩存 PDF 檔案下載響應
				const url = event.request.url;
				if (url.includes('pyodide') || urlsToCache.includes(url)) {
					const responseToCache = response.clone();

					caches.open(CACHE_NAME).then(cache => {
						cache.put(event.request, responseToCache);
						console.log(`已緩存: ${url}`);
					});
				}

				return response;
			});
		})
	);
});
