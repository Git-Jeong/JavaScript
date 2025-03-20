const get_num_location = document.getElementById('num'); 
let temp_num = parseInt(get_num_location.innerText); 

// console.log(get_num)  

const num_increase = () => {  
    temp_num += 1;
    get_num_location.innerText = temp_num;
}

const num_decrease = () => {  
    if(temp_num > 0){
        temp_num -= 1; 
        get_num_location.innerText = temp_num;
    }
    else{
        alert('0보다 작은 수는 만들 수 없습니다.');
    }
}