import promptSync from 'prompt-sync';
const prompt = promptSync();
class Stack {
    constructor() {
      this.items = []; // Array to hold the stack elements
    }
  
    // Method to add an element to the top of the stack
    push(value) {
      this.items.push(value);
      console.log(`Pushed ${value} onto the stack.`);
    }
  
    // Method to remove and return the top element of the stack
    pop() {
      if (this.isEmpty()) {
        console.log("Stack is empty. Cannot pop.");
        return null;
      }
      const poppedValue = this.items.pop();
      console.log(`Popped ${poppedValue} from the stack.`);
      return poppedValue;
    }
  
    // Method to return the top element without removing it
    peek() {
      if (this.isEmpty()) {
        console.log("Stack is empty. Nothing to peek.");
        return null;
      }
      const topValue = this.items[this.items.length - 1];
      console.log(`Top element is ${topValue}.`);
      return topValue;
    }
  
    // Method to check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Method to return the number of elements in the stack
    size() {
      return this.items.length;
    }
  
    // Method to display all elements in the stack
    display() {
      if (this.isEmpty()) {
        console.log("Stack is empty.");
      } else {
        console.log("Stack elements:", this.items.join(' <- '));
      }
    }
  }
  
  // Creating a new stack
  const stack = new Stack();
  
  // Function to prompt the user for input
  const promptUser = () => {
    console.log("\nOptions:");
    console.log("1. Push an element");
    console.log("2. Pop an element");
    console.log("3. Peek the top element");
    console.log("4. Check if the stack is empty");
    console.log("5. Get the size of the stack");
    console.log("6. Display the stack");
    console.log("7. Exit");
  
    const option = prompt("Choose an option (1-7): ");
  
    switch (option) {
      case '1':
        const value = prompt("Enter a value to push: ");
        stack.push(value);
        promptUser(); // Prompt again after pushing
        break;
      case '2':
        stack.pop();
        promptUser(); // Prompt again after popping
        break;
      case '3':
        stack.peek();
        promptUser(); // Prompt again after peeking
        break;
      case '4':
        console.log(stack.isEmpty() ? "Stack is empty." : "Stack is not empty.");
        promptUser(); // Prompt again after checking isEmpty
        break;
      case '5':
        console.log(`Current stack size: ${stack.size()}`);
        promptUser(); // Prompt again after checking size
        break;
      case '6':
        stack.display();
        promptUser(); // Prompt again after displaying
        break;
      case '7':
        console.log("Exiting...");
        break;
      default:
        console.log("Invalid option. Please choose again.");
        promptUser(); // Prompt again for invalid input
    }
  };
  
  // Start prompting the user
  promptUser();
  