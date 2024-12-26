const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 4000);
};

setInterval(createSnowflake, 100);

document.addEventListener("DOMContentLoaded", () => {
    console.log("Phone interface loaded!");
  });
  
  // Установка даты Нового года
const newYearDate = new Date('December 31, 2024 23:59:59').getTime();

// Функция для обновления таймера
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = newYearDate - now;

    // Расчёт дней, часов, минут и секунд
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Обновление значений на странице
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // Если дата прошла, остановить отсчёт
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown').innerHTML = '<h2>Happy New Year! 🎉</h2>';
    }
}

// Запуск таймера
const countdownInterval = setInterval(updateCountdown, 1000);

// 1
const ideas = [
    "Приготовьте горячий шоколад и посмотрите новогодний фильм. 🎥",
    "Попробуйте испечь имбирные пряники. 🍪",
    "Украсьте окна снежинками из бумаги. ❄️",
    "Проведите вечер настольных игр с друзьями. 🌟",
    "Создайте гирлянду из лампочек своими руками. 🎄"

];

document.getElementById("generate-idea").addEventListener("click", () => {
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    document.getElementById("idea-output").textContent = randomIdea;
});

//2
const decorations = document.querySelectorAll('.decoration');

decorations.forEach(decoration => {
    decoration.addEventListener('dragstart', dragStart);
    decoration.addEventListener('dragend', dragEnd);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}

function dragEnd(e) {
    const tree = document.getElementById('tree-container');
    const rect = tree.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.target.style.position = 'absolute';
    e.target.style.left = `${x - 25}px`;
    e.target.style.top = `${y - 25}px`;
}

//3 

const addImageButton = document.getElementById('add-image');
const imageUpload = document.getElementById('image-upload');
const treeContainer = document.getElementById('interactive-tree-container');

addImageButton.addEventListener('click', () => {
    imageUpload.click();
});

imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.classList.add('uploaded-decoration');
        img.style.width = '50px';
        img.style.height = '50px';
        img.style.position = 'absolute';
        img.style.top = '50%';
        img.style.left = '50%';
        img.style.transform = 'translate(-50%, -50%)';
        img.draggable = true;

        treeContainer.appendChild(img);
    }
});
