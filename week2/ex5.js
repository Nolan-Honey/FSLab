var array = [1,2,3,4,5]


function add(a, b) {
    return a + b
}

function multiply(a, b){
    return a * b
}

function calculateSum(input){
    return input.reduce(add,0)
}

function calculateProduct(input){
    return input.reduce(multiply,1)
}

console.log(calculateSum(array))
console.log(calculateProduct(array))