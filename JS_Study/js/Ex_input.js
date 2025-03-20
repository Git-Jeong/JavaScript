//JS 입력문
let age = prompt("나이를 입력해 주세요 : ");
console.log("당신의 나이는 " + age + "입니다.");
//prompt는 사용자에게 입력창을 띄워 입력을 받는다.

if(age != null){
    // confirm("확인을 누르면 다음으로 넘어갑니다.");
    let adult = confirm("성인입니까?");
    console.log("당신은 성인입니까? : " + adult);
    //confirm은 사용자에게 확인창을 띄워 확인을 받는다.
    //confirm은 확인을 누르면 true, 취소를 누르면 false를 반환한다.
} 