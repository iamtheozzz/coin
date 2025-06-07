document.addEventListener('DOMContentLoaded', function() {
    const messageList = document.querySelector('.message-list');
    const messageContent = document.querySelector('.message-content');
    const messageInput = document.querySelector('.message-input input');
    const sendButton = document.querySelector('.message-input button');

    // 处理消息搜索
    const searchInput = document.querySelector('.message-search input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const conversations = messageList.querySelectorAll('.conversation');
            
            conversations.forEach(conv => {
                const name = conv.querySelector('.name').textContent.toLowerCase();
                conv.style.display = name.includes(searchTerm) ? 'flex' : 'none';
            });
        });
    }

    // 处理消息发送
    if (sendButton && messageInput) {
        sendButton.addEventListener('click', () => {
            const message = messageInput.value.trim();
            if (message) {
                sendMessage(message);
                messageInput.value = '';
            }
        });

        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const message = messageInput.value.trim();
                if (message) {
                    sendMessage(message);
                    messageInput.value = '';
                }
            }
        });
    }

    function sendMessage(text) {
        const chat = messageContent.querySelector('.message-chat');
        const messageElement = document.createElement('div');
        messageElement.className = 'message sent';
        messageElement.innerHTML = `
            <div class="message-content">${text}</div>
            <div class="message-time">${new Date().toLocaleTimeString()}</div>
        `;
        chat.appendChild(messageElement);
        chat.scrollTop = chat.scrollHeight;
    }
}); 