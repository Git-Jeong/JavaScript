//노드 접근 방법

// 1. document 출력
// console.log(document.childNodes); 

// // 2. html
// console.log(document.childNodes[1]);
// console.log(document.childNodes[1].childNodes);
// console.log(document.childNodes[0].children);


// // 3. head, body 접근

// console.log(document.childNodes[1].childNodes[0]);
// console.log(document.childNodes[1].childNodes[2]);

// console.log(document.childNodes[1].children[0]);
// console.log(document.childNodes[1].children[1]);


// // 4. head, body의 부모 요소 접근  
// console.log(document.childNodes[1].childNodes[2].parentNode);
// console.log(document.childNodes[1].children[1].parentElement);

// 5. 형제 node 접근 (이전, 다음 형제)
console.log(document.childNodes[1].childNodes[2].previousSibling);
console.log(document.childNodes[1].children[1].nextElementSibling);


body = document.body;