for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

for (let j = 1; j <= 10; j++) {
    if (j === 7) {
        break;
    }
    console.log(j);
}