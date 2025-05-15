document.addEventListener('DOMContentLoaded', function() {
    // Navigation between pages
    const navLinks = document.querySelectorAll('.nav-links li');
    const pages = document.querySelectorAll('.page');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const pageName = this.getAttribute('data-page');
            
            // Remove active class from all nav links and pages
            navLinks.forEach(nav => nav.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));
            
            // Add active class to clicked nav link and corresponding page
            this.classList.add('active');
            document.querySelector(`.${pageName}-page`).classList.add('active');
        });
    });
    
    // Department search functionality
    const departmentSearch = document.getElementById('department-search');
    if (departmentSearch) {
        departmentSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const departments = document.querySelectorAll('.department-card');
            
            departments.forEach(dept => {
                const deptName = dept.getAttribute('data-dept');
                const deptTitle = dept.querySelector('h2').textContent.toLowerCase();
                
                if (deptName.includes(searchTerm) || deptTitle.includes(searchTerm)) {
                    dept.style.display = 'block';
                } else {
                    dept.style.display = 'none';
                }
            });
        });
    }
    
    // Notice filtering
    const noticeFilters = document.querySelectorAll('.filter-btn');
    if (noticeFilters.length > 0) {
        noticeFilters.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active filter button
                noticeFilters.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter notices
                const notices = document.querySelectorAll('.notice-card');
                notices.forEach(notice => {
                    if (filter === 'all' || notice.getAttribute('data-category') === filter) {
                        notice.style.display = 'flex';
                    } else {
                        notice.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Blog category filtering
    const blogCategoryFilter = document.getElementById('blog-category-filter');
    if (blogCategoryFilter) {
        blogCategoryFilter.addEventListener('change', function() {
            const category = this.value;
            const posts = document.querySelectorAll('.blog-post');
            
            posts.forEach(post => {
                if (category === 'all' || post.getAttribute('data-category') === category) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    }
    
    // Theme switcher
    const themeOptions = document.querySelectorAll('input[name="theme"]');
    themeOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (this.id === 'dark-theme') {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
            }
        });
    });
    
    // Language switcher
    const languageOptions = document.querySelectorAll('input[name="language"]');
    languageOptions.forEach(option => {
        option.addEventListener('change', function() {
            // In a real app, this would change the language of all text
            alert(`Language changed to ${this.id}`);
        });
    });
    
    // Form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted! In a real app, this would send data to the server.');
        });
    });
    
    // View more buttons
    const viewMoreButtons = document.querySelectorAll('.view-more');
    viewMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('In a real app, this would show all courses for the department.');
        });
    });
    
    // Read more buttons
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('In a real app, this would show the full blog post.');
        });
    });
    
    // Logout functionality
    const logoutBtn = document.querySelector('.logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to logout?')) {
                alert('Logged out successfully. In a real app, this would redirect to login page.');
            }
        });
    }
    
    // Notification bell
    const notificationBell = document.querySelector('.notifications');
    if (notificationBell) {
        notificationBell.addEventListener('click', function() {
            alert('Showing notifications. In a real app, this would display a dropdown with notifications.');
        });
    }
    
    // Simulate loading user data
    setTimeout(() => {
        const userProfileImg = document.querySelector('.user-profile');
        if (userProfileImg) {
            userProfileImg.src = 'https://via.placeholder.com/40/3498db/ffffff?text=JD';
        }
    }, 500);
    
    // Dark theme styles (would be toggled by the theme switcher)
    const darkThemeStyles = `
        body.dark-theme {
            background-color: #121212;
            color: #e0e0e0;
        }
        
        body.dark-theme .sidebar {
            background-color: #1e1e1e;
        }
        
        body.dark-theme .top-nav,
        body.dark-theme .page,
        body.dark-theme .contact-section,
        body.dark-theme .department-card,
        body.dark-theme .notice-card,
        body.dark-theme .blog-post,
        body.dark-theme .contact-card,
        body.dark-theme .achievement-card,
        body.dark-theme .message-card,
        body.dark-theme .profile-container,
        body.dark-theme .settings-container,
        body.dark-theme .course,
        body.dark-theme .timeline-content,
        body.dark-theme .achievement-item,
        body.dark-theme .detail-section {
            background-color: #1e1e1e;
            color: #e0e0e0;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }
        
        body.dark-theme .search-bar,
        body.dark-theme .form-group input,
        body.dark-theme .form-group textarea,
        body.dark-theme .form-group select,
        body.dark-theme .department-filter input,
        body.dark-theme .blog-categories select {
            background-color: #2d2d2d;
            color: #e0e0e0;
            border-color: #444;
        }
        
        body.dark-theme .intro-text,
        body.dark-theme .timeline-content,
        body.dark-theme .course p,
        body.dark-theme .notice-content p,
        body.dark-theme .blog-content p,
        body.dark-theme .contact-card p,
        body.dark-theme .achievement-card p,
        body.dark-theme .message-card p,
        body.dark-theme .detail-item p,
        body.dark-theme .achievement-date,
        body.dark-theme .notice-meta,
        body.dark-theme .blog-meta,
        body.dark-theme .setting-description {
            color: #b0b0b0;
        }
        
        body.dark-theme .detail-item label {
            color: #9e9e9e;
        }
        
        body.dark-theme .nav-links li:hover,
        body.dark-theme .logout:hover {
            background-color: #333;
        }
        
        body.dark-theme .filter-btn {
            background-color: #333;
            color: #e0e0e0;
        }
        
        body.dark-theme .filter-btn.active {
            background-color: var(--primary-color);
        }
    `;
    
    const styleElement = document.createElement('style');
    styleElement.innerHTML = darkThemeStyles;
    document.head.appendChild(styleElement);
});