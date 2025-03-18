// 사용자가 5개의 숫를 넣는데 이중 제일 큰 수를 반환
const MAX_COUNT = 5;
let array = [];

for (let i = 0; i < MAX_COUNT; i++) {
    let temp = parseInt(prompt(`${i + 1}번째 정수를 입력 : `))
    array.push(temp);
}

let max_val = Math.max(...array);
console.log(`${array.join(', ')}에서 최댓값은 : ${max_val}`);
