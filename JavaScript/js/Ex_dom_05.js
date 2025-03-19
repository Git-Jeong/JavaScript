const sel_change = () =>{
    const blood = document.frm.blood;
    const option = document.frm.blood.options;
    // console.log(blood.selectedIndex);
    // console.log(option); 

    // 사용자가 선택한 요소의 값 접근
    console.log(option[blood.selectedIndex].innerText);
}

const send = (event) => {
    event.preventDefault();
    //기본 이벤트 동작(리셋)을 막는 함수
    console.log('클릭~')
}