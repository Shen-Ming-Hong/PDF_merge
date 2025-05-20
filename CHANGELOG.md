# 更新日誌 Changelog

此專案所有重要更新都會記錄在此文件中。
All notable changes to this project will be documented in this file.

此格式基於 [Keep a Changelog](https://keepachangelog.com/zh-TW/1.0.0/)，
並且本專案遵循 [語意化版本](https://semver.org/lang/zh-TW/)。
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [未發布] - Unreleased

### 新增 Added

### 已修復 Fixed

### 已更新 Updated

### 已修改 Changed

## [0.4.1] - 2025-05-20

### 新增 Added

- 新增 MapleMono NF 字型支援，提升文字顯示效果
- 新增自定義字型樣式，優化用戶界面的閱讀體驗

### 已更新 Updated

- 更新 Tailwind 配置，增加自定義字型家族設定

## [0.4.0] - 2025-05-20

### 新增 Added

- 新增拖放功能，支援直接拖拽 PDF 檔案到上傳區域
- 新增檔案移除功能，可單獨移除已選擇的檔案
- 新增「清除全部」按鈕，一鍵清除所有已選檔案
- 新增重複檔案檢測，避免同一檔案被重複添加

### 已更新 Updated

- 更新使用者介面設計，提升整體視覺效果和使用體驗
- 改進檔案上傳區域，使用現代化的拖放界面
- 改進進度條顯示效果
- 優化介面佈局和間距，提高閱讀舒適度
- 增強按鈕和互動元素的視覺反饋

### 已修改 Changed

- 修改頁面最大寬度，從 max-w-3xl 增加到 max-w-5xl
- 更改檔案選擇方式，從傳統檔案選擇器改為拖放區域與隱藏式檔案選擇器

## [0.3.0] - 2025-05-20

### 新增 Added

- 新增深色模式支援，改善夜間使用體驗
- 新增主題切換按鈕，允許用戶手動切換深淺色主題
- 新增主題偏好記憶功能，會自動依據上次選擇或系統設定套用主題

### 已更新 Updated

- 更新使用者介面元素，優化深色模式下的顯示效果
- 改進樣式結構，增加視覺一致性

## [0.2.0] - 2025-05-18

### 新增 Added

- 新增專案發布流程相關文件 (.github/prompts/PUBLISH.prompt.md)
- 新增 Conventional Commits 提交規範 (.copilot-commit-message-instructions.md)
- 新增專案開發與重構指南文件

### 已更新 Updated

- 改進了項目文檔結構
- 新增版本控制和發布流程管理

## [0.1.0] - 2025-05-18

### 新增 Added

- 基本的 PDF 合併功能，使用 Pyodide + pypdf 在瀏覽器端實現
- Web Worker 處理以避免主執行緒阻塞
- 進度條顯示合併進度
- 檔案大小顯示
- 壓縮選項，可選擇是否壓縮輸出 PDF
- 自定義輸出檔名功能
- Service Worker 提供離線功能
