document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // 处理登录逻辑
    });
    
    // Google登录按钮处理
    const googleButton = document.querySelector('.auth-button.google');
    googleButton.addEventListener('click', function() {
        // 处理Google登录
    });
    
    // 邮箱链接登录处理
    const emailLinkButton = document.querySelector('.auth-button.email-link');
    emailLinkButton.addEventListener('click', function() {
        // 处理邮箱链接登录
    });
}); 