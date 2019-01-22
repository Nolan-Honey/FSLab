const delayedMultiply = (num) => {
    setTimeout(()=>{
        console.log('done!')
        return num * num
    },500);
}

const delayedPromise = (num) => new Promise((result, error) =>{
result(setTimeout(()=>{
    return num * num
},500))
error("Invalid delay input format")
})

async function asyncPromise(num) {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), delayedPromise(num))
    });
  
    let result = await promise; 
    alert(result); 
  }

delayedPromise(5)
.then(result => console.log(result))    

asyncPromise(6)
.then(result => console.log(result))