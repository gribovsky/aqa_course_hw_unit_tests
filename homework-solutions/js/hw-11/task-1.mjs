class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.salary = salary;
  }
  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== 'string') throw new Error('Invalid name');
    this._firstName = value;
  }
  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== 'string') throw new Error('Invalid surname');
    this._lastName = value;
  }
  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string') throw new Error('Invalid profession');
    this._profession = value;
  }
  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || value < 0) throw new Error('Invalid salary');
    this.#salary = value;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

class Company {
  // Ваш код
  #employees;
  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = [];
  }
  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== 'string') throw new Error('Invalid title');
    this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    if (typeof value !== 'number') throw new Error('Invalid number');
    this._phone = value;
  }
  get address() {
    return this._address;
  }

  set address(value) {
    if (typeof value !== 'string') throw new Error('Invalid address');
    this._address = value;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) throw new Error('Invalid odject');
    this.#employees.push(employee);
  }

  getEmployees() {
    return this.#employees;
  }
  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

export { Employee, Company };
