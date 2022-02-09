const images = [
    '0.png', '1.png', '2.png', '3.png', '4.png'
]
const randomImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement('img');
image.src = `img/${randomImage}`;

document.body.appendChild(image);
