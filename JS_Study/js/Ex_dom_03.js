const change_the_menu = () =>{
    // console.log(`메뉴변경 버튼 클릭`);
    const get_menu_list = document.getElementsByClassName('menu');
    // get_menu_list 의 경우 유사 배열 느낌임.
    console.log(`가지고 온 메뉴의 수 : ${get_menu_list.length}`);
    for(let index = 0; index < get_menu_list.length; index ++){
        console.log(`${index + 1}번 메뉴 : ${get_menu_list[index].innerText}`);
    } 

    let arr = [];
    
    for(let index = 0; index < get_menu_list.length; index ++){
        let new_menu = prompt(`${index + 1}번 메뉴 수정 : `); 
        arr.push(new_menu); 
    } 

    for(let index = 0; index < get_menu_list.length; index ++){
        get_menu_list[index].innerText = arr[index];
    } 
}


const create_the_table = () =>{
    // 음료명, 금액을 보여주는 테이블 생성

    let coffees = ['아메리카노', '망고 스무디', '아이스티'];
    let prices = [2500, 4500, 3000];

    let find_position = document.getElementById('result'); 

    // th 테이블 헤더
    // tr 테이블 행
    // td 테이블 열 
    let input_table = `
    <table border = '1'>
        <tr>
            <th>No</th>
            <th>메뉴</th>
            <th>가격</th>
        </tr>    
    `   
    
    for(let i = 0; i < coffees.length; i ++){
        input_table += `
        <tr>
            <td>${i + 1}</td>
            <td>${coffees[i]}</td>
            <td>${prices[i]}</td> 
        </tr>   
        `;
        
        if(i == coffees.length - 1){    
            input_table += `
              </table>    
            `
        }
    } 

    find_position.innerHTML = input_table;
}