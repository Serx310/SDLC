const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitBtn = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

const translatables = [
    {
        english: "Thank you",
        romanian: {
            a: "Mulţumesc",
            b: "Buna",
            c: "Bubuială",
            d: "Perfect"
        },
        correct: "a"
    },
    {
        english: "A poor horse is better than no horse at all",
        romanian: {
            a: "Bună dimineaţa",
            b: "Decât premiant în închisoare, mai bine repetent în drum spre mare",
            c: "Vrei să pleci dar nu-mă iei",
            d: "Mă înec în ochii tăi"
        },
        correct: "b"
    },
    {
        english: "Switzerland",
        romanian: {
            a: "Cehia",
            b: "Portugalia",
            c: "România",
            d: "Elveţia"
        },
        correct: "d",

        english: "to love",
        romanian: {
            a: "a fi",
            b: "a iubi",
            c: "a vâna",
            d: "a trăi"
        },
        correct: "b",

        english: "pain",
        romanian: {
            a: "ţară",
            b: "viaţă",
            c: "durere",
            d: "iubire"
        },
        correct: "c",

        english: "Good night",
        romanian: {
            a: "Noapte bună",
            b: "Bună ziua",
            c: "Bună dimineaţă",
            d: "Bună seara"
        },
        correct: "a",

        english: "to speak",
        romanian: {
            a: "a dormi",
            b: "a citi",
            c: "a vorbi",
            d: "a sosi"
        },
        correct: "c",

        english: "He does not speak Romanian, but he speaks Portuguese",
        romanian: {
            a: "Nu vorbeşte română, dar vorbeşte portugheză",
            b: "Nu citeşte în română",
            c: "Nu locuieşte în Ungria",
            d: "Nu ştie română"
        },
        correct: "a",

        english: "I like it",
        romanian: {
            a: "Îmi place",
            b: "Te iubesc",
            c: "O iubesc",
            d: "Îl iubesc"
        },
        correct: "a",

        english: "I do not understand",
        romanian: {
            a: "Nu ştiu",
            b: "Nu înţeleg",
            c: "Nu citesc",
            d: "Nu văd"
        },
        correct: "b",
    }
]

function buildQuiz(){
    const output = [];

    translatables.forEach((currentWord, wordNr) => {
        const romanian = [];

        for(letter in currentWord.romanian){
            romanian.push(
                `<label>
                <input type="radio" name="english${wordNr}" value="${letter}">
                ${letter} : ${currentWord.romanian[letter]}
                </label>
                `
            );
        }

        output.push(
            `<div class="english"> ${currentWord.english} </div>
            <div class="romanian"> ${romanian.join('')} </div>`
        );
        
    });

    quizContainer.innerHTML = output.join('');
}

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.romanian');

    let numCorrect = 0;

    translatables.forEach( (currentWord, wordNr) => {
        const answerContainer = answerContainers[wordNr];
        const selector = `input[name=english${wordNr}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector)||{}).value

        if(userAnswer === currentWord.correct){
            numCorrect++;

            answerContainers[wordNr].style.color = 'lightgreen';
        }
        else{
            answerContainers[wordNr].style.color = 'red';
        }
    })

    resultsContainer.innerHTML = `${numCorrect} out of ${translatables.length}`
}

buildQuiz();

submitBtn.addEventListener('click', showResults);