function getArguments() {
  var num1 = prompt('Перше число:');
  var num2 = prompt('Друге число:');
  return [parseInt(num1), parseInt(num2)]; // Повертає масив з числами
}
function calcMult(a, b) {
  return a * b; // Повертає добуток двох чисел
}
window.addEventListener('load', function() {
  var numbers = getArguments(); // Отримує два числа
  var mult = calcMult(numbers[0], numbers[1]); // Рахує добуток чисел
  alert('Добуток введених чисел: ' + mult); // Показує добуток чисел на екрані
});
