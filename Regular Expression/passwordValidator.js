const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
const password = "Password1!"; // Example password to validate

const isValid = regex.test(password);
console.log(`Is the password valid? ${isValid}`);
