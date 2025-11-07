
    const randomIndexOrgWord = Math.round(Math.random() * originalWords.length);
    const congrats =  document.getElementById('congrats');
    const time =  document.getElementById('time');

    let chosenWord = originalWords[randomIndexOrgWord];

   let arrayOfChosenWord = [];

    chosenWord.split('').map((cw, idx) => {
        arrayOfChosenWord.push({idx, cw});
    });

    let arrayOfIndexes = [];

    for (let i=0; i<chosenWord.length; i++) {
        arrayOfIndexes.push(i);
    }
    
    let hussledWord = [];


for (let i=0; i < chosenWord.length; i++) {

let randomIndexLetter = Math.floor(Math.random() * arrayOfChosenWord.length); 
hussledWord.push(arrayOfChosenWord[randomIndexLetter]);
arrayOfChosenWord.splice(randomIndexLetter, 1);
    
}

hussledWord.map((hw, idx) => {
    document.querySelector('.word_hussled').innerHTML += 
    `<div id=${idx} onclick="getIDX(${idx})" class="letterbox"> ${hw.cw.toUpperCase()} </div>`;

    
})

function getIDX(num) {
    document.querySelector('.word_solution').children[hussledWord[num].idx].innerHTML = 
   (hussledWord[num].cw).toUpperCase();
   document.querySelector('.word_hussled').children[num].innerHTML = '';
   }

//rij rode nummers 
for (let i=1; i<=chosenWord.length; i++) {
    document.querySelector('.word_numbers').innerHTML += 
    `<div class="numbers">${i} </div>`;
}

// rij letterkaders 
for (let i=0; i<chosenWord.length; i++) {
    document.querySelector('.word_solution').innerHTML += 
    `<div class="letterbox"> </div>`;
}

function showSolution(color, message) {
for (let i=0; i< hussledWord.length; i++) {

    document.querySelector('.word_solution').children[hussledWord[i].idx].innerHTML = 
   (hussledWord[i].cw).toUpperCase();

   document.querySelector('.word_hussled').children[i].innerHTML = '';
   congrats.style.color = color;
   congrats.textContent = message;
   document.getElementById('reload').style.visibility = 'visible';
}
}

document.getElementById('reload').addEventListener('click', () => {
    window.location.reload();
})

// timer

   timeInRound = 119;

   time.innerHTML = `2:00`;

        let timeRuns = setInterval(() => {
            let minutes = Math.floor(timeInRound / 60);
            let seconds = timeInRound - (minutes * 60);

            (seconds >= 10) ?
                time.innerHTML = `${minutes}:${seconds}` :
                time.innerHTML = `${minutes}:0${seconds}`

            if (timeInRound > 0) { timeInRound-- }

            else {
                clearInterval(timeRuns);
                showSolution('red', `Helaas! De tijd is om...het antwoord was ${chosenWord}...`);
            }
        }, 1000)

document.getElementById('checkWord').addEventListener('click', () => {
     
   eValuateWord();
})

document.getElementById('guessed_word').addEventListener('keydown', e => {
    if (e.key === 'Enter') 
    {
      
    eValuateWord();
};
    
})
    
function eValuateWord() {
     if (document.getElementById('guessed_word').value !='') {

        if ((document.getElementById('guessed_word').value).toLowerCase() === chosenWord) {

        clearInterval(timeRuns);
        showSolution('green', 'Gefeliciteerd! Je hebt het woord geraden!');
                       
        } else {
            clearInterval(timeRuns);
            showSolution('red', `Helaas! De oplossing was ${chosenWord}...`);
       }
      
    } 
}



  
