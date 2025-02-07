const bear = document.getElementById("bear");
const foods = document.querySelectorAll(".food");
const gameContainer = document.querySelector(".game-container");

let speed = 4;
let maxSize = 100;
let bearSize = 40;
let position = { x: 280, y: 180 };
let keys = { w: false, a: false, s: false, d: false };

function moveBear() {
    if (keys.w && position.y > 0) position.y -= speed;
    if (keys.s && position.y < gameContainer.clientHeight - bearSize) position.y += speed;
    if (keys.a && position.x > 0) position.x -= speed;
    if (keys.d && position.x < gameContainer.clientWidth - bearSize) position.x += speed;

    bear.style.left = position.x + "px";
    bear.style.top = position.y + "px";

    foods.forEach((food) => {
        if (checkCollision(bear, food)) {
            food.remove();
            if (bearSize < maxSize) {
                bearSize += 10;
                bear.style.width = bearSize + "px";
                bear.style.height = bearSize + "px";
            }
        }
    });

    requestAnimationFrame(moveBear);
}

function checkCollision(bear, food) {
    let bRect = bear.getBoundingClientRect();
    let fRect = food.getBoundingClientRect();
    return !(
        bRect.top > fRect.bottom ||
        bRect.bottom < fRect.top ||
        bRect.left > fRect.right ||
        bRect.right < fRect.left
    );
}

document.addEventListener("keydown", (e) => {
    if (keys.hasOwnProperty(e.key)) keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
    if (keys.hasOwnProperty(e.key)) keys[e.key] = false;
});

foods.forEach(food => {
    food.style.left = Math.random() * (gameContainer.clientWidth - 20) + "px";
    food.style.top = Math.random() * (gameContainer.clientHeight - 20) + "px";
});

moveBear();