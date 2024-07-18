function repeat(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}

function sayHello() {
    console.log("Hello!");
}

repeat(sayHello, 3);