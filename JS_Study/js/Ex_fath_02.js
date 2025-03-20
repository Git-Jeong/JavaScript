const reqBtn = document.getElementById('reqBtn'); 

reqBtn.addEventListener('click', (event) => {
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
            creat_chart(result); 
        } 
        else{
            alert('조회된 결과가 없습니다!');
        }
    })
    .catch((err) =>{
        console.log(err);
    })

});

const creat_chart = (mv_list) => { 
    // 누적 관객 수 이런걸 표출해 보기 
};


// 범위 지정이라 무시
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
