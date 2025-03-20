const phone = {
    kind : "Galaxy S23",
    pay : "Samsung Pay",
    call : function(){
        console.log(`전화를 걸다`)
    },
    camera : function() {
        console.log(`사진을 찍다`)
    }
}

phone.send = function() {
    // phone이 const라고 해도 이미 있는거에서 약간 추가하는건 됨
    console.log('전화를 받다')
}

phone.pay = '새로운 페이'
//const라고 해도 바뀔 수 있다

console.log(phone) 

// 기종울 출력
console.log(phone.kind)
console.log(phone['kind'])

console.log(phone.pay)

phone.camera()
phone.send()  