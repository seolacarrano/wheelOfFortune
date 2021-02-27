let word = getRandomWord() //a function in randomWord.js 
let wordHolder = document.getElementById("word-holder")
let startBtn = document.getElementById("start-btn")
let userGuess = document.getElementById("user-guess")
let submitBtn = document.getElementById("submit-btn")
let feedbackDiv = document.getElementById("feedback")
let guessed = [];
let wordToGuess;


// displaying words with underscore when clicking start btn
function guessedWord() {
    console.log(word)
    wordToGuess = word.split('').map(letter => {
        // updating wordHolder 
        for (let i = 0; i < guessed.length; i++) {
            if (guessed[i] === letter) {
                return letter
            }
        }

        // start setting
        if (letter === 'r' || letter === 's' || letter === 't' || letter === 'l' || letter === 'n' || letter === 'e') {
            return letter
        } else {
            return " _ "
        }
    }).join('');

    wordHolder.innerText = wordToGuess;
    wordHolder.style.textAlign = "center";
    wordHolder.style.fontSize = "50px"
    //alert(word)
}
startBtn.addEventListener("click", guessedWord)


// check if the input includes 3 consonants and 1 vowel
function handlingGuess(e) {
    const vowel = userGuess.value.match(/[aeiou]/g)
    const consonant = userGuess.value.match(/[bcdfghjklmnpqrstvwxz]/g)
    console.log(consonant.length)
    let include = userGuess.value.split('').filter(userVal => word.includes(userVal))

    //if input includes one vowel and three consonants, check the validity
    if (vowel.length === 1 && consonant.length === 3) {
        let feedback = document.createElement('h3')
        if (include.length !== 0) {
            feedback.innerText = `This word includes ${include}`
            feedbackDiv.appendChild(feedback)

            //update wordHolder
            if (guessed.indexOf(include) === -1) {
                include.forEach(e => {
                    guessed.push(e)
                })
                guessedWord();
                checkIfGameWon();
            }
            // if (guessed.indexOf(include) >= 0) {
            //     guessedWord();
            // }

        } else {
            feedback.innerText = `This word does not include ${userGuess.value}`
            feedbackDiv.appendChild(feedback)
        }

    } else {
        // if input does not include one vowel and three consonants, alert 
        alert('Please enter less than 1 vowel and 3 consonants')
    }

    e.preventDefault();
}

function checkIfGameWon() {
    if (wordToGuess === word) {
        alert('You Got It!!!');
    }
}

submitBtn.addEventListener("click", handlingGuess)

