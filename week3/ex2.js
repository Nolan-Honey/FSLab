const arrayOfNames = ['jaxx', 'tiny', 'clay']
const mixedArray = ['anarchy', 99, true]

const makeUpperCase = (array) => new Promise((result, error) => {
    try{result(array.map(x => x.toUpperCase()))}
    finally{error("Passed array contained non-strings!")}
});

const sortWords = (array) => new Promise((result, error) => {
    result(array.sort())
    error("Unable to sort alphabetically")
});



makeUpperCase(arrayOfNames)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))

makeUpperCase(mixedArray)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))

