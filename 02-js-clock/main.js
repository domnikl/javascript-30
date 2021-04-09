(function() {
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');

    function setDate() {
        const now = new Date();

        const secondsDegrees = ((now.getSeconds() / 60) * 360) + 90;
        const minuteDegrees = ((now.getMinutes() / 60) * 360) + 90;
        const hourDegrees = ((now.getHours() / 12) * 360) + 90;

        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    setDate();
    setInterval(setDate, 1000);
})();
