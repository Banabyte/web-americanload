/**
 * Texts to randomly display while loading.
 */
 const texts = [
    "This map is temporary and will be replaced soon",
    "Family guy sucks",
    "Make sure to record the karens to put them on worldstar",
    "Try to follow the rules, it makes you 100x cooler",
    "People who disrespect people kinda suck",
    "Call 911 if you like to buy drugs",
    "Make sure to do illigal things, it's the American Way",
    "Put it on MySpace"
];

let curText = ``;
let curLetter = ``;

let textIndex = 0;
let letterIndex = 0;

/**
 * Type out the current text.
 */
const type = () => {
    if (textIndex === texts.length) textIndex = 0;

    curText = texts[textIndex];
    curLetter = curText.slice(0, ++letterIndex);

    document.querySelector(`.tips`).textContent = curLetter;

    if (letterIndex === curText.length) {
        textIndex++;
        letterIndex = 0;

        setTimeout(type, 1000);
        return;
    }

    // var audio = new Audio('/sound/clack.ogg');
    // audio.volume = 0.05
    // audio.play();
    setTimeout(type, 100);
};

// Initialize.
window.onload = () => {
    type();
};
