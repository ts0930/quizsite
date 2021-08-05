const quiz = [{
  question :'東京五輪初戦先発投手は誰？',
  answers : [
    '田中将大', 
    '山本由伸', 
    '大野雄大', 
    '大谷翔平'
  ],
  correct : '山本由伸'

},{
  question :'ヤクルトスワローズにて近年3冠王に君臨した野球選手は？',
  answers : [
    '山田哲人', 
    '坂本勇人', 
    '村上宗隆', 
    '鈴木誠也'
  ],
  correct : '山田哲人'

},{
  question :'現読売ジャイアンツ2軍監督で首位打者をとったことのあるキャッチャーは？',
  answers : [
    '二岡智宏', 
    '原辰徳', 
    '阿部慎之助', 
    'クロマティ'
  ],
  correct : '阿部慎之助'

}]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題
const setupQuiz = () =>{
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}



setupQuiz();


const clickHandler = (e)=>{
  if (quiz[quizIndex].correct ===　e.target.textContent ) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    //問題数がまだあればこちら
    setupQuiz();
  } else {
    //なければこちら
    window.alert('終了！あなたの正解数は'+score+'/'+quizLength+'です！');
  }
}

//ボタンクリックで正誤判定

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click',(e)　=>{
    clickHandler(e);
  })
  handlerIndex++;
}