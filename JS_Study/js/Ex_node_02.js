const target = document.getElementById('menu_list');

const new_li = document.createElement('li');
const new_li2 = document.createElement('li');
const new_li3 = document.createElement('li');

const new_text = document.createTextNode('짜장면');
const new_text2 = document.createTextNode('짬뽕');
 

const new_img = document.createElement('img');
const img_src = 'https://media.nudge-community.com/5414663'
new_img.setAttribute('src', img_src );
new_img.style.width = '300px';
new_img.style.height = '200px';


new_li.appendChild(new_text);
new_li2.appendChild(new_text2);
new_li3.appendChild(new_img);

// 노드 복제
const clone_li = new_li3.cloneNode(true);

target.appendChild(new_li);
target.appendChild(new_li2);   
target.appendChild(new_li3);
target.appendChild(clone_li);

// 노드 삭제

// target.remove();
//모든걸 지워버림

target.removeChild(clone_li);