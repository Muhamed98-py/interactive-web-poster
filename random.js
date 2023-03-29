let robot_text = [
    { text: 'Ми амиго, у тебя сегодня день рождения?', image: './img/robot-bandana.svg' },
    { text: 'Сегодня у нас J Balvin на корпоративе и начальство просит всех присутствовать', image: './img/robot-dj.svg' },
];

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let button = document.querySelector('.button');
let text = document.querySelector('.robot-text');
let container = document.querySelector('.container');
let image = document.querySelector('.robots-image');

button.addEventListener('click', function (evt) {
    evt.preventDefault();
    let randomElement = getRandomElement(robot_text);
    smoothly(text, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
});