document.querySelector('button').addEventListener('click', function() { 
    let h1 = document.querySelector('h1');
    let currentColor = h1.style.color;
    let rootColor = getComputedStyle(document.documentElement).getPropertyValue('--button_color').trim();

    if (currentColor !== 'red') {
        h1.style.color = 'red';
    } else {
        h1.style.color = rootColor;
    } 
});