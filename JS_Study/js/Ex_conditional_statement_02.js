let input_bg_color = prompt('배경색을 입력해주세요(검정, 빨강, 파랑, 노랑) : ');
let set_color = null;
if(input_bg_color == '검정'){
    set_color = 'black';
}
else if(input_bg_color == '빨강'){
    set_color = 'red';
}
else if(input_bg_color == '파랑'){
    set_color = 'blue';
}
else if(input_bg_color == '노랑'){
    set_color = 'yellow';
} 
else{
    set_color = 'white';
}
document.querySelector('body').style.backgroundColor = set_color;