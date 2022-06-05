const form = document.querySelector('form')
const wordTitle = document.querySelector('.word')
const timeText = document.querySelector('.time')
const level = document.getElementById('level')
const scoreText = document.querySelector('.score')

input.focus()
let lvl = 5 
let gameover = false
let score = 0
let i = 10 /* time */

level.addEventListener('change', () => {
    switch(level.value){
        case 'Easy': 
            lvl = 5
            break;
        case 'Medium':
            lvl = 3
            break;
        case 'Hard':
            lvl = 2
            break;
    }
    newGame()
    
})

const word = [
    'abridgement',
    'abridgements',
    'abridger',
    'pliers',
    'plies',
    'plight',
    'plighted',
    'salads',
    'salal',
    'salals',
    'salamander',
    'salamanders',
    'salamandrine',
    'hello',
    'good',
    'new',
    'awesome',
]

function randowNum() {
    return Math.floor(Math.random() * word.length)
}

let randomWord = word[randowNum()]
newWord(randomWord)

function newWord(){
    randomWord = word[randowNum()]
    wordTitle.textContent = randomWord
    form.input.value = ''
    wordTitle.style.color = 'black'
}


form.addEventListener('input', (e) => {
    e.preventDefault()
    if (!gameover) {
        if (form.input.value.toLowerCase() == randomWord) {
        newWord()
        i += lvl
        timeText.textContent = `Time: ${i}s`
        score++
        scoreText.textContent = `Score: ${score}`

        } else { wordTitle.style.color = 'red' }
        
    } else {
        alert('GameOver!!!')
    }
    
})

let stopInterval 

time()

function time() {
    timeText.textContent = `Time: ${i}s`
    const timeInterval = setInterval(()=> {
        i--
        timeText.textContent = `Time: ${i}s`
        if (i <= 0) {
            clearInterval(timeInterval)
            gameover = true
            gameOver()
        }

    }, 1000)
    stopInterval = function () {clearInterval(timeInterval)}
}
function newGame() {
    gameover = false
    newWord(randomWord)
    score = 0
    scoreText.textContent = `Score: ${score}`
    if (i == 0) {
        i = 10
        time()
    } else {
        i = 10
        timeText.textContent = `Time: ${i}s`
    }
}
function gameOver() {
    document.querySelector('.result').textContent = score
    modal()
}

document.querySelector('.new-gam-btn').addEventListener('click', () => {
    modal()
    newGame()
})

function modal(){
    document.querySelector('.modal').classList.toggle('animation')
    document.querySelector('.overlay').classList.toggle('animation')
}