
let currentQuestion = 0;
let score = 0;
let answeredQuestions = [];

const allQuestions = [
    // Cyberbullying
    {
        question: "What is cyberbullying?",
        answer: "online harassment"
    },
    {
        question: "Which of these is an example of cyberbullying?",
        answer: "sharing someone's personal information without their consent"
    },
    {
        question: "What should you do if you receive a cyberbullying message?",
        answer: "save the message and report it to a trusted adult"
    },

    // Physical Bullying
    {
        question: "What is physical bullying?",
        answer: "hitting, kicking, or pushing"
    },
    {
        question: "Which of these is NOT an example of physical bullying?",
        answer: "giving someone a hug"
    },

    // Verbal Bullying
    {
        question: "What is verbal bullying?",
        answer: "name-calling or insults"
    },
    {
        question: "Which of these is an example of verbal bullying?",
        answer: "teasing someone relentlessly"
    },

    // Relational Bullying
    {
        question: "What is relational bullying?",
        answer: "damaging someone's reputation"
    },
    {
        question: "Which of these is an example of relational bullying?",
        answer: "spreading rumors to damage someone's friendships"
    },

    // Bystander Intervention
    {
        question: "What is the best way to respond to bullying?",
        answer: "tell a trusted adult"
    },
    {
        question: "What should you do if you see someone being bullied?",
        answer: "report it to a trusted adult"
    },
    {
        question: "How can you help someone who is being bullied?",
        answer: "offer support and encouragement"
    },

    // Effects of Bullying
    {
        question: "What is a common sign of someone being bullied?",
        answer: "unexplained injuries or belongings"
    },
    {
        question: "What are some potential long-term effects of bullying?",
        answer: "anxiety, depression, and low self-esteem"
    },

    // Defining Bullying
    {
        question: "What is bullying?",
        answer: "repeated, aggressive behavior intended to harm"
    },
    {
        question: "Bullying involves:",
        answer: "an imbalance of power"
    },

    // Additional Questions
    {
        question: "What is a safe way to report bullying?",
        answer: "tell a trusted adult, such as a teacher, parent, or counselor"
    },
    {
        question: "Why is it important to report bullying?",
        answer: "to protect yourself and others"
    },
    {
        question: "What is the role of a bystander in bullying?",
        answer: "to intervene and help the victim"
    },
    {
        question: "What are some positive ways to deal with conflict?",
        answer: "communication and compromise"
    },
    {
        question: "How can schools prevent bullying?",
        answer: "implement anti-bullying policies and programs"
    },
    {
        question: "What is the difference between teasing and bullying?",
        answer: "teasing is playful, bullying is intended to harm"
    },
    {
        question: "What is the impact of bullying on mental health?",
        answer: "it can lead to anxiety, depression, and low self-esteem"
    },
    {
        question: "What is the impact of bullying on academic performance?",
        answer: "it can negatively affect academic performance"
    },
    {
        question: "What is the role of parents in preventing bullying?",
        answer: "to teach children about bullying prevention and response"
    },
    {
        question: "What is the role of peers in preventing bullying?",
        answer: "to support victims and stand up to bullies"
    },
    {
        question: "What are some strategies for building resilience to bullying?",
        answer: "developing self-esteem and confidence"
    },
    {
        question: "How can communities help prevent bullying?",
        answer: "by promoting positive relationships and a culture of respect"
    }
];

const users = {
    "student1": "12345",
    "student2": "12345"
};

function signIn() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] === password) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("quiz-content").style.display = "block";
        generateQuiz();
    } else {
        alert("Invalid username or password.");
    }
}

function displayQuestion() {
    const question = questions[currentQuestion];
    let questionHTML = `<h2>${question.question}</h2>`;
    questionHTML += `<input type="text" id="answer-input" placeholder="Enter your answer">`;
    document.getElementById("question-area").innerHTML = questionHTML;
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer-input").value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestion].answer.toLowerCase();
    const inputField = document.getElementById("answer-input");

    inputField.disabled = true;

    if (userAnswer === correctAnswer) {
        inputField.classList.add("correct");
        score++;
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        fireworks();
    } else {
        inputField.classList.add("incorrect");
    }
    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
        document.getElementById("next-button").style.display = "none";
    } else {
        document.getElementById("question-area").innerHTML = `<h1>Quiz Completed! Your score is ${score} out of ${questions.length}</h1>`;
        document.getElementById("next-button").style.display = "none";
        document.getElementById("leaderboard-button").style.display = "block";
    }
}

function getRandomQuestions(numQuestions) {
    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, numQuestions);
}

const leaderboard = [
    { name: "Alice", score: 8 },
    { name: "Bob", score: 5 },
    { name: "Charlie", score: 7 },
    { name: "David", score: 3 },
    { name: "Eve", score: 9 },
    { name: "Jona", score: 6 },
    { name: "Frank", score: 4 },
    { name: "Mallory", score: 2 },
    { name: "Trent", score: 8 },
    { name: "Walter", score: 1 },
    { name: "Xavier", score: 7 },
    { name: "Yvonne", score: 6 },
    { name: "Zelda", score: 5 }
];

function displayLeaderboard() {
    const leaderboardElement = document.getElementById("leaderboard");
    leaderboardElement.innerHTML = "<h2>Leaderboard</h2><ol>";

    leaderboard.push({ name: "You", score: score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard.slice(0, 10).forEach(item => {
        leaderboardElement.innerHTML += `<li>${item.name}: ${item.score}</li>`;
    });
    leaderboardElement.innerHTML += "</ol>";

    const yourScoreIndex = leaderboard.findIndex(item => item.name === "You");
    const rank = yourScoreIndex + 1;
    leaderboardElement.innerHTML += `<div id="your-score">Your Rank: ${rank} (${score}/${questions.length}) - You</div>`;

    document.getElementById("leaderboard").style.display = "block";
    document.getElementById("quiz-content").style.display = "none";
}


function generateQuiz() {
    questions = getRandomQuestions(10);
    displayQuestion();
}

document.getElementById("next-button").addEventListener("click", nextQuestion);
document.getElementById("leaderboard-button").addEventListener("click", displayLeaderboard);

function signIn() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] === password) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("quiz-content").style.display = "block";
        generateQuiz();
    } else {
        alert("Invalid username or password.");
    }
}

function fireworks() {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    canvas.style.position = 'absolute';
    canvas.style.top = '50%';
    canvas.style.left = '50%';
    canvas.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    const numFireworks = 5;
    const fireworks = [];

    for (let i = 0; i < numFireworks; i++) {
        fireworks.push({
            x: canvas.width / 2,
            y: canvas.height,
            vx: (Math.random() - 0.5) * 10,
            vy: -20 - Math.random() * 10,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }

    function drawFirework(firework) {
        ctx.beginPath();
        ctx.arc(firework.x, firework.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = firework.color;
        ctx.fill();
    }

    function updateFireworks() {
        fireworks.forEach(firework => {
            firework.x += firework.vx;
            firework.y += firework.vy;
            firework.vy += 0.5;
            drawFirework(firework);
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        updateFireworks();
        requestAnimationFrame(animate);
    }

    animate();
    setTimeout(() => {
        document.body.removeChild(canvas);
    }, 2000);
}