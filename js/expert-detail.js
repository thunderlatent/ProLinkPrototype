/**
 * ProLink平台 - 專家詳情頁面 JavaScript
 * 處理專家詳情頁面的數據加載和顯示
 */

// 專家數據
const categoryExperts = {
    '熱門': [
        {
            id: '1',
            img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
            name: '李明哲',
            title: 'UI/UX 設計師',
            rating: '4.8',
            price: 'NT$3,000起',
            coverImg: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            about: '我是一位擁有5年經驗的UI/UX設計師，專精於用戶體驗設計和界面設計。曾為科技、電商、金融等多個領域的客戶提供設計服務。我注重細節，理解用戶需求，致力於創造優雅且實用的設計。',
            skills: ['UI設計', 'UX設計', 'Figma', 'Sketch', 'Adobe XD', 'Prototyping', '動效設計'],
            portfolio: [
                'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
            ],
            services: [
                {
                    title: '基礎UI設計',
                    description: '5頁面UI設計，含簡單原型',
                    price: 'NT$3,000'
                },
                {
                    title: '完整APP設計',
                    description: '15+頁面設計，含可交互原型',
                    price: 'NT$12,000'
                },
                {
                    title: '網站UI/UX設計',
                    description: '含桌面/移動端設計，響應式',
                    price: 'NT$15,000'
                }
            ],
            reviews: [
                {
                    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
                    name: '林佳穎',
                    date: '2023-05-15',
                    rating: 5,
                    content: '非常專業的設計師，從需求分析到最終設計稿都很細心，作品質量高，溝通也很順暢。會再次合作！'
                },
                {
                    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
                    name: '張志豪',
                    date: '2023-04-20',
                    rating: 4,
                    content: '設計效果很好，但交付時間有點延遲。不過設計師很有耐心，根據反饋多次修改直到滿意。'
                },
                {
                    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
                    name: '王美玲',
                    date: '2023-03-10',
                    rating: 4.5,
                    content: '對我的品牌設計提供了很好的建議，專業知識豐富，設計風格現代簡潔。最終作品幫助我的品牌形象提升了很多。'
                }
            ],
            stats: {
                rating: '4.8',
                reviewCount: '126',
                completionRate: '98%'
            }
        },
        {
            id: '2',
            img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
            name: '林佳穎',
            title: '平面設計師',
            rating: '4.9',
            price: 'NT$2,500起',
            coverImg: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            about: '專業平面設計師，擅長品牌識別、包裝設計和印刷品設計。我相信設計不僅是美觀，更是解決問題的工具。每個項目我都會深入了解客戶需求，提供最適合的設計方案。',
            skills: ['品牌設計', 'LOGO設計', '包裝設計', '印刷設計', 'Illustrator', 'Photoshop', 'InDesign'],
            portfolio: [
                'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
            ],
            services: [
                {
                    title: 'LOGO設計',
                    description: '包含3個方案，無限修改，含品牌指南',
                    price: 'NT$5,000'
                },
                {
                    title: '品牌識別設計',
                    description: '完整品牌視覺系統，含LOGO和應用設計',
                    price: 'NT$15,000'
                },
                {
                    title: '包裝設計',
                    description: '產品包裝設計，含結構和平面設計',
                    price: 'NT$8,000'
                }
            ],
            reviews: [
                {
                    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
                    name: '李明哲',
                    date: '2023-06-10',
                    rating: 5,
                    content: '林設計師的LOGO設計非常出色，抓住了我們品牌的核心價值，客戶反饋也非常好。'
                },
                {
                    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
                    name: '王大明',
                    date: '2023-05-25',
                    rating: 4.5,
                    content: '包裝設計非常精美，產品上架後銷量提升了30%，非常感謝！'
                }
            ],
            stats: {
                rating: '4.9',
                reviewCount: '87',
                completionRate: '100%'
            }
        }
    ],
    '設計開發': [
        {
            id: '3',
            img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
            name: '王大明',
            title: '前端開發工程師',
            rating: '4.7',
            price: 'NT$4,000起',
            coverImg: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            about: '資深前端開發工程師，專注於打造高性能、易用性強的網站和應用。熟悉現代前端框架和工具，能夠將設計稿完美轉化為代碼。注重代碼質量和用戶體驗。',
            skills: ['HTML/CSS', 'JavaScript', 'React', 'Vue', 'TypeScript', 'Responsive Design', 'Web Animation'],
            portfolio: [
                'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
            ],
            services: [
                {
                    title: '網站開發',
                    description: '響應式網站開發，兼容各種設備',
                    price: 'NT$30,000'
                },
                {
                    title: 'Web應用開發',
                    description: '使用React或Vue開發現代Web應用',
                    price: 'NT$50,000'
                },
                {
                    title: '前端優化',
                    description: '提升網站性能和用戶體驗',
                    price: 'NT$15,000'
                }
            ],
            reviews: [
                {
                    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
                    name: '王美玲',
                    date: '2023-07-05',
                    rating: 5,
                    content: '王工程師的技術非常扎實，開發的網站不僅美觀還非常流暢，完全符合我們的需求。'
                }
            ],
            stats: {
                rating: '4.7',
                reviewCount: '56',
                completionRate: '95%'
            }
        }
    ],
    // 其他類別的專家數據...
};

