// Sample Questions for the Quiz
const questions = [
    {
        question: "What is the most commonly used renewable energy source worldwide?",
        options: ["Solar Energy", "Wind Energy", "Hydropower", "Geothermal Energy"],
        correct: 2 // Index of the correct answer (Hydropower)
    },
    {
        question: "Which gas is primarily responsible for global warming?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide (CO2)", "Hydrogen"],
        correct: 2 // Carbon Dioxide (CO2)
    },
    {
        question: "Which of the following is a non-renewable resource?",
        options: ["Solar Energy", "Coal", "Wind Energy", "Biomass"],
        correct: 1 // Coal
    },
    {
        question: "Which renewable energy technology harnesses the power of the wind?",
        options: ["Geothermal","Wind Turbines","Hydroelectric Dams","Solar Panels  " ],
        correct: 1 // Wind Turbines
    },
    {
        question: " What type of energy does a solar panel collect?",
        options: ["Wind Energy","Geothermal Energy","Thermal Energy","Solar Energy"],
        correct: 3 // Solar Energy
    },
    {
        question: "How can energy efficiency be improved in homes?",
        options: ["Using LED lights","Installing double-glazed windows","Insulating walls and roofs","All of the above"],
        correct: 3 //All of the above
    },
    {
        question: "Which of the following countries is the largest producer of solar energy?",
        options: [ "India","China","USA","Germany"],
        correct: 1 //China
    },
    {
        question: " What is the main benefit of renewable energy?",
        options: [ "It reduces greenhouse gas emissions","It's always sunny","It uses fossil fuels","It is more expensive than non-renewable energy "],
        correct: 0 //It reduces greenhouse gas emissions
    },
    {
        question: "What is biomass energy?",
        options: [ "Energy from the sun", "Energy from organic materials", "Energy from the wind","Energy from the ocean"],
        correct: 1  //Energy from organic materials
    },
    {
        question: "What does 'sustainable energy' mean?",
        options: [ "Energy that will never run out","Energy used only at night","Energy that harms the environment","Energy that meets present needs without compromising future generations"],
        correct: 3  //Energy that meets present needs without compromising future generations
    }


];


let currentQuestionIndex = 0;
let timer;
let timeLeft = 20;
let score = 0;


const questionText = document.getElementById('questionText');
const options = document.querySelectorAll('.optionBtn');
const feedback = document.getElementById('feedback');
const timerElement = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');


// Function to start the quiz
startBtn.addEventListener('click', startQuiz);
// Hide options initially
options.forEach(option => option.classList.add('hidden'));
timerElement.classList.add('hidden');




function startQuiz() {
    startBtn.classList.add('hidden'); // Hide start button
    showQuestion();
    startTimer();
}


// Function to display the current question and options
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
        option.classList.remove('hidden');
        option.disabled = false; // Enable buttons
        option.style.backgroundColor = ''; // Reset button color
    });
    feedback.textContent = '';
}


// Function to check the user's answer
options.forEach((option, index) => {
    option.addEventListener('click', () => {
        clearInterval(timer); // Stop timer


        const currentQuestion = questions[currentQuestionIndex];
        if (index === currentQuestion.correct) {
            feedback.textContent = 'Correct! Moving to the next question.';
            feedback.style.color = 'green';
            option.style.backgroundColor = 'green'; // Set correct answer color to green
        } else {
            feedback.textContent = `Wrong! The correct answer is "${currentQuestion.options[currentQuestion.correct]}".`;
            feedback.style.color = 'red';
            option.style.backgroundColor = 'red'; // Set wrong answer color to red
            options[currentQuestion.correct].style.backgroundColor = 'green'; // Highlight correct answer
        }


        options.forEach(opt => opt.disabled = true); // Disable buttons after answer


        // Move to next question after a short delay
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
                startTimer();
            } else {
                questionText.textContent = 'Quiz completed! Thanks for participating.';
                options.forEach(option => option.classList.add('hidden'));
                timerElement.textContent = '';
                feedback.textContent = '';
            }
        }, 3000);
    });
});


// Function to start the timer
function startTimer() {
    timeLeft = 20;
    timerElement.textContent = `Time Left: ${timeLeft} seconds`;


    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft} seconds`;


        if (timeLeft <= 0) {
            clearInterval(timer);
            feedback.textContent = `Time's up! The correct answer was "${questions[currentQuestionIndex].options[questions[currentQuestionIndex].correct]}".`;
            feedback.style.color = 'red';
            options[currentQuestionIndex.correct].style.backgroundColor = 'green'; // Highlight correct answer


            options.forEach(opt => opt.disabled = true); // Disable buttons


            // Move to next question after a short delay
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    showQuestion();
                    startTimer();
                } else {
                    questionText.textContent = 'Quiz completed! Thanks for participating.';
                    options.forEach(option => option.classList.add('hidden'));
                    timerElement.textContent = '';
                    feedback.textContent = '';
                }
            }, 3000);
        }
    }, 1000);
}

