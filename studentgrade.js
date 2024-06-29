// A - 79,
// B- 60 - 79, 
// C -  59 - 49, 
// D - 40 - 49, 
// E - less - 40 



const studentmark = prompt('Please enter the student student marks:');

// function used to calculate the student grade from their marks
function studentGrader(studentmark){
        //An if statement that checks and ensures that the values are between 0 & 100, if not then the user is prompted to enter correct marks
        if (studentmark >= 0 && studentmark <= 100){
            //assigns a grade depending on the marks
            
            switch (true) {
                case (studentmark > 79):
                    alert("Student has scored an A")//The student grade is printed out
                    break;
                case(studentmark >= 60 && studentmark <= 79):
                    alert("Student has scored an B")
                    break;
                case(studentmark >= 49 && studentmark <= 59):
                    alert("Student has scored an C")
                    break; 
                case(studentmark >= 40 && studentmark <= 49):
                    alert("Student has scored an D")
                    break; 
                case(studentmark < 40):
                    alert("Student has scored an E")

                default:
                    break;
            }
        }else{
            alert("Null")
        }
     // null appears on prompt when user has put in an invalid grade
    
}
studentGrader(studentmark);