function showNumbers(a, b) {
    let currentNum = a;
    let timerID = setInterval(function() {
        console.log(currentNum);
        currentNum++;
        if (currentNum > b) {
            clearInterval(timerID);
        } 
        
    }, 1000);
}

showNumbers(-7, 1);







           
           
    
