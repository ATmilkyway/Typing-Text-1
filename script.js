const dynamicText = document.querySelector("#dynamic-text");

const phrases = ["Electrical & Computer Engineer ...", "Web Developer ...", "Football Player"];

let letterIndex = 0;
let phraseIndex = 0;
const typingSpeed = 170;
const clearingSpeed = 95;

function printLetter(phrase) {
    if (letterIndex == phrase.length) {
        clearLetter();
    } else if (letterIndex < phrase.length) {
        dynamicText.textContent += phrase.charAt(letterIndex);
        letterIndex++;
        setTimeout(function () {
            printLetter(phrase)
        }, typingSpeed);
    }
}

function clearLetter() {
    if (letterIndex == -1) {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        letterIndex = 0;
        printLetter(phrases[phraseIndex])
    } else if (letterIndex > -1) {
        let updatePhrase = "";
        for (let index = 0; index < letterIndex; index++) {
            updatePhrase += phrases[phraseIndex].charAt(index);
        }
        dynamicText.textContent = updatePhrase;
        letterIndex--;
        setTimeout(clearLetter, clearingSpeed);
    }

}

printLetter(phrases[0]);