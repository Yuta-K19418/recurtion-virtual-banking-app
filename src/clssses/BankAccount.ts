class BankAccount {
  firstName: string = '';

  lastName: string = '';

  email: string = '';

  type: string = '';

  accountNumber = 0;

  money: number = 0;

  initialDeposit = 0;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    type: string,
    accountNumber: number,
    money: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.type = type;
    this.accountNumber = accountNumber;
    this.money = money;
    this.initialDeposit = money;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default BankAccount;
