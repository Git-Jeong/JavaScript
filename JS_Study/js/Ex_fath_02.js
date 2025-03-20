const reqBtn = document.getElementById('reqBtn'); 
let temp_input_date = NaN;


const xValues = [];
const yValues = [];
const barColors = [
    "red", "green", "blue", "orange", "brown",
    "purple", "yellow", "pink", "cyan", "lime"
  ]; 


reqBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let today = new Date();

    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDate()).slice(-2);

    let today_string = year + '' + month  + '' + day; 

    temp_input_date = document.getElementById('input_date').value;   
    
    let input_date = temp_input_date;

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
    
    yValues.splice(0);
    xValues.splice(0);

    for(let i = 0 ; i < mv_list.length; i++){
        xValues.push(mv_list[i].movieNm); 
        yValues.push(mv_list[i].audiCnt); 
    } 
    

    // 누적 관객 수 이런걸 표출해 보기 
    // 지금은 누적관객객
    new Chart("myChart", {
        type: "bar",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          legend: {display: false},
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
      
          title: {
            display: true, 
            text: `${temp_input_date} 당일 관객 수`
          }
        }
      });
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


 