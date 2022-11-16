const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber];
})

// math.floor returns integer
// math.random returns random number but not integer
function getRandomNumber(){
    return Math.floor(Math.random()* colors.length);
}