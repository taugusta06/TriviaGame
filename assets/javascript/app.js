//define array for questions to choose from
var questOpts = [{
    "question": "How many holes are in a polo?",
    "option1": "One",
    "option2": "Two",
    "option3": "Three",
    "option4": "Four",
    "answer": "4"
},{
    "question": "Can a match box?",
    "option1": "Yes",
    "option2": "No",
    "option3": "No but a tin can",
    "option4": "Yes one beat Mike Tyson",
    "answer": "3"
},{
    "question": "Sdrawkcab noitseuq sight reena",
    "option1": "K.O",
    "option2": "What",
    "option3": "I don't understand",
    "option4": "Tennis elbow",
    "answer": "1"
},{
    "question": "What is the 7th letter of the alphabet?",
    "option1": "G",
    "option2": "H",
    "option3": "I",
    "option4": "J",
    "answer": "2"
},{
    "question": "How do you kill a werewolf?",
    "option1": "Shoe polish",
    "option2": "Gravy granules",
    "option3": "Black pudding",
    "option4": "Cillit bang",
    "answer": "1"
},{
    "question": "What do you call a wingless fly?",
    "option1": "A flap",
    "option2": "A walk",
    "option3": "A plum",
    "option4": "Jason",
    "answer": "2"
},{
    "question": "Mary rose sat on a pin",
    "option1": "O rly?",
    "option2": "Mary rose",
    "option3": "Burst her piles",
    "option4": "Ahahahahahahaha",
    "answer": "2"
},{
    "question": "Snake? Snake?",
    "option1": "Snake!",
    "option2": "Snaaaake!",
    "option3": "Snake?",
    "option4": "Snail!",
    "answer": "2"
},{
    "question": "What are chicken nuggets made of?",
    "option1": "100% chicken",
    "option2": "Tasteless white filth",
    "option3": "Soil",
    "option4": "Win",
    "answer": "2"
},{
    "question": "What does D.N.A. stand for?",
    "option1": "Deoxyribonucleic acid",
    "option2": "Do not abbreviate",
    "option3": "Doormat, nice abacus",
    "option4": "National Dyslexic Association",
    "answer": "4"
}]

//set variables for question count
var currentQuestion = 0;
var totalQuestions = questOpts.length;
//set variable for score
var score = 0;
//set variables to pull questions and answer choices and put them in the quiz div
var container = document.getElementById('quiz');
var questionBox = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
//define submit button
var submitBtn = document.getElementById('submit');
// variable to show final score
var showScore = document.getElementById('result');

//create a function to load the questions from the answers array
//make sure first question loads on start

var i = 0;
function loadQuest(Index){
    var q = questOpts[i];
    questionBox.textContent = q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}

window.onload = function(){loadQuest()};
//make submit button move to next question
//make sure an answer is selected before the button will work
//if answer is not chosen, the button will not move forward and error message will show
//after error and answer is picked, clear error message

function loadNext(){
    var selectedAns = document.querySelector('input[type=radio]:checked');
    if(!selectedAns){
        // document.getElementById("p1").innerHTML = "New text!"
        document.getElementById("errorMsg").innerHTML = "<b>Please Select An Answer!</b>";
        return;
    }
//set function to calculate running score
    var choice = selectedAns.value;
    if(questOpts[currentQuestion].answer == choice){
        score++;
    }
//clear selected option before moving forward
    selectedAns.checked = false;
    document.getElementById("errorMsg").innerHTML = ""
    currentQuestion++
//show finish screen when all questions are answered and hide question screen
    if(currentQuestion == totalQuestions){
        container.style.display = "none";
        result.style.display = "";
        result.textContent = "Your Score is: " + score;
        return;
    }
    else {
        i++
        loadQuest(currentQuestion);
    }

}



