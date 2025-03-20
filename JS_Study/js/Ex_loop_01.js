// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }

let input_1 = parseInt(prompt('첫 번째 숫자를 입력 : '))
let input_2 = parseInt(prompt('두 번째 숫자를 입력 : '))

let sum = null

if(input_1 == input_2){
    console.log('입력하신 두 숫자(' + input_2 + ')는 서로 같습니다.')
}
else if(input_1 > input_2){
    //input_1이 더 큰 경우
    for(let i = input_2; i < input_1; i++){
        console.log(i);
        sum += i;
    }
}
else if(input_1 < input_2){
    //input_2가 더 큰 경우 
    for(let i = input_1; i < input_2; i++){
        console.log(i);
        sum += i;
    }
}
else{
    console.log('숫자를 입력하지 않았습니다. ')
}