
        // let array = [];
        let array = [];
        array[0] = '4';  
        array[2] = 'asdf';          
        array[4] = 4123;
        array[5] = '1234';
        console.log(array);
        console.log(array.length);

        let member = ['짱구', '철수', '훈이'];
        member.push('흰둥이')
        console.log(member)
        //데이터 추가
        member.pop()
        member.pop()
        //데이터 삭제
        console.log(member)

        // splice(작업 시작 인덱스, 지우고 싶은 요소 개수, 넣고 싶은 데이터)
        //
        member.splice(0, 2,"유리")
        console.log(member)