const questions = [
    { question: "Siapa penulis teori relativitas?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], correct: 1 },
    { question: "Berapa jumlah planet di tata surya?", options: ["7", "8", "9", "10"], correct: 1 },
    { question: "Siapa penemu mesin uap?", options: ["James Watt", "Nikola Tesla", "Michael Faraday", "Thomas Edison"], correct: 0 },
    { question: "Apa unsur kimia dengan simbol 'O'?", options: ["Oksigen", "Osmium", "Oganesson", "Orangium"], correct: 0 },
    { question: "Siapa presiden pertama Indonesia?", options: ["Sukarno", "Suharto", "Habibie", "Megawati"], correct: 0 }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        document.querySelector(".quiz-box").innerHTML = `<h2>Skor Akhir: ${score}/${questions.length}</h2>
            <button class="btn btn-success" onclick="restartQuiz()">Mulai Lagi</button>`;
        return;
    }

    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;
    
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("btn", "btn-outline-danger", "d-block", "w-100", "mt-2");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    document.getElementById("feedback").textContent = "";
    document.getElementById("score").textContent = `Skor: ${score}`;
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
        document.getElementById("feedback").textContent = "Jawaban Benar!";
        document.getElementById("feedback").style.color = "green";
        score++;
    } else {
        document.getElementById("feedback").textContent = "Jawaban Salah!";
        document.getElementById("feedback").style.color = "red";
    }
    document.getElementById("score").textContent = `Skor: ${score}`;
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

document.addEventListener("DOMContentLoaded", loadQuestion);
