console.log("hello");
// 4. Додати в прототип об’єкту «Користувач» метод «Показати дані»
const UserProp = {
  showData() {
    console.log(`ID: ${this.id}, Login: ${this.login}`);
  },
};
// 1. Створити об’єкт «Користувач» з властивостями «ІД», «логін»,  «пароль»
const User = Object.create(UserProp);
User.id = 1;
User.login = 2;
User.password = 3;

// 5. Створити об’єкт «Користувач2», що наслідує властивості і  методи об’єкту «Користувач» і має власну властивість «Адмін» зі  значеннями true/false. Перевизначити в об’єкті «Користувач2»  метод «Показати дані».

const User2 = Object.create(User);
User2.admin = true;
User2.showData = function () {
  console.log(`ID: ${this.id}, Login: ${this.login}, Admin: ${this.admin}`);
};

// 2. Створити об’єкт «Адмін», що містить властивістю «тип» зі  значенням «адмін»
// і методи: додати, видалити і змінити(написати  реалізацію методів).

const Admin = {
  type: "admin",

  add(item) {
    console.log(`Додаємо ${item}.`);
  },

  delete(item) {
    console.log(`Видаляємо ${item}.`);
  },

  change(item, newItem) {
    console.log(`Змінюємо ${item} на ${newItem}.`);
  },
};

// 3. Реалізувати об’єднання властивостей і методів об’єктів  «Користувач» і «Адмін».
const UserAdmin = Object.assign({}, User, Admin);

// 6. Завдання на роботу з класами, не виконувати наслідування від  попередніх об'єктів!
// Реалізувати класи «КористувачКлас» і  «АдмінКлас» з такими же методами і властивостями як
// і попередні  об’єкти. «АдмінКлас» наслідує методи та властивості від  «КористувачКлас».
// При реалізації використовувати геттери і  сеттери, наприклад, для перевірки даних чи виведення
// в різних  виглядах інформацію.

class UserClass {
  constructor(id, login, password) {
    this._id = id;
    this._login = login;
    this._password = password;
  }
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }

  get login() {
    return this._login;
  }

  set login(value) {
    this._login = value;
  }
  showData() {
    console.log(`ID: ${this._id}, Login: ${this._login}`);
  }
}
const params = {
  type: "admin",
};
class AdminClass extends UserClass {
  constructor(id, login, password) {
    super(id, login, password);
    this._type = "admin";
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }

  add(item) {
    console.log(`Додаємо ${item}.`);
  }

  delete(item) {
    console.log(`Видаляємо ${item}.`);
  }

  change(item, newItem) {
    console.log(`Змінюємо ${item} на ${newItem}.`);
  }
}


function runTask1() {
  console.log("User:", User);
}
function runTask2() {
  console.log("Admin:", Admin);
}
function runTask3() {
  console.log("UserAdmin:", UserAdmin);
}
function runTask4() {
  console.log("showData():", UserProp.showData);
}
function runTask5() {
  console.log("user2:", User2);

  console.log("userProp.isPrototypeOf(user):", UserProp.isPrototypeOf(User));
}
function runTask6_1() {
  console.log("UserClass:", UserClass);
}
function runTask6_2() {
  console.log("AdminClass:", AdminClass);
}
