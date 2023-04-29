const messages = ['Hello.', 'こんにちは.', '안녕하세요.', 'สวัสดีครับ.', 'สวัสดีค่ะ.', '	Bonjour.', 'Guten Tag.', 'Dobrý den'];
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
