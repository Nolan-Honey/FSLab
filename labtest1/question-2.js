
const resolvedPromise = () => {
    setTimeout(() =>{  
        let success = {'message' : 'delayed success!'}
        var promise = new Promise(function(resolve, reject){  
            if(true){
                resolve(console.log(success))
            }
        })
    }, 500)
} 

const rejectedPromise = () => {
    setTimeout(() =>{
        var promise = new Promise(function(resolve, reject){
            //do something
            if(true){
                resolve("code worked")
            }
        })
        try {
            throw new Error('error: delayed exception!')
        }catch (e){
            console.error(e)
        }
    },500)
}

resolvedPromise()
rejectedPromise()