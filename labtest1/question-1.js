function lowercase(str){
    var char = []
    var promiseLowerCase = new Promise(function(resolve, reject){
        str.forEach(function (value) {
            if(typeof value == "string"){
                char.push(value.toLowerCase())
            }
        })
        if (0 < char.length) {
            resolve("parsing...")
          } 
        else{
            reject(Error("No strings found"))
        }
        
    })
    return char
}
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
console.log(lowercase(mixedArray))
