// 등록 버튼을 눌렀을 떄 사용자가 입력한 값을 가지고 오기

const todo_list_position = document.getElementById('todo_list');
const get_todo = document.getElementsByName('todo')[0]; 
get_todo.focus();

const save_button = (event) =>{
    event.preventDefault()  
    create_todo_list(get_todo.value);
    get_todo.value = '';
    get_todo.focus();
} 

const create_todo_list = (get_list) =>{ 
    const new_div = document.createElement('div');
    const new_li = document.createElement('li');
    const new_text = document.createTextNode(get_list);
    const new_delete_button = document.createElement('button');
    const new_delete_button_test = document.createTextNode('X');
    
    new_div.style.display = 'flex';
    new_div.style.alignItems = 'center';
    new_div.style.padding = '4px';
    new_div.style.margin = '10px';
    new_div.style.width = '95%';
    new_div.style.border = '1px solid #ddd';
    new_div.style.borderRadius = '4px';
    new_div.style.justifyContent = 'space-between'; 
  
    new_li.style.padding = '10px';
    new_li.style.overflow = 'hidden';
    new_li.style.whiteSpace = 'nowrap';   

    new_delete_button.setAttribute('class', 'btn btn-danger'); 
    new_delete_button.style.marginLeft = '10px'; 
    // new_delete_button.id = 'list_delete_btn';
    // new_delete_button.style.background = 'none'; 
    // new_delete_button.style.color = 'red'; 
    // new_delete_button.style.borderRadius = '50%'; 
    // new_delete_button.style.border = 'none'; 
    // new_delete_button.style.fontWeight = '900'; 

    new_delete_button.appendChild(new_delete_button_test);
    new_li.appendChild(new_text);
    new_div.appendChild(new_li);
    new_div.appendChild(new_delete_button);
    todo_list_position.appendChild(new_div);
} 


const deleteTodo = (event) => {  
    if(event.target.id == 'list_delete_btn'){
        event.target.parentElement.remove();
    } 
}


todo_list_position.addEventListener('click', deleteTodo);