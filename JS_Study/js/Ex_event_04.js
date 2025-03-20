const btn = document.getElementById('btn');
const input = document.getElementById('input');

btn.addEventListener('click', (e) =>{
    console.log(e);
    console.log(e.target);
})

input.addEventListener('keyup', (e) =>{
    const print = document.getElementById('print');
    // print.innerText = e.target.value;
    print.innerText = e.target.nextElementSibling.innerText;
})