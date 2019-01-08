function mv3(str){

    str2 = str.slice(str.length-3,str.length);
    str3 = str.slice(0,str.length-3);
    str2 += str3;
    return str2;
}
console.log(mv3("apache"));