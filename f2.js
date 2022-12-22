function determinePrimeNum(num) {
    let res = true;
    if (num <= 1000) {
        if (num ===0 || num === 1) {
            res = false;
        } else { 
            for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                res = false;
            } 
            break;
          }
        }
        if (res === true) {
            console.log(`Число ${num} - простое`);
        } else {
            console.log(`Число ${num} - не является простым`); 
        }      
    } else {
        console.log('Введены неверные данные, нужно ввести не больше 1000');
    }
}
determinePrimeNum(2);
