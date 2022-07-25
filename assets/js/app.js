/* # -> commenti che iniziano con hashtag sono i passaggi svolti per il corretto funzionamento dell'app  */

/* #1 - Vado a prendere la mia textarea (input utente) */
const textArea = document.querySelector("textarea")
console.log(textArea); // #1.1 - Verifico di averlo preso correttamente

/* #3 - Creo la funzione per il vocale */
function textToSpeech(text) {
    /* #3.1 - Creo una variabile (utterance) che, come valore ha la funzione di vocalizzatore che possiede come parametro Text (sarà il mio textArea.value)  */
    let utterance = new SpeechSynthesisUtterance(text) // Questo è il mio testo che viene salvato in una variabile
    speechSynthesis.speak(utterance) // #3.2 - Vocalizzatore vero e proprio
}


/* #2 - Vado a prendere il mio button */
speechButton = document.querySelector("button")
console.log(speechButton); // #2.1 - Verifico di averlo preso correttamente

/* #2.2 - Scateno un evento sul mio button */
speechButton.addEventListener("click", e => {
    /* console.log(e); */ // #2.3 - Verifica in console log
    e.preventDefault(); // #2.4 - Impedisco il refresh al click
    /* #2.5 - Aggiungo una condizione, se il valore di textArea è diverso da vuoto  */
    if (textArea.value !== "") {
        /* Invoco la funzione */
        textToSpeech(textArea.value)
    }

})
