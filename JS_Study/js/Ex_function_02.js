function getDivisor(input_num){
    let result = []
    for(let i = 1; i <= input_num; i ++){
        if(input_num % i == 0){
            result.push(i)
        }
    }
    
    console.log(`${input_num}의 약수 : ${result}`)
}

getDivisor(10)
getDivisor(16)
getDivisor(25)