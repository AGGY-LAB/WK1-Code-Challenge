const yourPoints = function(speed){
    if (speed<70){
        return " Okay"
    }
    else if(speed>70){
        let points = (speed - 70)/5
        if(points<=12){
            return `Points: ${points}`
        }
        else if(points>12){
            return "License suspended"
        }
    }
}

console.log(yourPoints(80));