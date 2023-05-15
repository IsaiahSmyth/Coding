function FizzBuzz (){
   var number = 1;
    while(number < 101) {
        if (number%3==0 && number%5==0) {
            console.log("Fizz Buzz");
            number++;
        }
        else if (number%3==0){
            console.log("Fizz");
            number++;
        }
        else if (number%5==0){
            console.log("Buzz");
            number++;
        }
        else {
            console.log ("number");
            number++;
        }
    }
    

}
FizzBuzz()