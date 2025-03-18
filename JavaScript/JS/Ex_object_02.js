const person = {
    name : '홍길동',
    age : '25',
    gender : '남자',
    address : {
        company : '제주도',
        home : '제주시'
    },
    favMovie : '어벤져스, 신세계 등',
    favFood : '햄버거, 피자',
    greerhing : function(){
        console.log(`${this.name}님의 나이는 ${this.age}이고, 성별은 ${this.gender}입니다.`)
        console.log(`사는 곳은 ${this.address.home}이고, 회사는 ${this.address.company}입니다.`)
        console.log(`좋아하는 영화는 ${this.favMovie}이 있습니다.`)
        console.log(`좋아하는 음식은 ${this.favFood}입니다.`)
    }
}

person.greerhing()