// let's be fancy and use variables
var min = 1;
var max = 100;

for (var i=min; i<=max; i++) {
    var msg = ''; // console.log adds a \n automatically, so to have FizzBuzz on a single line I use this variable
    
    if (i%3 != 0 && i%5 != 0) {
        msg = i;
    } else {
        if(i%3 == 0) {
            msg += "Fizz";
        }
        if(i%5 == 0) {
            msg += "Buzz";
        }
    }
    
    console.log(msg);
}
