const words = ['Baitta Soitan. ', 'JONGI. ', 'Broken boy. '];
let index = 0;
const paragraph = document.getElementById('typing');
const staticText = "Hi,I'm a ";
const textColor = "green";

function typeWord() {
    const word = words[index];
    let i = 0;

    function type() {
        if (i < word.length) {
            paragraph.innerHTML = staticText + `<span style="color:${textColor}">${word.substring(0, i)}</span>|`;
            i++;
            setTimeout(type, 100);
        } else {
            setTimeout(eraseWord, 2000);
        }
    }

    type();
}

function eraseWord() {
    let i = words[index].length;

    function erase() {
        if (i >= 0) {
            paragraph.innerHTML = staticText + `<span style="color:${textColor}">${words[index].substring(0, i)}</span>|`;
            i--;
            setTimeout(erase, 100);
        } else {
            index = (index + 1) % words.length;
            setTimeout(typeWord, 1000);
        }
    }

    erase();
}

typeWord();

VanillaTilt.init(document.querySelectorAll(".card"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1
    })

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    }

/* for no text selection */
document.addEventListener('copy', function(e) {
    // Replace copied text with a message
    e.clipboardData.setData('text/plain', 'Copying text is disabled on this website.');
    e.preventDefault();
});