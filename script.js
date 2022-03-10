const quoteText = document.querySelector(".quote");
const quotebtn = document.querySelector('button');
const authorname = document.querySelector('.author .name');
const sound = document.querySelector('.sound');
const copy = document.querySelector('.copy');
const whatsapp = document.querySelector('.whatsapp');

quotebtn.addEventListener("click", randomQuote);

function randomQuote() {
    quotebtn.classList.add('loading');
    quotebtn.innerText = 'Loading quote...'
        //fetching quote from api https://api.quotable.io/random;
    fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then(res => {
            quoteText.innerText = res.content;
            authorname.innerText = res.author;
            quotebtn.innerText = "New Quote";
            quotebtn.classList.remove('loading');

        })
}


sound.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(` ${quoteText.innerText} by ${authorname.innerText} `);
    utterance.pitch = 2;
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
    // The SpeechSynthesisUtterance() constructor of the SpeechSynthesisUtterance interface returns a new SpeechSynthesisUtterance object instance.
    // its a web specch API;
})

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(quoteText.innerText);
})
whatsapp.addEventListener('click', () => {
    let tweetUrl = `https://web.whatsapp.com//`;
    window.open(tweetUrl, '_blank');
})