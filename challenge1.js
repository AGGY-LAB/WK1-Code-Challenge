// A function that prompts  a student to input their marks  and outputs the grade corresponding to the marks.

function marksToGrade () {
    let marks =parseInt(window.prompt("Please enter your marks"));

    if(marks>79 && marks<=100){
        alert( "Your Grade is : A");
    }
    else if(marks>=60 && marks<80){
        alert("Your Grade is : B");
    }
    else if(marks>=50 && marks<60){
        alert( "Your Grade is : C");
    }
    else if(marks>=40 && marks<50){
        alert("Your Grade is : D");
    }
    else if(marks>=0 && marks<40){
        alert( "Your Grade is : E");
    }
    else if(marks<0 || marks>100){
        alert(" Invalid input! Please enter marks that are between 0 and 100");
    }
}
marksToGrade()