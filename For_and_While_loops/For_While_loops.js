// Chanllenge 1
function forLoop() {
    for (var i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
forLoop()


function whileLoop() {
    var i = 1;
    while (i <= 20) {
        if (i % 2 == 0) {
            console.log(i);
            i++;
        }

    }
}
whileLoop()


// Challenge 2
function forLoop_2() {
    for (var Number=100; Number>=0; Number--){
        if(Number%3){
            console.log(Number);
        }
    }
}
forLoop_2();

function whileLoop_2() {
    var Number=0;
    while (Number>=0) {
        if(Number%3==0)
        console.log(Number);
    }
}
whileLoop_2();


// Challenge 3
function forLoop_3() {
    for(var Number=4; Number>=3.5; Number-=.5) {
        if(Number%1.5==0) {
            console.log(Number);
        }
    }
}
forLoop_3();

function whileLoop_3() {
    var Number=4;
    while (Number>=3.5) {
        console.log(Number);
        Number-=.5;
    }
}
whileLoop_3()


// Challenge 4
function forLoop_4() {
    var sum = 0;
    for (var Number=1; Number<=100; Number++) {
        sum += Number;
    }
    console.log(sum);
}
forLoop_4()

function whileLoop_4() {
    var sum=0;
    var Number=1;
    while (Number<=100) {
        sum += Number;
        Number++;
    }
    console.log(sum);
}
whileLoop_4;


// Challenge 5
function forLoop_5() {
    var product=0;
    for(var Number=1; Number<=12; Number++) {
        product*=Number;
    }
    console.log(product)
}
forLoop_5();


function whileLoop_5() {
    var product=0;
    var Number=1;
    while(Number<=12) {
        product*=Number;
        Number++;
    }
    console.log(product)
}
whileLoop_5();