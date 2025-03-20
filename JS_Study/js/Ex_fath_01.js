const reqBtn = document.getElementById('reqBtn'); 

reqBtn.addEventListener('click',  (event) => {
    event.preventDefault();

    let today = new Date();

    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDate()).slice(-2);

    let today_string = year + '' + month  + '' + day; 

    let input_date = document.getElementById('input_date').value; 

    while(true){
        //input data에서 '-' 모양을 지우는 반복문
        let temp_input_date = input_date.replace('-', "");
        if(temp_input_date === input_date){
            break;
        }
        else{ 
            input_date = temp_input_date;
        }
    } 

    let today_int = parseInt(today_string); 
    let input_date_int = parseInt(input_date); 
    
    if(input_date_int >= today_int){
        alert('과거의 날짜를 선택해 주세요.');
        return;
    }
    const key = 'key=' + 'null';
    const targetDt = 'targetDt=' + input_date;
    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?${key}&${targetDt}`;
    
    fetch(url)
    .then((res) => res.json())
    .then((data) => {   
        let result = data.boxOfficeResult.dailyBoxOfficeList; 
        if(result.length != 0){
            print_list(result); 
        } 
        else{
            alert('조회된 결과가 없습니다!');
        }
    })
    .catch((err) =>{
        console.log(err);
    })

});

const print_list = (mv_list) => {
    const result_print = document.getElementById('result');
    result_print.innerHTML = ""; 

    const new_table = document.createElement('table'); 

    const createCell = (tag, text) => {
        const cell = document.createElement(tag);
        cell.textContent = text;
        return cell;
    };

    const fragment = document.createDocumentFragment();
    const new_tr = document.createElement('tr');

    ['순위', '이름', '개봉일'].forEach(text => 
        new_tr.appendChild(createCell('th', text))
    );
    
    
    fragment.appendChild(new_tr);

    // 방법 1
    for(let i = 0; i < mv_list.length; i ++) {
        const new_tr = document.createElement('tr');
        new_tr.appendChild(createCell('td', mv_list[i].rank));
        new_tr.appendChild(createCell('td', mv_list[i].movieNm));
        new_tr.appendChild(createCell('td', mv_list[i].openDt));
        fragment.appendChild(new_tr);
    }

    // 방법2
    // mv_list.forEach(movie => {
    //     const new_tr = document.createElement('tr');
    //     new_tr.appendChild(createCell('td', movie.rank));
    //     new_tr.appendChild(createCell('td', movie.movieNm));
    //     new_tr.appendChild(createCell('td', movie.openDt));
    //     fragment.appendChild(new_tr);
    // });

    new_table.appendChild(fragment);
    result_print.appendChild(new_table);
};

document.addEventListener("DOMContentLoaded", function () {
    const inputDate = document.getElementById("input_date");
    const today = new Date();
    const temp_max_today = new Date();
    
    today.setDate(today.getDate()); 
    temp_max_today.setDate(temp_max_today.getDate() - 1); 

    const maxDate = today.toISOString().split("T")[0];
    const max_temp_max_today = temp_max_today.toISOString().split("T")[0];
    const minDate = '2003-11-11';
    inputDate.setAttribute("max", maxDate); 
    inputDate.setAttribute("min", minDate); 
    inputDate.value = max_temp_max_today; 
});
