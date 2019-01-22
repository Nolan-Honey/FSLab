var promise1 = 101
var promise2 = "follow the white"
var promise3 = new Promise(function(resolve, reject){
    resolve("rabbit...neo");
});

promise1.toLocaleString([promise1, promise2, promise3]).then(function(arr){
    console.log(arr);
})