function showMessage() { // Оголошення функції showMessage
  let userName = prompt("Будь ласка, введіть ваше ім'я:"); // Створення змінної userName, яка отримує значення з prompt
  if (userName != null && userName !== "") { // Перевірка, чи введене ім'я не є null і не є пустим рядком
    alert('Hello, ' + userName + '!'); // Відображення повідомлення з ім'ям користувача
  }
}
window.addEventListener('load', showMessage); // Відправити подію "load" на вікно, коли сторінка завантажена