const sounds = {
    'aani1': new Audio('aani1.mp3'),
    'aani2': new Audio('aani2.mp3'),
    'aani3': new Audio('aani3.mp3'),
    'aani4': new Audio('aani4.mp3'),
    'aani5': new Audio('aani5.mp3'),
    'aani6': new Audio('aani6.mp3')
};

function playSound(sound) {
    stopAllSounds();
    sounds[sound].play();
}

function stopAllSounds() {
    for (let key in sounds) {
        sounds[key].pause();
        sounds[key].currentTime = 0;
    }
}