function generateHearts() {
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        let xOffset = Math.random() * 100 - 50; // Random position near the text
        let yOffset = Math.random() * 20 - 10;

        let box = document.getElementById("box");
        let boxRect = box.getBoundingClientRect();

        heart.style.left = `${boxRect.left + boxRect.width / 2 + xOffset}px`;
        heart.style.top = `${boxRect.top + yOffset}px`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}