//getQuotes

const url = 'https://type.fit/api/quotes/';
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
    newText.textContent = data[1].text;
}

//changeQuotes

const button = document.querySelector('.btn');




button.addEventListener('click', getQ);