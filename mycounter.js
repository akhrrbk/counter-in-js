const button1 = document.querySelector('#negative')
const button2 = document.querySelector("#reset")
const button3 = document.querySelector("#positive")
const span = document.querySelector('#spancounter')

let score = 0;


button3.addEventListener('click', () => {
    score += 1;
    span.innerHTML = score;
    
    if(score === 0){
        span.style.color = 'black'
    } else if(score > 0) {
        span.style.color = 'green'
    }
})

button1.addEventListener('click', () => {
    score -= 1;
    span.innerHTML = score;
    
    if(score === 0){
        span.style.color = 'black'
    } else if(score < 0) {
        span.style.color = 'red'
    }
})

button2.addEventListener('click', () => {
    score = 0;
    span.innerHTML = score;

    if(score === 0){
        span.style.color = 'black'
    }
})