const tit = document.getElementById('tit');

console.log(`접근한 요소 : ${tit.innerText}`);
console.log(`접근한 요소 : ${tit.innerHTML}`);

const tag = document.getElementById('tag');

console.log(`접근한 요소 : ${tag.innerText}`)
console.log(`접근한 요소 : ${tag.innerHTML}`)

// tit.innerText = '<a href ="#"> Document 실습인데 js를 통해 값을 넣어봄 </a>';
// 이렇게 하면 태크가 작동하는게 아니고, 문자열로 인식함.

tit.innerHTML = '<a href ="#"> Document 실습인데 js를 통해 값을 넣어봄 </a>';
// 이렇게 하면 태그가 정상 작동.

// tag.innerText = 'div tag에 새로운 값을 넣어보기'
tag.innerHTML = '<button>클릭 버튼</button>'
