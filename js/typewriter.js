const typingElement = document.querySelector('.typing-animation');
const textToType = "Leo Johnston!";
let index = 0;

function typeWriter() {
    if (index < textToType.length) {
        typingElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, 150); // Adjust typing speed here
    }
}

typeWriter();