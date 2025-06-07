document.addEventListener('DOMContentLoaded', function() {
    // 处理交易历史
    const transactionList = document.querySelector('.transaction-list');
    if (transactionList) {
        // 模拟加载交易历史
        loadTransactions();
    }

    // 处理余额更新
    function updateBalance(amount) {
        const balanceElement = document.querySelector('.balance-amount');
        if (balanceElement) {
            balanceElement.textContent = `$${amount.toFixed(2)}`;
        }
    }

    // 加载交易历史
    function loadTransactions() {
        // 这里应该是从后端API获取数据
        const mockTransactions = [
            { type: 'deposit', amount: 1000, date: '2024-03-15' },
            { type: 'withdrawal', amount: -500, date: '2024-03-14' },
            { type: 'transfer', amount: -200, date: '2024-03-13' }
        ];

        mockTransactions.forEach(transaction => {
            const transactionElement = document.createElement('div');
            transactionElement.className = 'transaction-item';
            transactionElement.innerHTML = `
                <div class="transaction-info">
                    <div class="transaction-type">${transaction.type}</div>
                    <div class="transaction-date">${transaction.date}</div>
                </div>
                <div class="transaction-amount ${transaction.amount > 0 ? 'positive' : 'negative'}">
                    ${transaction.amount > 0 ? '+' : ''}$${Math.abs(transaction.amount)}
                </div>
            `;
            transactionList.appendChild(transactionElement);
        });
    }
}); 