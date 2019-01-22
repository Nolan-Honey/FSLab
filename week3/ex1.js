const compareNumToTen = (num) => new Promise((result, error) => {
        if(num > 10){
            result(num + " is greater that 10, success!")
        }else if(num == 10){
            result(num + " is equal to 10.")
        }
        error(num + " is less than 10, error!")
    });

compareNumToTen(9)
.then(result => console.log(result))
.catch(error => console.log(error))