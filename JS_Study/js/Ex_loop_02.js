let array_list = []
while(true){
    let input_1 = parseInt(prompt('첫 번째 숫자를 입력 : '));
    let input_2 = parseInt(prompt('주 번째 숫자를 입력 : '));
    let result = input_1 - input_2; 
    alert('두 수의 차 : ' + result); 
    let temp = input_1 + ' + ' + input_2 + ' = ' + result;
    array_list.push(temp);
    
    if(result == 0){
        break;  
} 

console.log(array_list)