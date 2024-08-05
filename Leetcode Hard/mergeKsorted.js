// Solve the "Merge k Sorted Lists" problem on LeetCode.
// • Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
// • Create a few test cases with linked lists and log the merged list.


class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;
    return mergeHelper(lists, 0, lists.length - 1);
}

function mergeHelper(lists, left, right) {
    if (left === right) return lists[left];
    const mid = Math.floor((left + right) / 2);
    const list1 = mergeHelper(lists, left, mid);
    const list2 = mergeHelper(lists, mid + 1, right);
    return mergeTwoLists(list1, list2);
}

function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(0);
    let curr = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }

    if (list1 !== null) {
        curr.next = list1;
    }

    if (list2 !== null) {
        curr.next = list2;
    }

    return dummy.next;
}

// Test cases
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let curr = dummy;
    for (let i = 0; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }
    return dummy.next;
}

function printLinkedList(head) {
    let curr = head;
    let result = "";
    while (curr !== null) {
        result += curr.val + " ";
        curr = curr.next;
    }
    console.log(result.trim());
}

// Test case 1
const lists1 = [
    createLinkedList([1, 4, 5]),
    createLinkedList([1, 3, 4]),
    createLinkedList([2, 6])
];
const merged1 = mergeKLists(lists1);
printLinkedList(merged1); // Output: 1 1 2 3 4 4 5 6

// Test case 2
const lists2 = [
    createLinkedList([]),
    createLinkedList([0]),
    createLinkedList([])
];
const merged2 = mergeKLists(lists2);
printLinkedList(merged2); // Output: 0

// Test case 3
const lists3 = [
    createLinkedList([1, 2, 3]),
    createLinkedList([1, 2, 3]),
    createLinkedList([1, 2, 3])
];
const merged3 = mergeKLists(lists3);
printLinkedList(merged3); // Output: 1 1 1 2 2 2 3 3 3
