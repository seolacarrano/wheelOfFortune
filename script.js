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
    wordToGuess = word.split('').map(letter => {
        if (letter === 'r' || letter === 's' || letter === 't' || letter === 'l' || letter === 'n' || letter === 'e') {
            return letter = letter
        } else {
            return letter = " _ "
        }
    }).join(' ');

    wordHolder.innerText = wordToGuess;
    wordHolder.style.textAlign = "center";
    wordHolder.style.fontSize = "50px"

    //wordHolder.innerText = word;
}
startBtn.addEventListener("click", guessedWord)


function handlingGuess(e) {
    // check if the input includes 3 consonants and 1 vowel
    let vowel = userGuess.value.match(/[aeiou]/g)
    let consonant = userGuess.value.match(/[bcdfghjklmnpqrstvwxz]/g)
    let include = userGuess.value.split('').filter(userVal => word.includes(userVal))

    //if input includes one vowel and three consonants, check the validity
    if (vowel.length === 1 && consonant.length === 3) {
        let feedback = document.createElement('h3')
        if (include.length !== 0) {
            feedback.innerText = `This word includes ${include}`
            feedbackDiv.appendChild(feedback)

            // //change _ to guessed letter 
            // wordToGuess = word.split('').map(letter => {
            //     if (letter == include || letter === 'r' || letter === 's' || letter === 't' || letter === 'l' || letter === 'n' || letter === 'e') {
            //         return letter = letter
            //     } else {
            //         return letter = " _ "
            //     }
            // }).join(' ');
            // wordHolder.innerText = wordToGuess;
            guessed.indexOf(include) === -1 ? guessed.push(include) : null;
            console.log(guessed.indexOf(include))
            if (word.indexOf(include) >= 0) {
                guessedWord();
            }

        } else {
            feedback.innerText = `This word does not include ${userGuess.value}`
            feedbackDiv.appendChild(feedback)
        }

    } else {
        // if input does not include one vowel and three consonants, alert 
        alert('Please enter 3 consonants and 1 vowel')
    }

    e.preventDefault();
}
submitBtn.addEventListener("click", handlingGuess)

