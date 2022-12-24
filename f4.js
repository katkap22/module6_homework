
function showNumbers(a, b) {
    let currentNum = a;
    let timerID = setInterval(function() {
        console.log(currentNum);
        if (currentNum >= b) {
            clearInterval(timerID);
        } else {
            currentNum++;
        }   
    }, 1000);
}

// 2ой способ с использованием рекурсивного вызова
// function showNumbers(a, b) {
    // let currentNum = a;  
    // setTimeout(function go() {
    //   console.log(currentNum);
    //   if (currentNum < b) {
        // setTimeout(go, 1000);
    //   }
    //   currentNum++;
    // }, 1000);
// }


showNumbers(-5, 1);







           
           
    
