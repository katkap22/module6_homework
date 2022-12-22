function task(a) {
    return function(b) {
                let sum = a + b;
                return sum;
            }
}

console.log(task(20)(30));
