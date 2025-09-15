// Elementlarni aniqlash
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// Global o‘zgaruvchilar
let timeValue = 100;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let questionsShuffled = [];

// Start tugmasi bosilganda infobox ochiladi
start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
}

// Exit tugmasi bilan infobox yopiladi
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
}

// Continue tugmasi bilan test boshlanadi




const categorySelect = document.getElementById("category");
const staticUrl = categorySelect.dataset.staticUrl;

continue_btn.onclick = () => {
    const selectedCategory = categorySelect.value;

    if (!selectedCategory) {
        alert("Iltimos, bo‘limni tanlang!");
        return;
    }

    // Oldingi questions.js faylini o‘chirib tashlaymiz (agar mavjud bo‘lsa)
    const oldScript = document.getElementById("questions-script");
    if (oldScript) oldScript.remove();

    // Yangi faylni yuklaymiz
    const script = document.createElement("script");
    script.src = `static/js/${selectedCategory}.js`;
    script.id = "questions-script";

    script.onload = () => {
        if (typeof questions === "undefined" || !Array.isArray(questions)) {
            alert("Savollarni yuklab bo‘lmadi.");
            return;
        }

        info_box.classList.remove("activeInfo");
        quiz_box.classList.add("activeQuiz");

        questionsShuffled = shuffleArray([...questions]).slice(0, 50);

        showQuestions(0);
        queCounter(1);
        startTimer(timeValue);
        startTimerLine(widthValue);
    };

    document.body.append(script);
};




// Result ekranidan testni qayta boshlash
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");

    // O‘zgaruvchilarni tozalash
    timeValue = 100; que_count = 0; que_numb = 1; userScore = 0; widthValue = 0;

    // Yana random 50 ta savolni tanlash
    questionsShuffled = shuffleArray([...questions]).slice(0, 50);

    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeText.textContent = "Time Left";
    next_btn.classList.remove("show");
}

// Quit tugmasi bilan sahifa yangilanadi
quit_quiz.onclick = () => {
    window.location.reload();
}

// Next tugmasi bosilganda keyingi savolga o‘tish yoki testni yakunlash
next_btn.onclick = () => {
    if (que_count < questionsShuffled.length - 1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn.classList.remove("show");
    } else {
        clearInterval(counter);
        showResult();
    }
}

// Fisher-Yates shuffle funksiyasi
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Savol va javoblarni ko‘rsatish funksiyasi
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    const questionObj = questionsShuffled[index];
    const optionsShuffled = shuffleArray([...questionObj.options]);

    que_text.innerHTML = `<span>${questionObj.question}</span>`;
    option_list.innerHTML = optionsShuffled.map(opt =>
        `<div class="option"><span>${opt}</span></div>`
    ).join("");

    const options = option_list.querySelectorAll(".option");
    options.forEach(opt =>
        opt.setAttribute("onclick", "optionSelected(this)")
    );
}

const tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
const crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// Javob tanlandi-degan funksiyasi
function optionSelected(answer) {
    clearInterval(counter);
    clearInterval(counterLine);
    const userAns = answer.textContent;
    const correcAns = questionsShuffled[que_count].answer;
    const allOptions = option_list.children.length;

    if (userAns === correcAns) {
        userScore++;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
    } else {
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag);

        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent === correcAns) {
                option_list.children[i].classList.add("correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
            }
        }
    }

    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show");
}

// Natijani ko‘rsatish funksiyasi
function showResult() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");

    const scoreText = result_box.querySelector(".score_text");
    const totalQuestions = questionsShuffled.length;
    const percentage = Math.round((userScore / totalQuestions) * 100);

    const statusText = userScore >= 32
        ? `<p class="green_ans">TABRIKLAYMIZ! Siz testdan O'TDINGIZ ✅</p>`
        : `<p class="red_ans">AFSUSKI! Siz testdan o‘ta olmadingiz ❌</p>`;

    let scoreTag = `
        <p>Siz <span>${totalQuestions}</span> ta savoldan <span>${userScore}</span> tasiga to‘g‘ri javob berdingiz</p>
        ${statusText}
        <p class="percent_result">Natija: <strong>${percentage}%</strong></p>
    `;
    scoreText.innerHTML = scoreTag;
}

// Taymer funksiyasi
function startTimer(time) {
    counter = setInterval(function () {
        timeCount.textContent = time < 10 ? "0" + time : time;
        time--;
        if (time < 0) {
            clearInterval(counter);
            timeText.textContent = "Time Off";

            const correctAns = questionsShuffled[que_count].answer;
            const allOptions = option_list.children.length;

            for (let i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent === correctAns) {
                    option_list.children[i].classList.add("correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                }
                option_list.children[i].classList.add("disabled");
            }
            next_btn.classList.add("show");
        }
    }, 1000);
}

// Progress chizig‘ini ko‘rsatish (agar foydali bo‘lsa)
function startTimerLine() {
    // Bo‘sh—xohlasangiz chiziqli progress animatsiyasini bu yerga yozing
}

// Savol raqamini ko‘rsatish funksiyasi
function queCounter(index) {
    bottom_ques_counter.innerHTML = `<span><p>${questionsShuffled.length}</p> dan <p>${index}</p> savol</span>`;
}
