# ProLink 平台原型 (iOS風格)

ProLink 平台是一個連接專業人才與需要服務的用戶的媒合平台。此原型採用iOS人機界面設計指南，展示了平台的主要功能和用戶介面，旨在提供流暢的用戶體驗與直觀的操作。

## 專案結構

```
ProLink平台/
│
├── images/                # 圖像資源
│   ├── avatars/          # 用戶與專家頭像
│   ├── posts/            # 貼文圖片
│   ├── discover/         # 探索頁面圖片
│   └── services/         # 服務相關圖片
│
├── css/                  # 樣式文件
│   └── styles.css        # 主要樣式表
│
├── js/                   # JavaScript文件
│   └── main.js           # 主要腳本文件
│
├── index.html            # 主入口頁面（展示所有頁面）
├── home.html             # 首頁
├── expert-detail.html    # 專家詳情頁
├── booking.html          # 預約頁面
├── booking-success.html  # 預約成功頁面
├── explore.html          # 探索頁面
├── orders.html           # 訂單頁面
├── messages.html         # 訊息頁面
├── chat.html             # 聊天詳情頁面
└── profile.html          # 個人資料頁面
```

## iOS風格設計特點

- **系統字體** - 採用iOS系統字體 SF Pro Text/SF Pro Display
- **iOS色彩系統** - 使用iOS標準色彩，如藍色(#007AFF)、綠色(#34C759)和橙色(#FF9500)
- **圓角風格** - 統一的圓角元素，符合iOS界面設計語言
- **動態島設計** - 適配iPhone最新的動態島設計，確保內容不被遮擋
- **iOS風格按鈕** - 標準iOS樣式按鈕和交互效果
- **沉浸式導航** - 半透明導航欄搭配模糊效果(backdrop-filter)
- **卡片式設計** - 輕微陰影和層次感的卡片布局
- **iOS標準間距** - 遵循iOS 16px標準側邊距設計
- **系統圖標** - 採用與iOS風格一致的Font Awesome圖標庫

## 頁面說明

### 1. 首頁 (home.html)

首頁展示平台的主要內容，包括：
- 熱門專家推薦
- 最新服務項目
- 特色類別展示 (採用圖片填充設計)
- 搜尋功能
- 用戶見證

### 2. 專家詳情頁 (expert-detail.html)

展示專家的詳細資訊，包括：
- 專家個人簡介與照片
- 專業技能與背景
- 提供的服務內容與定價
- 作品集展示
- 用戶評價與評分
- 預約按鈕

### 3. 預約頁面 (booking.html)

用戶可以在此頁面預約專家服務：
- 服務項目選擇
- 日期與時間選擇
- 需求描述輸入
- 聯絡資訊確認
- 預約須知說明

### 4. 預約成功頁面 (booking-success.html)

預約完成後的確認頁面：
- 成功訊息顯示
- 訂單編號與詳情
- 查看訂單按鈕
- 返回首頁選項

### 5. 探索頁面 (explore.html)

用戶可以在此頁面探索不同類別的專家：
- 分類導覽列 (iOS風格水平滾動)
- 熱門專家展示
- 熱門服務推薦
- 搜尋功能

### 6. 訂單頁面 (orders.html)

用戶可以查看和管理自己的訂單：
- 訂單狀態分類(全部、待確認、進行中、已完成)
- 訂單列表與詳情
- 訂單狀態顯示
- 與專家聯繫選項
- 訂單操作按鈕

### 7. 訊息頁面 (messages.html)

用戶的訊息中心：
- 訊息列表
- 未讀訊息提醒
- 專家與系統訊息
- 進入聊天頁面選項

### 8. 聊天詳情頁面 (chat.html)

與專家的一對一聊天介面：
- iOS風格聊天氣泡設計
- 訊息發送與接收
- 附件上傳功能
- 專家資訊顯示
- 返回訊息列表選項

### 9. 個人資料頁面 (profile.html)

用戶個人中心：
- 個人資料顯示與編輯
- 我的訂單狀態概覽
- 錢包管理
- 收藏專家列表
- 系統設定選項
- 客服與反饋入口

## 使用方法

1. 打開 `index.html` 文件啟動原型
2. 在主頁面中可以看到所有頁面的預覽
3. 點擊各個頁面查看詳細內容
4. 在各頁面中可以使用底部導航欄在不同功能間切換
5. 點擊專家卡片進入專家詳情頁
6. 從專家詳情頁可預約服務
7. 在訂單頁面查看預約狀態
8. 透過訊息頁面與專家溝通

## 技術特點

- 純前端實現，無需後端服務
- 響應式設計，適配不同設備尺寸
- 模擬iPhone界面，包含動態島設計
- 符合iOS人機界面指南
- 半透明毛玻璃效果
- 交互效果實現，提升用戶體驗

## 優化內容

- 調整視覺風格，使用iOS標準色彩和字體
- 優化動態島周圍空間，避免內容被遮擋
- 改進圖片顯示，確保類別圖標完整顯示
- 優化導航結構，提升用戶體驗
- 統一交互元素風格
- 增強可訪問性和可用性

## 注意事項

- 此原型僅供展示用途，不含實際功能
- 所有資料均為模擬數據
- 圖片來源於免費圖庫
- 最佳瀏覽體驗請使用最新版Safari或Chrome瀏覽器
- 匹配iPhone 15 Pro Max 螢幕尺寸 