// Module for managing a collection of items
function createItemManager() {
    // Private array to hold the items
    const items = [];
  
    // Return an object with methods to manage the items
    return {
      // Method to add an item
      addItem: function(item) {
        items.push(item);
        console.log(`Added: ${item}`);
      },
      
      // Method to remove an item
      removeItem: function(item) {
        const index = items.indexOf(item);
        if (index !== -1) {
          items.splice(index, 1);
          console.log(`Removed: ${item}`);
        } else {
          console.log(`Item not found: ${item}`);
        }
      },
  
      // Method to list all items
      listItems: function() {
        console.log('Items in the collection:');
        items.forEach((item, index) => {
          console.log(`${index + 1}: ${item}`);
        });
      }
    };
  }
  
  // Create an instance of the item manager
  const itemManager = createItemManager();
  
  // Use the item manager to add, remove, and list items
  itemManager.addItem('Apple');
  itemManager.addItem('Banana');
  itemManager.addItem('Orange');
  
  itemManager.listItems(); // List all items
  
  itemManager.removeItem('Banana'); // Remove an item
  itemManager.listItems(); // List all items again
  
  itemManager.removeItem('Grapes'); // Attempt to remove a non-existent item
  