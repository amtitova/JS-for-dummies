const validateInput = function (input, rule) {
  console.log(input.length);
  input.length > rule
    ? console.log("Тут все получилось!")
    : comsole.log("Тут все должно было показать ошибку правила");
};

validateInput("Не опускай руки! Все придет!", 15);

let id = "234";

const createUser = (id, name, age, email) => {
  let user = {
    id: id,
    userName: name,
    age: age,
    userEmail: email,
  };

  return user;
};

console.log(createUser(id, "Анна", 32, "anna@gmail.com"));
