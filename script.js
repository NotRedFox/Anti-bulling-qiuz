let currentQuestion = 0;
let score = 0;
let answeredQuestions = [];

const allQuestions = [
    // Cyberbullying
    {
        question: "What is cyberbullying?",
        options: [
            "A) Physical harm",
            "B) Online harassment",
            "C) Ignoring someone",
            "D) Helping someone"
        ],
        answer: "B"
    },
    {
        question: "Which of these is an example of cyberbullying?",
        options: [
            "A) Sharing someone's personal information without their consent",
            "B) Helping someone with their homework",
            "C) Having a friendly conversation online",
            "D) Complimenting someone's appearance"
        ],
        answer: "A"
    },
    {
        question: "What should you do if you receive a cyberbullying message?",
        options: [
            "A) Respond angrily",
            "B) Save the message and report it to a trusted adult",
            "C) Ignore it and hope it goes away",
            "D) Post the message on your own social media"
        ],
        answer: "B"
    },

    // Physical Bullying
    {
        question: "What is physical bullying?",
        options: [
            "A) Hitting, kicking, or pushing",
            "B) Spreading rumors",
            "C) Name-calling",
            "D) Ignoring someone"
        ],
        answer: "A"
    },
    {
        question: "Which of these is NOT an example of physical bullying?",
        options: [
            "A) Giving someone a hug",
            "B) Shoving someone",
            "C) Punching someone",
            "D) Tripping someone"
        ],
        answer: "A"
    },

    // Verbal Bullying
    {
        question: "What is verbal bullying?",
        options: [
            "A) Name-calling or insults",
            "B) Physical harm",
            "C) Spreading rumors",
            "D) Social exclusion"
        ],
        answer: "A"
    },
    {
        question: "Which of these is an example of verbal bullying?",
        options: [
            "A) Teasing someone relentlessly",
            "B) Offering a helping hand",
            "C) Having a friendly chat",
            "D) Giving a compliment"
        ],
        answer: "A"
    },

    // Relational Bullying
    {
        question: "What is relational bullying?",
        options: [
            "A) Damaging someone's reputation",
            "B) Physical violence",
            "C) Cyberbullying",
            "D) Verbal abuse"
        ],
        answer: "A"
    },
    {
        question: "Which of these is an example of relational bullying?",
        options: [
            "A) Spreading rumors to damage someone's friendships",
            "B) Giving someone a gift",
            "C) Offering support to a friend",
            "D) Including someone in a group activity"
        ],
        answer: "A"
    },

    // Bystander Intervention
    {
        question: "What is the best way to respond to bullying?",
        options: [
            "A) Fight back",
            "B) Ignore it",
            "C) Tell a trusted adult",
            "D) Join in"
        ],
        answer: "C"
    },
    {
        question: "What should you do if you see someone being bullied?",
        options: [
            "A) Report it to a trusted adult",
            "B) Do nothing",
            "C) Join in the bullying",
            "D) Ignore the situation"
        ],
        answer: "A"
    },
    {
        question: "How can you help someone who is being bullied?",
        options: [
            "A) Offer support and encouragement",
            "B) Ignore the situation",
            "C) Join in the bullying",
            "D) Tell the bully to stop"
        ],
        answer: "A"
    },

    // Effects of Bullying
    {
        question: "What is a common sign of someone being bullied?",
        options: [
            "A) Increased confidence",
            "B) Improved grades",
            "C) Unexplained injuries or belongings",
            "D) More social interaction"
        ],
        answer: "C"
    },
    {
        question: "What are some potential long-term effects of bullying?",
        options: [
            "A) Anxiety, depression, and low self-esteem",
            "B) Improved social skills",
            "C) Increased academic achievement",
            "D) Enhanced confidence"
        ],
        answer: "A"
    },

    // Defining Bullying
    {
        question: "What is bullying?",
        options: [
            "A) A single act of unkindness",
            "B) Repeated, aggressive behavior intended to harm",
            "C) A disagreement between friends",
            "D) A one-time argument"
        ],
        answer: "B"
    },
    {
        question: "Bullying involves:",
        options: [
            "A) An imbalance of power",
            "B) Equal power dynamics",
            "C) Mutual respect",
            "D) Friendly teasing"
        ],
        answer: "A"
    },

    // Additional Questions
    {
        question: "What is a safe way to report bullying?",
        options: [
            "A) Tell a trusted adult, such as a teacher, parent, or counselor",
            "B) Post about it on social media",
            "C) Confront the bully directly",
            "D) Ignore the situation"
        ],
        answer: "A"
    },
    {
        question: "Why is it important to report bullying?",
        options: [
            "A) To protect yourself and others",
            "B) To get revenge on the bully",
            "C) To make the bully feel bad",
            "D) To gain popularity"
        ],
        answer: "A"
    },
    {
        question: "What is the role of a bystander in bullying?",
        options: [
            "A) To intervene and help the victim",
            "B) To ignore the situation",
            "C) To join in the bullying",
            "D) To encourage the bully"
        ],
        answer: "A"
    },
    {
        question: "What are some positive ways to deal with conflict?",
        options: [
            "A) Communication and compromise",
            "B) Physical aggression",
            "C) Passive aggression",
            "D) Avoidance"
        ],
        answer: "A"
    },
    {
        question: "How can schools prevent bullying?",
        options: [
            "A) Implement anti-bullying policies and programs",
            "B) Ignore the problem",
            "C) Punish victims",
            "D) Encourage bullying"
        ],
        answer: "A"
    },
    {
        question: "What is the difference between teasing and bullying?",
        options: [
            "A) Teasing is playful, bullying is intended to harm",
            "B) There is no difference",
            "C) Teasing is always bullying",
            "D) Bullying is always teasing"
        ],
        answer: "A"
    },
    {
        question: "What is the impact of bullying on mental health?",
        options: [
            "A) It can lead to anxiety, depression, and low self-esteem",
            "B) It improves mental health",
            "C) It has no impact on mental health",
            "D) It increases self-confidence"
        ],
        answer: "A"
    },
    {
        question: "What is the impact of bullying on academic performance?",
        options: [
            "A) It can negatively affect academic performance",
            "B) It improves academic performance",
            "C) It has no impact on academic performance",
            "D) It increases academic achievement"
        ],
        answer: "A"
    },
    {
        question: "What is the role of parents in preventing bullying?",
        options: [
            "A) To teach children about bullying prevention and response",
            "B) To ignore the problem",
            "C) To encourage their children to bully others",
            "D) To punish victims"
        ],
        answer: "A"
    },
    {
        question: "What is the role of peers in preventing bullying?",
        options: [
            "A) To support victims and stand up to bullies",
            "B) To ignore the situation",
            "C) To join in the bullying",
            "D) To encourage the bully"
        ],
        answer: "A"
    },
    {
        question: "What are some strategies for building resilience to bullying?",
        options: [
            "A) Developing self-esteem and confidence",
            "B) Isolating oneself",
            "C) Avoiding social interaction",
            "D) Ignoring the problem"
        ],
        answer: "A"
    },
    {
        question: "How can communities help prevent bullying?",
        options: [
            "A) By promoting positive relationships and a culture of respect",
            "B) By ignoring the problem",
            "C) By punishing victims",
            "D) By encouraging bullying"
        ],
        answer: "A"
    }
];

