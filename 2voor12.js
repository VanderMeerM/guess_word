
    const randomIndexOrgWord = Math.round(Math.random() * originalWords.length);
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

   
for (let i=1; i<=chosenWord.length; i++) {
    document.querySelector('.word_numbers').innerHTML += 
    `<div class="numbers">${i} </div>`;
}

for (let i=0; i<chosenWord.length; i++) {
    document.querySelector('.word_solution').innerHTML += 
    `<div class="letterbox"> </div>`;
}

document.getElementById('checkWord').addEventListener('click', () => {
    if (document.getElementById('guessed_word').value !='') {
        if (document.getElementById('guessed_word').value === chosenWord) {
            console.log('GOED!');
        } else {
            console.log('Helaas...');
        }
    };
})

document.getElementById('reload').addEventListener('click', () => {
    window.location.reload();
})

console.log(chosenWord)



  
