document.addEventListener('DOMContentLoaded', function() {
    // 初始化首页动画
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // 处理首页轮播图
    const carousel = document.querySelector('.hero-carousel');
    if (carousel) {
        let currentSlide = 0;
        const slides = carousel.querySelectorAll('.slide');
        
        function showSlide(index) {
            slides.forEach(slide => slide.style.display = 'none');
            slides[index].style.display = 'block';
        }
        
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }
}); 