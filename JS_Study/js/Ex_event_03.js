const body = document.body;

const result = document.getElementById('result');

body.addEventListener('keydown', (event)=>{
    // console.log(event.key);

    result.innerText = `
        누른 KeyCode : ${event.keyCode}
        누른 Key : ${event.key}
    `;
});