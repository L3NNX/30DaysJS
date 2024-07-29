function reverseString(str, index = str.length - 1) {
    if (index < 0) {
        return ""; // Base case: if the index is less than 0, return an empty string
    }
    return str[index] + reverseString(str, index - 1); // Recursive case
}


const testCases = [
    "hello",        
    "world",        
    "JavaScript",   
    "recursion",    
    "",             
    "a",            
    "12345"         
];

testCases.forEach((caseStr, index) => {
    const result = reverseString(caseStr);
    console.log(`Reversed string ("${caseStr}") is: "${result}"`);
});
