const matrixEffect = document.querySelector('.matrix-effect');

// Function to create random characters
function getRandomCharacter() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

// Create the matrix effect
function createMatrix() {
    for (let i = 0; i < 100; i++) { // Number of falling characters
        const character = document.createElement('span');
        character.textContent = getRandomCharacter();
        character.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        character.style.animationDuration = Math.random() * 2 + 2 + 's'; // Random fall duration
        matrixEffect.appendChild(character);
    }
}

createMatrix();