const users = {
    "student1": "12345",
    "student2": "12345"
};


function displayQuestion() {
    const question = questions[currentQuestion];
    let questionHTML = `<h2>${question.question}</h2><ul>`;
    question.options.forEach((option, index) => {
        questionHTML += `<li><button class="option-button" data-index="${index}" onclick="checkAnswer('${option.charAt(0)}')">${option}</li>`;
    });
    questionHTML += `</ul>`;
    document.getElementById("question-area").innerHTML = questionHTML;

    const buttons = document.querySelectorAll(".option-button");
    buttons.forEach(button => button.classList.add("option-button-style"));
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestion].answer;
    const buttons = document.querySelectorAll(`#question-area button`);

    buttons.forEach(button => {
        button.classList.remove("correct", "incorrect");
        const buttonAnswer = button.textContent.charAt(0);
        if (buttonAnswer === correctAnswer) {
            button.classList.add("correct");
        } else if (buttonAnswer === selectedAnswer) {
            button.classList.add("incorrect");
        }
    });

    if (selectedAnswer === correctAnswer) {
        score++;
        confetti({
            particleCount: 100,
            spread: 170,
            origin: { y: 0.59 }
        });
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

// Leaderboard data (initialize outside displayLeaderboard)
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

    // Add the current user's score to the leaderboard
    leaderboard.push({ name: "You", score: score });

    // Sort the leaderboard by score (descending order)
    leaderboard.sort((a, b) => b.score - a.score);

    // Display the top 10 scores
    leaderboard.slice(0, 10).forEach(item => {
        leaderboardElement.innerHTML += `<li>${item.name}: ${item.score}</li>`;
    });
    leaderboardElement.innerHTML += "</ol>";

    // Display user's rank and score below the leaderboard
    const yourScoreIndex = leaderboard.findIndex(item => item.name === "You");
    const rank = yourScoreIndex + 1;
    leaderboardElement.innerHTML += `<div id="your-score">Your Rank: ${rank} (${score}/${questions.length}) - You</div>`;

    document.getElementById("leaderboard").style.display = "block";
    document.getElementById("quiz-content").style.display = "none";
}

const classCode = "ABC123"; // Your class code

function startQuiz() {
    const enteredCode = document.getElementById("class-code-input").value.trim();
    if (enteredCode === classCode) {
        document.getElementById("class-code-form").style.display = "none";
        document.getElementById("quiz-content").style.display = "block";
        generateQuiz();
    } else {
        alert("Invalid class code.");
    }
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