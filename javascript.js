console.log('hello')

//get div 
const adviceResult = document.getElementById('adviceResult');
//get the button
const adB = document.getElementById('adB');

//function to get random fox
function getRandomFox(){
    //fetch the API
    fetch('https://api.adviceslip.com/advice')
    .then (res=> res.json())
    .then(data => {
        adviceResult.innerHTML = `
        <p id="adviceNumber">Advice #${data.slip.id}</p>
        <h2 id="adviceGiven">"${data.slip.advice}"</h2>`
    })
}

//Add event on the button
adB.addEventListener('click', getRandomFox);
