
document.getElementById('smname').value = getRandomArbitrary(1,10);


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
