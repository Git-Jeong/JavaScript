const MAX_LEN = 10;

// 랜덤 수 생성
// let ranNum = Math.floor(Math.random() * MAX_LEN, 1);
let ranNum = parseInt(Math.random() * MAX_LEN) + 1;

while(true){
    let input_num = parseInt( prompt('정답을 맞춰보자(' + MAX_LEN + '이하의 수) : '));
    if(ranNum == input_num){
        // 정답
        alert(input_num + '정답입니다!');
        break;
    }
    else if(ranNum < input_num){
        // 큰 수 입력
        alert(input_num + '보다 작은 수를 입력하세요...')
    }
    else if(ranNum > input_num){
        // 작은 수 입력
        alert(input_num + '보다 큰 수를 입력하세요...')
    }
    else{
        //에러
        alert('시스템 에러입니다.')
    }
}