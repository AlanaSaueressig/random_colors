const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"]; // to identify hex colors
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function getRandomNumbers (){
    return Math.floor(Math.random() * hex.length);
}

btn.addEventListener('click', function(){
    let hexColor = '#';
    // color hex always have 6 values
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumbers()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

