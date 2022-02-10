//getQuotes

let url = 'https://type.fit/api/quotes/';
const newText = document.querySelector('p');

async function getQ() {
    const resQ = await fetch(url);
    const data = await resQ.json();
    console.log(data);    
    showQ(data);
}
getQ();

//showQuotes

function showQ(data) {
    newText.textContent = data[randomInteger()].text;
}

//randomazer

function randomInteger(min, max) {
    min = 0;
    max = 99;
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

//changeQuotes

const button = document.querySelector('.btn');
button.addEventListener('click', getQ);

//changeImg&BG

function randomColor() {
    let color = Math.floor(Math.random() * 256 * 256 * 256);
    return '#' + ('000000' + color.toString(16)).slice(-6);
}

button.addEventListener('click', changeBG);

function changeBG() {
    let str = randomColor();
    document.body.style.backgroundColor = str;
}

//language

const en = document.querySelector('.en');
const ru = document.querySelector('.ru');

async function getRuQuotes() {  
    const quotes = 'quotes.json';
    const res = await fetch(quotes);
    const dataRu = await res.json(); 
    console.log(dataRu);
    
  }
getRuQuotes();

function changeRuSrc(){
    url = 'quotes.json';
}
ru.addEventListener('click', changeRuSrc);

function changeEnSrc() {
    url = 'https://type.fit/api/quotes/';
}
en.addEventListener('click', changeEnSrc);