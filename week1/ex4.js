function angles(x){
    if(x > 0 && x < 90){
        return "Acute angle";
    }
    else if(x == 90){
        return "Right angle";
    }
    else if(x > 90 && x < 180){
        return "Obtuse angle";
    }
    else if (x == 180){
        return "Straight angle";
    }
    else{
        return "Angle outside scope of study";
    }
}

console.log(angles(47))
console.log(angles(90))
console.log(angles(145))
console.log(angles(180))