// 獲取URL參數
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// 載入專家數據
function loadExpertData() {
    const category = getUrlParameter('category') || '熱門';
    const index = parseInt(getUrlParameter('index') || '0');
    const expertId = getUrlParameter('expert');
    
    // 如果有專家ID，則根據ID查找專家
    if (expertId) {
        for (const cat in categoryExperts) {
            const expert = categoryExperts[cat].find(e => e.id === expertId);
            if (expert) return expert;
        }
    }
    
    // 如果沒有專家ID或找不到對應專家，則使用類別和索引
    if (!categoryExperts[category] || !categoryExperts[category][index]) {
        return categoryExperts['熱門'][0];
    }
    
    return categoryExperts[category][index];
}

// 渲染專家詳情頁面
function renderExpertDetail() {
    const expert = loadExpertData();
    
    // 更新頁面標題
    document.title = `${expert.name} - ${expert.title} | ProLink`;
    
    // 更新封面和頭像
    const coverImg = document.querySelector('.detail-cover');
    const avatarImg = document.querySelector('.avatar.avatar-large');
    
    if (coverImg) coverImg.src = expert.coverImg || expert.img;
    if (avatarImg) avatarImg.src = expert.img;
    
    // 更新基本信息
    const nameElement = document.querySelector('.detail-name');
    const titleElement = document.querySelector('.detail-title');
    
    if (nameElement) nameElement.textContent = expert.name;
    if (titleElement) titleElement.textContent = expert.title;
    
    // 更新統計數據
    const statElements = document.querySelectorAll('.detail-stat-number');
    if (statElements.length >= 3) {
        statElements[0].textContent = expert.stats.rating;
        statElements[1].textContent = expert.stats.reviewCount;
        statElements[2].textContent = expert.stats.completionRate;
    }
    
    // 更新關於我
    const aboutElement = document.querySelector('.detail-section-content');
    if (aboutElement) aboutElement.textContent = expert.about;
    
    // 更新專業技能
    const skillsContainer = document.querySelectorAll('.detail-section-content')[1]?.querySelector('div');
    if (skillsContainer) {
        skillsContainer.innerHTML = '';
        expert.skills.forEach(skill => {
            const skillSpan = document.createElement('span');
            skillSpan.className = 'skill-tag';
            skillSpan.textContent = skill;
            skillsContainer.appendChild(skillSpan);
        });
    }
    
    // 更新作品集
    const workSamples = document.querySelector('.work-samples');
    if (workSamples) {
        workSamples.innerHTML = '';
        expert.portfolio.forEach(image => {
            const sampleDiv = document.createElement('div');
            sampleDiv.className = 'work-sample';
            const img = document.createElement('img');
            img.src = image;
            img.alt = '作品';
            img.loading = 'lazy'; // 延遲加載
            sampleDiv.appendChild(img);
            workSamples.appendChild(sampleDiv);
        });
    }
    
    // 更新服務項目
    const servicesContainer = document.querySelectorAll('.detail-section')[3]?.querySelector('div');
    if (servicesContainer) {
        servicesContainer.innerHTML = '';
        expert.services.forEach(service => {
            const serviceDiv = document.createElement('div');
            serviceDiv.className = 'service-card';
            
            serviceDiv.innerHTML = `
                <div class="service-title">${service.title}</div>
                <div class="service-desc">${service.description}</div>
                <div class="service-price">${service.price}</div>
            `;
            
            servicesContainer.appendChild(serviceDiv);
        });
    }
    
    // 更新評價
    const reviewsContainer = document.querySelectorAll('.detail-section')[4]?.querySelector('div');
    if (reviewsContainer) {
        reviewsContainer.innerHTML = '';
        expert.reviews.forEach((review, index) => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review-item';
            if (index === expert.reviews.length - 1) {
                reviewDiv.style.borderBottom = 'none';
                reviewDiv.style.marginBottom = '0';
                reviewDiv.style.paddingBottom = '0';
            }
            
            // 生成星星評分
            let starsHtml = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= Math.floor(review.rating)) {
                    starsHtml += '<i class="fas fa-star"></i>';
                } else if (i - 0.5 <= review.rating) {
                    starsHtml += '<i class="fas fa-star-half-alt"></i>';
                } else {
                    starsHtml += '<i class="far fa-star"></i>';
                }
            }
            
            reviewDiv.innerHTML = `
                <div class="review-header">
                    <img src="${review.avatar}" alt="用戶頭像" class="avatar" style="width: 40px; height: 40px;">
                    <div class="review-user">
                        <div class="review-name">${review.name}</div>
                        <div class="review-date">${review.date}</div>
                    </div>
                    <div class="review-rating">
                        ${starsHtml}
                    </div>
                </div>
                <div class="review-content">
                    ${review.content}
                </div>
            `;
            
            reviewsContainer.appendChild(reviewDiv);
        });
    }
    
    // 更新預約按鈕
    const bookingButton = document.querySelector('.booking-button');
    if (bookingButton) {
        bookingButton.setAttribute('data-expert-id', expert.id || '1');
    }
    
    // 添加頁面載入動畫
    document.body.classList.add('page-loaded');
}

