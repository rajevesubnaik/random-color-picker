const btn = document.getElementById('btn');
const body = document.querySelector('body');
const hexValue = document.getElementById('hex-value');

btn.addEventListener('click', () => {
    const hexInt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        const digit = Math.floor(Math.random() * hexInt.length);
    hexColor += hexInt[digit];
    }
    body.style.backgroundColor = hexColor;
    hexValue.textContent = hexColor;
})

