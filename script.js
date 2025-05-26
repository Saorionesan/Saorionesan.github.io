// 导航栏功能
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');

// 语言数据
const languages = {
    zh: {
        'nav-about': '关于我',
        'nav-experience': '工作经历',
        'nav-projects': '项目经历',
        'nav-skills': '专业技能',
        'nav-contact': '联系方式',
        'name': '叶素康',
        'position': 'Java开发工程师',
        'experience': '6年工作经验',
        'location': '苏州',
        'contact-me': '联系我',
        'download-resume': '下载简历',
        'education-title': '教育背景',
        'university': '徐州工程学院',
        'degree': '本科 · 软件工程',
        'study-period': '2015 - 2019',
        'experience-title': '工作经历',
        'work1-period': '2022.07 - 至今',
        'work1-company': '上海爱湃斯科技有限公司苏州分公司',
        'work1-position': 'Java开发工程师',
        'work-duties': '工作内容：',
        'achievements': '主要成就：',
        'projects-title': '项目经历',
        'skills-title': '专业技能',
        'contact-title': '联系方式',
        'contact-description': '如果您对我的经历感兴趣，欢迎与我联系！',
        'send-email': '发送邮件',
        'phone-contact': '电话联系',
        'linkedin': 'LinkedIn',
        'skill-programming': '编程语言',
        'skill-frameworks': '框架技术',
        'skill-database': '数据库',
        'skill-middleware': '中间件',
        'skill-devops': 'DevOps',
        'skill-tools': '工具'
    },
    en: {
        'nav-about': 'About',
        'nav-experience': 'Experience',
        'nav-projects': 'Projects',
        'nav-skills': 'Skills',
        'nav-contact': 'Contact',
        'name': 'Ye Sukang',
        'position': 'Java Developer',
        'experience': '6 Years Experience',
        'location': 'Suzhou',
        'contact-me': 'Contact Me',
        'download-resume': 'Download Resume',
        'education-title': 'Education',
        'university': 'Xuzhou University of Technology',
        'degree': 'Bachelor · Software Engineering',
        'study-period': '2015 - 2019',
        'experience-title': 'Work Experience',
        'work1-period': 'Jul 2022 - Present',
        'work1-company': 'Shanghai iPaaS Technology Co., Ltd. Suzhou Branch',
        'work1-position': 'Java Developer',
        'work-duties': 'Responsibilities:',
        'achievements': 'Key Achievements:',
        'projects-title': 'Project Experience',
        'skills-title': 'Technical Skills',
        'contact-title': 'Contact',
        'contact-description': 'If you are interested in my background, feel free to contact me!',
        'send-email': 'Send Email',
        'phone-contact': 'Phone',
        'linkedin': 'LinkedIn',
        'skill-programming': 'Programming',
        'skill-frameworks': 'Frameworks',
        'skill-database': 'Database',
        'skill-middleware': 'Middleware',
        'skill-devops': 'DevOps',
        'skill-tools': 'Tools'
    }
};

// 当前语言
let currentLanguage = localStorage.getItem('language') || 'zh';

// 汉堡菜单切换
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 点击导航链接后关闭菜单
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// 滚动时导航栏样式变化
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.98)';
        navbar.style.backdropFilter = 'blur(15px)';
        navbar.style.borderBottom = '1px solid rgba(71, 85, 105, 0.8)';
    } else {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.borderBottom = '1px solid var(--border-color)';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 页面加载时的动画
window.addEventListener('load', () => {
    // 延迟显示内容以创建淡入效果
    document.querySelectorAll('.timeline-item, .project-card, .skill-category').forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// 技能标签悬停效果
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// 添加打字机效果到标题
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 语言切换功能
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // 更新页面文本
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (languages[lang] && languages[lang][key]) {
            element.textContent = languages[lang][key];
        }
    });
    
    // 更新语言按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // 如果是中文，重新应用打字机效果
    if (lang === 'zh') {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            setTimeout(() => {
                typeWriter(heroTitle, '叶素康', 150);
            }, 100);
        }
    } else {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            setTimeout(() => {
                typeWriter(heroTitle, 'Ye Sukang', 150);
            }, 100);
        }
    }
}

// 初始化语言
function initLanguage() {
    switchLanguage(currentLanguage);
}

// 语言切换按钮事件
document.addEventListener('DOMContentLoaded', () => {
    // 初始化语言
    initLanguage();
    
    // 语言切换按钮事件监听
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
});

// 应用打字机效果到主标题
window.addEventListener('DOMContentLoaded', () => {
    // 打字机效果在语言切换函数中处理
}); 