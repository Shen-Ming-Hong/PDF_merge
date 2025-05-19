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
