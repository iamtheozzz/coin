document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(signupForm);
            const data = Object.fromEntries(formData.entries());
            
            // 验证密码
            if (data.password !== data['confirm-password']) {
                showError('Passwords do not match');
                return;
            }
            
            // 验证条款同意
            if (!data.terms) {
                showError('Please agree to the Terms of Service and Privacy Policy');
                return;
            }
            
            // 发送注册请求
            submitSignup(data);
        });
    }
    
    // Google注册按钮处理
    const googleButton = document.querySelector('.auth-button.google');
    if (googleButton) {
        googleButton.addEventListener('click', function() {
            // 处理Google注册
            initiateGoogleSignup();
        });
    }
    
    // 邮箱链接注册处理
    const emailLinkButton = document.querySelector('.auth-button.email-link');
    if (emailLinkButton) {
        emailLinkButton.addEventListener('click', function() {
            // 处理邮箱链接注册
            initiateEmailLinkSignup();
        });
    }
    
    function showError(message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        signupForm.insertBefore(errorElement, signupForm.firstChild);
    }
    
    function submitSignup(data) {
        // 这里应该是发送到后端的API请求
        console.log('Submitting signup data:', data);
    }
    
    function initiateGoogleSignup() {
        // 实现Google注册逻辑
        console.log('Initiating Google signup');
    }
    
    function initiateEmailLinkSignup() {
        // 实现邮箱链接注册逻辑
        console.log('Initiating email link signup');
    }
}); 