//과제1. 사용자가 입력한 아이디, 패스워드, 이름, 번호, 생년월일을 콘솔창에 출력하시오.
//[실행결과]
// 아이디: smhrd
// 패스워드: 1234
// 이름: 홍길동
// 혈액형: B형
// 번호: 062-655-3510
// 생년월일: 2023-10-02
// 이메일: smhrd@daum.net


const new_user = (event) => {
    event.preventDefault();
    let user_id = document.getElementsByName('id')[0].value;
    let user_pw = document.getElementsByName('pwd')[0].value;
    let user_name = document.getElementsByName('name')[0].value; 
    let user_blood = document.querySelector('input[name="blood"]:checked').value;
    let user_phone_number = document.getElementsByName('phone')[0].value;
    let user_birth = document.getElementsByName('birth')[0].value;
    let user_email_1 = document.getElementsByName('email')[0].value;
    let user_email_2 = document.getElementsByName('selectEmail')[0].value;
    let user_email = user_email_1 + '@' + user_email_2;

    console.log(`아이디 : ${user_id}`);
    console.log(`비밀번호 : ${user_pw}`);
    console.log(`이름 : ${user_name}`);
    console.log(`혈액형 : ${user_blood}`);
    console.log(`전화번호 : ${user_phone_number}`);
    console.log(`생일 : ${user_birth}`); 
    console.log(`이메일 : ${user_email}`);
} 