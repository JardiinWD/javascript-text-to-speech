/* # -> commenti che iniziano con hashtag sono i passaggi svolti per il corretto funzionamento dell'app  */

/* #1 - Vado a prendere la mia textarea (input utente) */
const textArea = document.querySelector("textarea")
console.log(textArea); // #1.1 - Verifico di averlo preso correttamente

/* #2 - Vado a prendere il mio button */
speechButton = document.querySelector("button")
console.log(speechButton); // #2.1 - Verifico di averlo preso correttamente

/* #4 - Ora aggiungo al select le varie opzioni di traduzione disponibili */
voiceList = document.querySelector("select")
console.log(voiceList);

/* #4.1 - salvo "speechSynthesis" in una variabile */
let synthesis = speechSynthesis;

/* #4.2 - Avvio la creazione della funzione legata alle opzioni disponibili */
function voices() {
    for (let voice of synthesis.getVoices()) {
        /* console.log(voice); */ // Verifico in console log tutta la lista di traduttori vocali disponibili
        let option = `<option value="${voice.name}">${voice.name} (${voice.lang})</option>` // #4.4 - Salvo le opzioni di traduzione plausibili all'interno dei miei option
        voiceList.insertAdjacentHTML("beforeend", option) // #4.5 - Inserisco dinamicamente i miei tag option all'interno di select
    }
}

/* #4.3 - Ora scatendando l'evento "voiceschanged" posso prendere tutti i traduttori vocali disponibili */
synthesis.addEventListener("voiceschanged", voices)



/* #3 - Creo la funzione per il vocale */
function textToSpeech(text) {
    /* #3.1 - Creo una variabile (utterance) che, come valore ha la funzione di vocalizzatore che possiede come parametro Text (sarà il mio textArea.value)  */
    let utterance = new SpeechSynthesisUtterance(text) // Questo è il mio testo che viene salvato in una variabile
    speechSynthesis.speak(utterance) // #3.2 - Vocalizzatore vero e proprio
}

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
