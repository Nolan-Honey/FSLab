var values = [1, 60, 34, 30, 20, 5]

function filterLessThan20(values){
    const result = values.filter(values => values < 20);
    return result
}

console.log(filterLessThan20(values))