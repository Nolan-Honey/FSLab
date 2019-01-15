//js version
function gretter(myArray, counter){
    var greetText = "Hello ";
    for (var index = 0; index < myArray.length; index++){
        console.log(greetText + myArray[index]);
    }
}

gretter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3);


//es6 version

function gretter2(myArray){ //I hate the other syntax const gretter2 =>...
    const greetText = 'Hello '
    for (let index of myArray){
        console.log(greetText + index)
    }
}
gretter2(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3)