let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
//월 데이터를 불러올떄는 무조건 +1 을 해야 원하는 달의 결과를 출력 가능.
let date = today.getDate();

let hour = today.getHours();
let minute = today.getMinutes();
let seconds = today.getSeconds();
 
let day_Index = today.getDay();
let day_String = ['일', '월', '화', '수', '목', '금', '토'];
let day = day_String[day_Index];

console.log(`${year}년 ${month}월 ${date}일 ${day}요일`);
console.log(`${hour}시 ${minute}분 ${seconds}초`)