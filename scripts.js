function getArguments() {
  var num1 = prompt('Перше число:');
  var num2 = prompt('Друге число:');
  return [parseInt(num1), parseInt(num2)]; // Повертає масив з числами
}
function calcSum(a, b) {
  return a + b; // Повертає суму двох чисел
}
window.addEventListener('load', function() {
  var numbers = getArguments(); // Отримує два числа
  var sum = calcSum(numbers[0], numbers[1]); // Рахує суму чисел
  alert('Сума введених чисел: ' + sum); // Показує суму чисел на екрані
});