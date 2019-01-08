function largest(arr){
    var biggest = arr[0];
    for(var x = 1; x<= arr.length; x++){
        if (arr[x] > arr[x-1] && arr[x] > biggest){
            biggest = arr[x];
        }
    }
    return biggest;
}
console.log(largest([1000,12,14,2,4,100,11,10,11]));