document.addEventListener('DOMContentLoaded', function() {
    const counterDisplay = document.getElementById('counterValue');
    let counter = 0;

    document.getElementById('increaseButton').addEventListener('click', function() {
        counter++;
        counterDisplay.textContent = counter;
    });

    document.getElementById('decreaseButton').addEventListener('click', function() {
        counter--;
        counterDisplay.textContent = counter;
    });

    document.getElementById('resetButton').addEventListener('click', function() {
        counter = 0;
        counterDisplay.textContent = counter;
    });
});