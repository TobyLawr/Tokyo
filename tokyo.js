document.addEventListener("DOMContentLoaded", function () {
let trivia_prompt;
console.log("Hello!")


document.getElementById('triviaButton').addEventListener('click', () => {
    console.log('clicked!')
    trivia_prompt = true
    playGame();
})


function correct_answer(){
   changeBackground('correct');
    alert("That was correct!")
}

function wrong_answer() {
    changeBackground('incorrect');
    alert("That was incorrect.")
}

function changeBackground (isCorrect) {
    console.log('changeBackground', isCorrect)
    if (isCorrect === 'correct') {
        document.body.classList.add('correct');
        
    } else if (isCorrect === 'incorrect') {
        document.body.classList.add('incorrect');
        console.log('incorrect', document.body.style.backgroundColor)
        
    } else {
        document.body.classList.remove('incorrect');
        document.body.classList.remove('correct');
    }
}


function playGame () {

    // trivia_prompt = confirm("Hello! Would you like to play some Tokyo trivia?");
    if (trivia_prompt === true) {
        changeBackground(null);
        alert("Alright! Let's play!")
    }

    while (trivia_prompt === true){
        let question1;
        question1 = prompt("Question 1: Which Tokyo landmark was inspired by the Eiffel Tower in Paris and is painted in international orange and white to comply with air safety regulations? ")
        if (question1 === "Tokyo Tower"){
            correct_answer()
        }
        else {
            wrong_answer()
        }
        
        let question2;
        question2 = prompt("Question 2: What is the busiest train station in the world, handling over 3.5 million passengers per day?")
        if (question2 === "Shinjuku Station"){
            correct_answer()
        }
        else {
            wrong_answer()
        }
        
        let question3;
        question3 = prompt("In which Tokyo district would you find the famous “Scramble Crossing,” where hundreds of people cross the street in all directions at once?")
        if(question3 ==="Shibuya"){
            correct_answer()
        }
        else{
            wrong_answer()
        }
        trivia_prompt = false
        // changeBackground(null);
        console.log(trivia_prompt)
    }

}
});