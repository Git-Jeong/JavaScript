// function hello(){
//     console.log('Hello~ this is function')
// }

// hello()

// 두 개의 숫자를 입력받아 값을 더해주는 add 함수 만들기
function add(a, b){
    let result = a + b
    return result
}

let num_1 = parseInt(prompt('첫 번째 정수 입력 : '))
let num_2 = parseInt(prompt('첫 번째 정수 입력 : '))

let result = add(num_1, num_2)
console.log(result)