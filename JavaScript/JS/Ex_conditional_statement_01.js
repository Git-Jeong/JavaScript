let age = parseInt(prompt('나이를 입력해주세요 : '));

if(age >= 20){
    console.log('성인입니다.');
}
else{
    console.log('미성년자입니다.');
}

let java_score = parseInt(prompt('자바 점수를 입력해주세요 : '));
let web_score = parseInt(prompt('웹 점수를 입력해주세요 : '));
let android_score = parseInt(prompt('안드로이드 점수를 입력해주세요 : '));

let total_score = java_score + web_score + android_score;
let average_score = total_score / 3;

console.log('Java : ' + java_score);
console.log('Web : ' + web_score);
console.log('Android : ' + android_score);
grade = null;
if(average_score >= 90){
    grade = 'A'
}
else if(average_score >= 80){ 
    grade = 'B';
}
else if(average_score >= 70){ 
    grade = 'C';
}
else{ 
    grade = 'F';
} 
console.log("당신의 평균은 " + average_score + "점이고, " + grade +"학점 입니다.");