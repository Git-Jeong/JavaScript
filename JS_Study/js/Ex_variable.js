//variable(변수) : 값을 저장하는 공간
let name = "홍길동";
let age = 20;
const PI = 3.141592;
//변수 선언 방법 : let 변수명 = 값; 
//상수 선언 방법 : const 상수명 = 값;
//차이? : 변수는 값을 변경할 수 있지만, 상수는 값을 변경할 수 없다.
console.log(name + "님의 나이는 " + age + "세 입니다.");
console.log("원주율은 " + PI + "입니다.");

name = "이름"
age = 30;
try{
    PI = 3.14;
}
catch{
    //상수의 갓은 변경할 수 없다.
    console.log("상수는 값을 변경할 수 없습니다.");
} 
//변수는 값을 변경할 수 있다.
console.log(name + "님의 나이는 " + age + "세 입니다.");
console.log("원주율은 " + PI + "입니다.");
 
let check = typeof name;
//typeof : 변수의 타입을 확인하는 함수
console.log("name의 타입은 " + check + "입니다.");