// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to add two numbers represented by linked lists
function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0); // Dummy head for the result list
    let current = dummyHead; // Pointer to the current node in the result list
    let carry = 0; // Variable to store carry over

    while (l1 !== null || l2 !== null || carry > 0) {
        const val1 = l1 ? l1.val : 0; // Get value from l1 or 0 if l1 is null
        const val2 = l2 ? l2.val : 0; // Get value from l2 or 0 if l2 is null
        const sum = val1 + val2 + carry; // Calculate sum
        carry = Math.floor(sum / 10); // Update carry
        current.next = new ListNode(sum % 10); // Create new node with the digit
        current = current.next; // Move to the next node

        // Move to the next nodes in l1 and l2
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyHead.next; // Return the next node of dummy head (the actual result)
}

// Helper function to print the linked list
function printList(node) {
    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result.join(' -> '));
}

// Test Case 1: (2 -> 4 -> 3) + (5 -> 6 -> 4)
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let result1 = addTwoNumbers(l1, l2);
printList(result1); // Output: 7 -> 0 -> 8

// Test Case 2: (0) + (0)
l1 = new ListNode(0);
l2 = new ListNode(0);
let result2 = addTwoNumbers(l1, l2);
printList(result2); // Output: 0

// Test Case 3: (9 -> 9 -> 9) + (1)
l1 = new ListNode(9, new ListNode(9, new ListNode(9)));
l2 = new ListNode(1);
let result3 = addTwoNumbers(l1, l2);
printList(result3); // Output: 0 -> 0 -> 0 -> 1

// Test Case 4: (1 -> 8) + (0)
l1 = new ListNode(1, new ListNode(8));
l2 = new ListNode(0);
let result4 = addTwoNumbers(l1, l2);
printList(result4); // Output: 1 -> 8
