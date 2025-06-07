document.addEventListener('DOMContentLoaded', function() {
    // 处理市场数据过滤
    const filterButtons = document.querySelectorAll('.market-filters button');
    const marketCards = document.querySelectorAll('.market-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            marketCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 处理市场数据排序
    const sortSelect = document.querySelector('.market-sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const sortBy = e.target.value;
            const cards = Array.from(marketCards);
            
            cards.sort((a, b) => {
                const aValue = parseFloat(a.dataset[sortBy]);
                const bValue = parseFloat(b.dataset[sortBy]);
                return bValue - aValue;
            });
            
            const container = cards[0].parentNode;
            cards.forEach(card => container.appendChild(card));
        });
    }
}); 