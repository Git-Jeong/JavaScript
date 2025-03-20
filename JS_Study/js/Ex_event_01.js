const attrBtn = document.querySelector('#attrBtn');

const methodBtn = document.querySelector('#methodBtn');

// on-속성에 함수연결
const show1 = () =>{
    console.log(`인라인 방식으로 이벤트 연결`);
}

// 이벤트 속성에 함수 초기화하는 방법
// attrBtn.onclick = () => {
//     console.log('attrBtn 클릭 됨.');
// }
const show2 = () => {
    console.log('attrBtn -> show2 클릭 됨.');
}

attrBtn.onclick = show2;

// methodBtn.addEventListener('click', ()=>{
//     console.log('addEventListener가 작동함')
// });

const show3 = () =>{
    console.log('addEventListener -> show3가 작동함')
}

methodBtn.addEventListener('click', show3);
