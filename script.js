
const setOfWords = ["Some people combine touch typing and hunt and peck by using a buffering method. In the buffer method, the typist looks at the source copy, mentally stores one or several sentences, then looks at the keyboard and types out the buffer of sentences.",
"Many touch typists also use keyboard shortcuts or hotkeys when typing on a computer. This allows them to edit their document without having to take their hands off the keyboard to use a mouse.",
"Self-confidence is a tricky subject for many people. For some, it's impossible to feel good about themselves without outside validation."
];

const msg = document.getElementById('msg');
const typeWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime , endTime;


const playGame = () =>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    console.log(totalTime);
    
    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);
    
    let speed = Math.round((wordCount / totalTime)*60);
    let finalMsg = "You typed at " + speed + " words per minute  ";

    finalMsg += compareWords(msg.innerText ,totalStr);

    msg.innerText = finalMsg;

}

const wordCounter = (str) =>{
    let response = str.split(" ").length;
    console.log(response);
    return response;
}

const compareWords = (str1 , str2) =>{
        let words1 = str1.split(" ");
        let words2 = str2.split(" ");
        let cnt = 0;

        words1.forEach(function(item,index){
            if(item == words2[index]){
                cnt++;
            }
        })

        let errorWords = (words1.length - cnt);
        return (cnt + " correct out of " + words1.length + " words and total error are " + errorWords + " .") 
}

btn.addEventListener("click",function(){
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
    }
    else if(this.innerText == "Done"){
        typeWords.disabled = true ;
        btn.innerText = "Start";
        endPlay();
    }
})
