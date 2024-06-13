/**
 * This file will get loaded by index.html
 */

document.getElementById('incrementButton').addEventListener('click', () => {
    clicks++;
    document.getElementById('clicks').innerText = clicks;
});

document.getElementById('decrementButton').addEventListener('click', () => {
    clicks--;
    document.getElementById('clicks').innerText = clicks;
});

document.getElementById('resetButton').addEventListener('click', () => {
    clicks = 0;
    document.getElementById('clicks').innerText = clicks;
});