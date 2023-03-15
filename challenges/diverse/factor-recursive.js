function factorialize(num) {
    if (num <= 1) {
        return 1;
    } else {
        let fact = factorialize(num - 1);
        fact *= num;
        return fact;
    }
}

console.log(factorialize(5));