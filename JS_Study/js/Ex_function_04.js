const checkPrimeNumber = (input) => {
    let check = true
    for(let i = 2; i < input; i++){
        if(input % i == 0){
            check = false
        }
    }
    if(check){
        console.log(`${input}은(는) 소수입니다.`)
    }
    // else{
    //     console.log(`${input}은(는) 소수가 아닙니다.`)
    // }
}

for(let i = 1; i <= 20; i++){
    checkPrimeNumber(i)
}