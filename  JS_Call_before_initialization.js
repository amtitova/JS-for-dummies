console.log(multipleSalary(50000 * 1, 5));

function multipleSalary(salary, bonus) {
  return salary * bonus;
}
console.log(multipleSalary(520, 12));

validateInput("Не опускай руки!");

const validateInput = function (input, rule) {
  console.log(input.length);
  input.length > rule
    ? console.log("Тут все получилось!")
    : comsole.log("Тут все должно было показать ошибку правила");
};

validateInput("Не опускай руки! Все придет!", 15);

const multipleValue = (value) => value * 4;
// Функция => заменяяет {} и ключевое слово return!!!

console.log(multipleValue(10));
