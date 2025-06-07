document.addEventListener('DOMContentLoaded', function() {
    // 初始化价格图表
    const priceChart = document.querySelector('.price-chart');
    if (priceChart) {
        // 这里可以集成图表库，如Chart.js
        initializePriceChart();
    }

    // 处理价格更新
    function updatePrice(price, change) {
        const priceElement = document.querySelector('.price-value');
        const changeElement = document.querySelector('.price-change');
        
        if (priceElement) priceElement.textContent = `$${price}`;
        if (changeElement) {
            changeElement.textContent = `${change > 0 ? '+' : ''}${change}%`;
            changeElement.classList.toggle('negative', change < 0);
        }
    }

    // 模拟实时价格更新
    setInterval(() => {
        const randomChange = (Math.random() - 0.5) * 2;
        const currentPrice = parseFloat(document.querySelector('.price-value').textContent.slice(1));
        const newPrice = currentPrice * (1 + randomChange / 100);
        updatePrice(newPrice.toFixed(2), randomChange.toFixed(2));
    }, 5000);
}); 