// 頁面載入完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 顯示載入中效果
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading-indicator';
    loadingIndicator.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(loadingIndicator);
    
    // 延遲一小段時間後渲染頁面，模擬數據加載
    setTimeout(function() {
        renderExpertDetail();
        
        // 初始化預約按鈕
        const bookingButton = document.querySelector('.booking-button');
        if (bookingButton) {
            bookingButton.addEventListener('click', function() {
                const expertId = this.getAttribute('data-expert-id');
                window.location.href = `booking.html?expert=${expertId}`;
            });
        }
        
        // 移除載入中效果
        document.querySelector('.loading-indicator')?.remove();
    }, 500);
    
    // 添加作品集點擊效果
    document.addEventListener('click', function(e) {
        if (e.target.closest('.work-sample')) {
            const img = e.target.closest('.work-sample').querySelector('img');
            if (img) {
                // 創建全屏預覽
                const preview = document.createElement('div');
                preview.className = 'image-preview';
                preview.innerHTML = `
                    <div class="preview-overlay"></div>
                    <div class="preview-content">
                        <img src="${img.src}" alt="作品預覽">
                        <button class="preview-close"><i class="fas fa-times"></i></button>
                    </div>
                `;
                document.body.appendChild(preview);
                
                // 禁止滾動
                document.body.style.overflow = 'hidden';
                
                // 添加關閉預覽的事件
                preview.addEventListener('click', function(e) {
                    if (e.target.closest('.preview-close') || e.target.classList.contains('preview-overlay')) {
                        preview.remove();
                        document.body.style.overflow = '';
                    }
                });
            }
        }
    });
}); 