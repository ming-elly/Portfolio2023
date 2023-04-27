const messages = ['おはよう', 'こんにちは', 'こんばんは'];
let currentIndex = 0;
const messageElement = document.getElementById('message');

setInterval(() => {
  messageElement.classList.add('hide');
  
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % messages.length;
    messageElement.textContent = messages[currentIndex];
    messageElement.classList.remove('hide');
  }, 500);
  
}, 3000);
