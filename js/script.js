const words = [
    {
        wrongWord: "wiht",
        correctWord: "with"
    },
    {
        wrongWord: "nolg",
        correctWord: "long"
    },
    {
        wrongWord: "oth",
        correctWord: "hot"
    },
    {
        wrongWord: "nith",
        correctWord: "hint"
    },
    {
        wrongWord: "wshi",
        correctWord: "wish"
    },
    {
        wrongWord: "bhat",
        correctWord: "bath"
    },
    {
        wrongWord: "acht",
        correctWord: "chat"
    },
    {
        wrongWord: "seti",
        correctWord: "site"
    },
    {
        wrongWord: "nawt",
        correctWord: "want"
    },
    {
        wrongWord: "oijn",
        correctWord: "join"
    },
    {
        wrongWord: "knil",
        correctWord: "link"
    },
    {
        wrongWord: "ownk",
        correctWord: "know"
    }
];

let wrongWord = document.querySelector("#wrongWord");
let correctWord = document.querySelector("#correctWord");
let answer = document.querySelector("#answer");
let btn = document.querySelector("#btn");
let score = document.querySelector("#score");
let count = 0;
let a = words[count].wrongWord;
let b = words[count].correctWord;
wrongWord.innerHTML = a;
correctWord.innerHTML = b;
let time = 59;
let minutes = 0;
let seconds = 0;
let result = document.querySelector(".result");
let correct = document.querySelector(".correct");
let resultNext = document.querySelector(".resultNext");
let correctNext = document.querySelector(".correctNext");
let counter = document.querySelector("#counter");
let content = document.querySelector(".content");
let interval = setInterval(setint, 1000);
let scoreBoard = document.querySelector(".scoreBoard");
let next = document.querySelector(".next");
let music = document.querySelector("#music");
let play = document.querySelector("#play");
music.play();
play.addEventListener('click', ()=>{
    window.location.href= "/index.html";
})
// let count = 0;
// console.log(count)
function setint() {
    // minutes = Math.floor(time / 60);
    seconds = time % 60;
    time--;
    counter.innerHTML = minutes + " : " + seconds;
    if (seconds == 0 && count < words.length) {
      clearInterval(interval);
      document.getElementById("counter").innerHTML = "Game Over";
      content.style.display = "none";
      scoreBoard.style.display = "block";
      music.pause();
      
  
      
    } else if (seconds > 0 && count == words.length) {
      clearInterval(interval);
      content.style.display = "none";
      next.style.display = "block";

    //   document.getElementById("counter").innerHTML = "Game Over";
    }
  }


btn.addEventListener('click', function(){
    // if(count == 11) {
    //     alert('Game Over');
    //     // count = 0;
    // }
    let x = answer.value;
    count += 1;
    
    if(x.toUpperCase() == correctWord.innerHTML.toUpperCase()){
        // random = Math.floor(Math.random()* words.length);
         a = words[count].wrongWord;
         b = words[count].correctWord;
        wrongWord.innerHTML = a;
        correctWord.innerHTML = b;
        score.innerHTML =count * 5;
        result.innerHTML = count * 5;
        correct.innerHTML = count;
        resultNext.innerHTML = count * 5;
        correctNext.innerHTML = count;
        // answer.style.background = "yellow";
        answer.setAttribute('autofocus', 'autofocus');
        answer.value = "";
        // answer.autofocus = true;
        // swal({
        //     icon: "success",
        //     title: "Correct!"
        //   });
        
        // count++;
        // if(count==words.length){
        //     alert(count);
        // }
        // console.log(x, count);
    }
    else if(answer.value ==""){
        swal({
            icon: "warning",
            title: "Enter answer "
          });
        c.value="";
    }else{
        swal({
            icon: "error",
            title: "Wrong"
          });
        }
})
let sound = document.querySelector(".sound");
sound.addEventListener('click', ()=> {
   
    if (music.paused) {
      music.play()
    } else {
     music.pause()
    }
  } )
let theme = document.querySelector('.theme');
theme.addEventListener('click', ()=>{
    let element = document.body;
    element.classList.toggle("darkmode");
})
  
