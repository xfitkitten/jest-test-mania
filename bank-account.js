export class BankAccount {
    constructor() {
        
    }
    open() {
        if (this.balance) {
          throw new ValueError
        } else {
          this.balance = 0 
        }
    }
    deposit(amount) {
        if (isNaN(this.balance)) {
          throw new ValueError
        } else {
          this.balance += amount
        }
    }
    withdraw(amount) {
        if (isNaN(this.balance)) {
          throw new ValueError
        } else {
          this.balance -= amount
        }
    }
    close() {
        if (isNaN(this.balance)) {
          throw new ValueError
        } else {
          this.balance = NaN
        }
    }
    getBalance() {
        if (isNaN(this.balance)) {
          m
        } else {
          return this.balance
        }
}
}

export class ValueError extends Error {
    constructor() {
      super('Bank error ocurred')
    }
}