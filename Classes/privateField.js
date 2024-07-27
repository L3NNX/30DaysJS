class Account {
    // Private field for balance
    #balance;
  
    constructor(initialBalance) {
      if (initialBalance < 0) {
        throw new Error("Initial balance cannot be negative.");
      }
      this.#balance = initialBalance; // Set the initial balance
    }
  
    // Method to deposit money
    deposit(amount) {
      if (amount <= 0) {
        throw new Error("Deposit amount must be positive.");
      }
      this.#balance += amount; // Update the balance
      console.log(`Deposited: $${amount}. New Balance: $${this.#balance}`);
    }
  
    // Method to withdraw money
    withdraw(amount) {
      if (amount <= 0) {
        throw new Error("Withdrawal amount must be positive.");
      }
      if (amount > this.#balance) {
        throw new Error("Insufficient funds.");
      }
      this.#balance -= amount; // Update the balance
      console.log(`Withdrew: $${amount}. New Balance: $${this.#balance}`);
    }
  
    // Method to get the current balance (read-only)
    getBalance() {
      return this.#balance;
    }
  }
  
  // Example usage:
  const myAccount = new Account(100); // Create an account with an initial balance of $100
  
  // Deposit money
  myAccount.deposit(50); // Output: Deposited: $50. New Balance: $150
  
  // Withdraw money
  myAccount.withdraw(30); // Output: Withdrew: $30. New Balance: $120
  
  // Check balance
  console.log(`Current Balance: $${myAccount.getBalance()}`); // Output: Current Balance: $120
  
  // Attempt to withdraw more than the balance
  try {
    myAccount.withdraw(200); // This will throw an error
  } catch (error) {
    console.error(error.message); // Output: Insufficient funds.
  }
  