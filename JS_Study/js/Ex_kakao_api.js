// https://apis.map.kakao.com/web/documentation/ 각각 변수들의 설명 적혀 있음   
let container = document.getElementById('map');
let options = {
    center: new kakao.maps.LatLng(34.969264990725236, 127.48426914554533),
    level: 4
}


let map = new kakao.maps.Map(container, options);

let positions = [{
    name: "주소가 없는 임의 가게",
    address: "부산광역시 동구 중앙대로 206"
}];
const url = 'https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey"API_KEY"&pageNo=1&numOfRows=10&resultType=json'

fetch(url)
    .then(res => res.json())
    .then(date => {
        // console.log(date.getFoodKr.item[1].TITLE) ;
        // console.log(date.getFoodKr.item[1].ADDR1);  
        kakao_map(date.getFoodKr.item);
    })
    .catch(err => {

    })

const kakao_map = (input) => {
    
    for (let i = 0; i < input.length; i++) {
        let name = input[i].TITLE;
        let address = input[i].ADDR1;
        let img_url = input[i].MAIN_IMG_THUMB;
        // console.log(`${name}, ${address}, ${img_url}`);
        positions.push({ name, address, img_url});
    }

    // 주소-좌표 변환 객체를 생성합니다 
    let geocoder = new kakao.maps.services.Geocoder();

    for (let i = 0; i < positions.length; i++) {
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(positions[i].address, function (result, status) {

            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {

                let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                let marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // 커스텀 오버레이 마커 위에 표시
                let overlay = new kakao.maps.CustomOverlay({
                    // content: content,
                    // map: map,
                    position: marker.getPosition()
                });


                overlay.setContent(createOverlayContent(overlay, positions[i]));

                // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
                kakao.maps.event.addListener(marker, 'click', function () {
                    overlay.setMap(map);
                });

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            }
        });
    };
};


const createOverlayContent = function (overlay, list) {
    const name = list.name ? list.name : "이름정보 없음";
    const tourAddr = list.address ? list.address : "주소정보 없음";
    const img_url = list.img_url ? list.img_url : "https://i.namu.wiki/i/CoWmRhc0agjpTEded7LO6noLEGCveYHbzXRJmdl0vwPpAvz3H5qOFoo5NXv8diOD1eTuxgMJLzUXKIb_wqTKwcNoDt5zcCxwycJkdN3Ty7H5ky0i-Wyuml05HLtnbvZZp7JSePOsf24kAC6_ZEopBw.webp";
    const detail = list.detail ? list.detail : "상세정보 없음";

    // HTML객체를 생성 : document.createElement(태그이름)
    // HTML객체 클래스이름 설정 : document.createElement(태그이름).className = 추가할 클래스이름
    // HTML객체의 자식요소로 추가 : 부모HTML객체.appendChild(자식HTML객체)
    // HTML객체 스타일 적용 : HTML객체.style.스타일속성 = 값 ( * 크기값을 줄 경우 반드시 'px'나 'em' 단위를 작성해야 함 )
    const divWrap = document.createElement("div");
    divWrap.className = "wrap";

    const divInfo = document.createElement("div");
    divInfo.className = "info";

    const divTitle = document.createElement("div");
    divTitle.className = "title";
    divTitle.textContent = name;

    const divClose = document.createElement("div");
    divClose.className = "close";
    divClose.setAttribute("title", "닫기");
    divClose.addEventListener("click", function () {
        overlay.setMap(null);
    });

    const divBody = document.createElement("div");
    divBody.className = "body";

    const divImg = document.createElement("div");
    divImg.className = "img";

    const img = document.createElement("img");
    img.setAttribute("src", img_url);
    img.style.width = "73px";
    img.style.height = "70px";

    const divDesc = document.createElement("div");
    divDesc.className = "desc";

    const divEllipsis = document.createElement("div");
    divEllipsis.className = "ellipsis";
    divEllipsis.textContent = tourAddr;

    const divJibun = document.createElement("div");
    divJibun.className = "jibun ellipsis"; 
    divJibun.textContent = detail;

    //생성된 HTML객체를 하나씩 자식요소로 추가
    divTitle.appendChild(divClose);
    divImg.appendChild(img);

    divDesc.appendChild(divEllipsis);
    divDesc.appendChild(divJibun);

    divBody.appendChild(divImg);
    divBody.appendChild(divDesc)

    divInfo.appendChild(divTitle);
    divInfo.appendChild(divBody);

    divWrap.appendChild(divInfo);

    return divWrap;

}