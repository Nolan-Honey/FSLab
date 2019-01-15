function capitalize(str){
    let char = [ ...str.toLowerCase() ]
    char[0] = char[0].toUpperCase()
    return char.join('')
}

function capitalizeLetters(array){
    return (array.map(x => capitalize(x)))
}

const colours = ['red', 'gREen', 'BLUE', 'yELLOW']
console.log(capitalizeLetters(colours))