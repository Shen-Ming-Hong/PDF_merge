# PDF 合併工具

這是一個純前端的 PDF 合併工具，使用 Pyodide（瀏覽器中的 Python 執行環境）加載 pypdf 庫來實現 PDF 檔案合併功能。所有處理都在瀏覽器本地進行，您的檔案不會上傳到任何伺服器。

您可以透過 [GitHub Pages](https://shen-ming-hong.github.io/PDF_merge/) 直接線上使用。

## 功能特點

- ✅ **完全在瀏覽器中執行** - 所有 PDF 處理都在本地完成
- ✅ **隱私保護** - 您的文件不會被上傳到任何伺服器
- ✅ **離線工作** - 安裝後可在無網絡環境使用
- ✅ **背景處理** - 使用 Web Worker 避免阻塞主線程
- ✅ **進度顯示** - 實時顯示合併進度
- ✅ **自定義輸出** - 可自訂輸出檔案名稱
- ✅ **可調整合併順序** - 上傳後可自由調整檔案合併順序
- ✅ **壓縮選項** - 可選擇是否壓縮輸出檔案
- ✅ **現代化介面** - 透過 Tailwind CSS 提供簡潔外觀

## 技術實現

- **Pyodide**: 瀏覽器中的 Python 執行環境
- **pypdf**: 用於 PDF 處理的 Python 庫
- **Web Worker**: 用於非阻塞處理大文件
- **Service Worker**: 提供離線功能
- **Tailwind CSS**: 前端樣式框架

## 本地開發

1. 克隆本倉庫

   ```
   git clone https://github.com/Shen-Ming-Hong/PDF_merge.git
   ```

2. 進入項目目錄

   ```
   cd PDF_merge
   ```

3. 使用任何 HTTP 伺服器啟動（例如 VS Code 的 Live Server 擴展）
   或使用 Python 的簡易 HTTP 伺服器：

   ```
   python -m http.server
   ```

4. 在瀏覽器中打開 `http://localhost:8000`

## 使用方法

1. 點擊「選擇檔案」按鈕，選擇要合併的 PDF 檔案（可多選）
2. 您可以選擇是否壓縮輸出檔案，並設置輸出檔名
3. 點擊「開始合併」按鈕
4. 等待處理完成，合併後的 PDF 將自動下載

## 限制

- 由於瀏覽器記憶體限制，非常大的檔案（總大小超過數百 MB）可能無法處理
- 某些特殊格式或受保護的 PDF 可能無法正確合併

## 瀏覽器支援

- Chrome / Edge 89+
- Firefox 79+
- Safari 16+

## 授權

MIT

---

此專案為開源專案，歡迎提交 Issues 和 Pull Requests。
