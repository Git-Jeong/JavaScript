const form_op_plus = () => {
    let num1 = parseInt(document.getElementsByName('num1')[0].value);
    let num2 = parseInt(document.getElementsByName('num2')[0].value);
    let sum = num1 + num2; 
    let result_print = document.getElementById('result');
    result_print.innerText = '더한 결과 : '+ sum;
}

btn.addEventListener('click', form_op_plus);