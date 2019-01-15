
function capitalize(str){
    let char = [ ...str.toLowerCase() ]
    char[0] = char[0].toUpperCase()
    return char.join('')
}



