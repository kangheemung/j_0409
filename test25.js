// Assuming 'num' is the user-input number
let num = 0; // User input number

if (num <0) {
    console.log("입력한 숫자는 음성입니다.");
} else if (num >0) {
       console.log("입력한 숫자는 양성입니다.");
} else {
    console.log("입력한 숫자는 0입니다.");
}

let score=80;
let grade =''
if (90<=score && score<=100){
     grade ="A학점입니다."
} else if(80<=score && score<=89){
     grade ="B학점입니다."
}else if (70<=score && score<=79){
      grade ="C학점입니다."
}else if (60<=score && score<=69){
      grade ="D학점입니다."
} else if(0<=score && score<=59){
   grade ="F학점입니다."
    
}else{
    console.log("잘못된 범위의 점수입니다")
}
console.log(grade)

let member_skills=["HTML","CSS","Javascript","React"]

if (member_skills.includes("Javascript") && member_skills.includes("React")) {
    console.log("합격입니다.");
} else if (member_skills.includes("Javascript") || member_skills.includes("React")) {
    console.log("예비입니다.");
} else {
    console.log("탈락입니다.");
}