const get_input = (event) => {
    event.preventDefault();
    const sign_up = document.forms["sign_up"];

    // let id = sign_up.id.value;
    // let pw = sign_up.password.value;
    // let name = sign_up.name.value;
    // let age = sign_up.age.value; 

    // console.log(`${id}, ${pw}, ${name}, ${age}`);

    //form 요소 내 모든 요소료 값 접근하는 방법
    let input_len = sign_up.elements.length; // 폼 내 모든 요소 개수
    console.log(`폼의 길이 : ${input_len}`);

    for (let i = 0; i < input_len - 1; i++) {
        let element = sign_up.elements[i]; // 폼 요소 가져오기
        console.log(`가져온 값 ${element.name} : ${element.value}`);
    }
    
}