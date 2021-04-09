(function() {
    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        const historical = document.querySelector(`div[data-previous="${e.keyCode}"]`);
        const template = document.querySelector(`div[data-previous="${e.keyCode}"] > div`);

        if (!audio) return;

        audio.currentTime = 0; // rewind to the start
        audio.play();

        key.classList.add('playing');

        // historical item
        const cloned = template.cloneNode(true);
        cloned.addEventListener('transitionend', removeAfterMoveUpTransition);
        cloned.style.display = 'block';

        historical.appendChild(cloned);

        setTimeout(() => {
            historical.lastChild.classList.add('move-up');
        }, 10);
    }

    function removeAfterMoveUpTransition(e) {
        if (e.propertyName !== 'top') return;

        this.remove();
    }

    function removePlayingTransition(e) {
        if (e.propertyName !== 'transform') return;

        this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removePlayingTransition));

    window.addEventListener('keydown', playSound);
})();
