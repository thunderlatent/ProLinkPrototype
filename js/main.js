/**
 * ProLink平台 - 主要JavaScript文件
 * 包含所有頁面通用功能及交互邏輯
 */

// 頁面載入完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化預約按鈕
    initBookingButtons();
    
    // 初始化時間選擇
    initTimeSlots();
    
    // 初始化搜尋功能
    initSearch();
    
    // 初始化預約表單
    initBookingForm();
    
    // 初始化頁面加載效果
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 300);
});

/**
 * 初始化預約按鈕
 */
function initBookingButtons() {
    const bookingButtons = document.querySelectorAll('.booking-button');
    
    bookingButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const expertId = this.getAttribute('data-expert-id');
            window.location.href = `booking.html?expert=${expertId}`;
        });
    });
}

/**
 * 初始化時間選擇功能
 */
function initTimeSlots() {
    const timeSlots = document.querySelectorAll('.time-slot');
    
    timeSlots.forEach(function(slot) {
        slot.addEventListener('click', function() {
            // 移除其他時間段的選中狀態
            timeSlots.forEach(function(s) {
                s.classList.remove('selected');
            });
            
            // 為當前選中的時間段添加選中狀態
            this.classList.add('selected');
        });
    });
}

/**
 * 初始化搜尋功能
 */
function initSearch() {
    const searchInputs = document.querySelectorAll('.search-bar input');
    
    searchInputs.forEach(function(input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    window.location.href = `explore.html?search=${encodeURIComponent(searchTerm)}`;
                }
            }
        });
    });
}

/**
 * 初始化預約表單
 */
function initBookingForm() {
    const form = document.getElementById('booking-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 簡單表單驗證
            const service = form.querySelector('select').value;
            const date = form.querySelector('input[type="date"]').value;
            const selectedTimeSlot = form.querySelector('.time-slot.selected');
            const requirements = form.querySelector('textarea').value;
            const phone = form.querySelector('input[type="tel"]').value;
            
            // 驗證必填欄位
            if (!service) {
                alert('請選擇服務項目');
                return;
            }
            
            if (!date) {
                alert('請選擇預約日期');
                return;
            }
            
            if (!selectedTimeSlot) {
                alert('請選擇時間段');
                return;
            }
            
            if (!requirements) {
                alert('請填寫需求說明');
                return;
            }
            
            if (!phone) {
                alert('請填寫聯絡電話');
                return;
            }
            
            // 表單驗證通過，跳轉到預約成功頁面
            window.location.href = 'booking-success.html';
        });
    }
}

/**
 * 獲取URL參數
 * @param {string} name - 參數名稱
 * @returns {string} 參數值
 */
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

/**
 * 顯示加載中效果
 */
function showLoading() {
    // 創建並顯示加載指示器
    const loadingElement = document.createElement('div');
    loadingElement.className = 'loading-indicator';
    loadingElement.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(loadingElement);
    
    // 禁用滾動
    document.body.style.overflow = 'hidden';
}

/**
 * 隱藏加載中效果
 */
function hideLoading() {
    // 移除加載指示器
    const loadingElement = document.querySelector('.loading-indicator');
    if (loadingElement) {
        loadingElement.remove();
    }
    
    // 恢復滾動
    document.body.style.overflow = '';
}

/**
 * 格式化日期
 * @param {Date} date - 日期對象
 * @returns {string} 格式化後的日期字符串 (yyyy-MM-dd)
 */
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * 設置今天及未來日期為可選
 */
function setupDatePicker() {
    const dateInputs = document.querySelectorAll('input[type="date"]');
    const today = new Date();
    const formattedToday = formatDate(today);
    
    dateInputs.forEach(function(input) {
        input.setAttribute('min', formattedToday);
    });
}

// 調用設置日期選擇器
setupDatePicker(); 