// 함수 표현식
let hi = function (){
    console.log(`즐거운 화요일~`)
} 
// 이렇게 해야 함수의 이름이 중복되지 않을 수 있음
hi()

//대신 이렇게 되면 hi에 새로운 값을 넣을 수 있게 됨...

//해법 

const hi_2 = function(){
    console.log('const hi~')
}

hi_2()

// 간단하게 하는 방법!!

const hi_3 = () =>{
    console.log(`즐거운 화요일~~`)
    console.log(`화살표 함수`)
}

hi_3()