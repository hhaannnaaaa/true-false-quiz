let question = 0;
let checkButton = document.getElementById('check-button');
let xmarkButton = document.getElementById('xmark-button');
let buttonDiv = document.querySelector('.buttons');
let questionDiv = document.querySelector('.answer');
let resultDiv = document.querySelector('.result');

var currentQuestion = 0;
var questions = [
    {
        "question": "You can sneeze during your sleep.",
        "answer": false
    },
    {
        "question": "Victoria Beckham had a cameo appearance in the original Sex and the City series.",
        "response": "It was actually Geri Halliwell who appeared as Samantha's friend Phoebe.",
        "answer": false
    },
    {
        "question": "Before becoming queen, Queen Elizabeth II trained as a mechanic.",
        "answer": true
    },
    {
        "question": "The first music video to be played on MTV was Video Killed The Radio Star by The Buggles in 1981.",
        "answer": true
    },
    {
        "question": "Rihanna was born in the Bahamas.",
        "response": "She is actually from Barbados.",
        "answer": false
    },
    {
        "question": "The first animal sent into space was a monkey.",
        "response": "Fruit flies were sent into space on a V-2 rocket in 1947.",
        "answer": false
    },
    {
        "question": "Singer Billie Eilish’s full name is Billie Eilish Pirate Baird O’Connell.",
        "answer": true
    },
    {
        "question": "Emma Roberts is the daughter of Julia Roberts.",
        "response": "Julia Roberts is her aunt: her father is fellow actor Eric Roberts.",
        "answer": true
    },
    {
        "question": "Humans lose an average of 75 hairs from their head each month.",
        "response": "We can actually lose up to 75 strands of hair each DAY!",
        "answer": false
    },

]