const quiz = [
    {
        question: "日本一有名なゴリラ、シャバーニがいる動物園は？",
        answers: [
            "京都市動物園", 
            "東山動植物園", 
            "上野動物園"
        ],
        correct: "東山動植物園"
    }, {
        question: "上野動物園にいるシャバーニのお兄さんゴリラの名前は？",
        answers: [
            "フランク",
            "ショウ",
            "ハオコ"
        ],
        correct: "ハオコ"
    }, {
        question: "群れを率いる背中が銀色のオスゴリラをシルバーバックと言う。日本で最も若いシルバーバックは？",
        answers: [
            "シャバーニ",
            "モモタロウ",
            "タロウ"
        ],
        correct: "モモタロウ"
    }, {
        question: "日本で最も大きなゴリラの群れがいる動物園は？",
        answers: [
            "京都市動物園", 
            "東山動植物園", 
            "上野動物園"
        ],
        correct: "上野動物園"
    }, {
        question: "存命中の日本最高齢ゴリラは？",
        answers: [
            "タロウ",
            "トト",
            "ネネ"
        ],
        correct: "ネネ"
    }, {
        question: "今まで6人の子を産んだ子沢山のモモコ。そんなモモコの第1子は？",
        answers: [
            "モモタロウ",
            "コモモ",
            "モモカ"
        ],
        correct: "モモタロウ"
    }, {
        question: "日本で最も体が大きいゴリラは？",
        answers: [
            "シャバーニ",
            "ハオコ",
            "モモタロウ"
        ],
        correct: "ハオコ"
    }, {
        question: "とある経験から、モモタロウが大嫌いになったものは？",
        answers: [
            "タイヤ",
            "ヘルメット",
            "バケツ"
        ],
        correct: "ヘルメット"
    }, {
        question: "人工保育で育ったゴリラは、群れに戻れない場合がある。人工保育から群れに戻ることが出来なかったゴリラは？",
        answers: [
            "ゲンタロウ",
            "アニー",
            "ローラ"
        ],
        correct: "ローラ"
    }, {
        question: "日本で唯一、ゴリラが数字の勉強をしている京都市動物園。1番成績優秀なのは？",
        answers: [
            "ゲンタロウ",
            "キンタロウ",
            "ゲンキ"
        ],
        correct: "ゲンタロウ"
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByClassName("button");
const buttonLength = $button.length;


//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById("question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;    
    while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];    
    buttonIndex++;
    }
};
setupQuiz();


//正誤判定の関数
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解！");
    }

    quizIndex++;

    if(quizIndex < quizLength) {
        //問題数がまだあれば、こちらを実行 
        setupQuiz();      
    } else {
        //なければ、こちらを実行
        window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");             
    }
};

//ボタンをクリックしたら正誤判定
let clickIndex = 0;
while (clickIndex < buttonLength) {
    $button[clickIndex].addEventListener("click", (e)=> {
        clickHandler(e);
     });
    clickIndex++;
};
