// Write a program that prints the numbers from 1 to 100. But for multiples of 
// five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples 
// of seven (7, 14, 21, etc.) print "Monkey". 
// For numbers which are multiples of both five and seven print "ChickenMonkey".


function chickenMonkey (){

    for (let i = 1; i <= 100; i++) {
        // Outputs all the multiples of 5 and prints "chicken"
        
        if (i % 5 === 0 && i % 7 === 0) {
            console.log("ChickenMonkey");
        }else if (i % 5 === 0) {
            console.log("Chicken"); 
        }else if (i % 7 === 0) { 
            console.log("Monkey");
        }else {
            console.log(i);
        }
    }
}

chickenMonkey()