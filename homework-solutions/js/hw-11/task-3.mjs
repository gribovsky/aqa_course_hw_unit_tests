class Employee {
  // Ваш код
  #salary;
  constructor(firstName, lastName, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this.salary = salary;
  }

  nameValidation(value) {
    if (typeof value !== 'string') return false;
    if (value.length < 2 || value.length > 50) return false;
    return /^[a-zA-Z\s]+$/.test(value);
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (!this.nameValidation(value)) throw new Error('Invalid name');
    this._firstName = value;
  }
  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (!this.nameValidation(value)) throw new Error('Invalid surname');
    this._lastName = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || value <= 0 || Number.isNaN(value)) throw new Error('Invalid salary');
    this.#salary = value;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

class Developer extends Employee {
  // Ваш код
  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, salary);
    this._programmingLanguages = programmingLanguages;
  }

  get programmingLanguages() {
    return this._programmingLanguages;
  }
  set programmingLanguages(value) {
    this._programmingLanguages = value;
  }

  languageValidation(value) {
    if (typeof value !== 'string') return false;
    if (value.trim().length === 0) return false;
    return /^[a-zA-Z\s]+$/.test(value);
  }

  addProgrammingLanguage(language) {
    if (!this.languageValidation(language)) {
      throw new Error('Invalid language');
    } else this.programmingLanguages.push(language);
  }
}

class Manager extends Employee {
  // Ваш код
  constructor(firstName, lastName, salary, teamSize) {
    super(firstName, lastName, salary);
    this._teamSize = teamSize;
  }

  get teamSize() {
    return this._teamSize;
  }
  set teamSize(value) {
    if (value < 0) throw new Error('Invalid teamSize');
    this._teamSize = value;
  }
  increaseTeamSize() {
    this._teamSize++;
  }
}

class Designer extends Employee {
  // Ваш код
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    this._designTools = designTools;
  }

  get designTools() {
    return this._designTools;
  }
  set designTools(value) {
    this._designTools = value;
  }

  designToolsValidation(value) {
    if (typeof value !== 'string') return false;
    if (value.trim().length === 0) return false;
    return /^[a-zA-Z\s]+$/.test(value);
  }

  addDesignTool(tool) {
    if (!this.designToolsValidation(tool)) {
      throw new Error('Invalid tool');
    } else this.designTools.push(tool);
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
    for (const exisEmployee of this.#employees) {
      if (exisEmployee.getFullName() === employee.getFullName()) {
        throw new Error(`Employee ${employee.getFullName()} already exists`);
      }
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return this.#employees;
  }
  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const employee = this.#employees.find((el) => el._firstName === firstName);
    if (!employee) {
      throw new Error("Employee isn't found");
    }
    return employee;
  }

  #getEmployeeIndex(firstName) {
    const employeeIndex = this.#employees.findIndex((el) => el._firstName === firstName);
    if (employeeIndex === -1) throw new Error(`Employee ${firstName} not found`);
    return employeeIndex;
  }
  removeEmployee(firstName) {
    const employee = this.#getEmployeeIndex(firstName);
    this.#employees.splice(employee, 1);
  }
  getTotalSalary() {
    if (this.#employees.length === 0) return 0;
    return this.#employees.reduce((totalSalary, employee) => totalSalary + employee.salary, 0);
  }

  getEmployeesByProfession(profession) {
    if (typeof profession !== 'string' || profession.trim() === '') {
      throw new Error('Invalid profession');
    }
    return this.#employees.filter((employee) => employee.constructor.name === profession);
  }
}

export { Employee, Company, Designer, Developer, Manager };
