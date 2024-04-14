let value = 0;
let totalScore = 0;

function updateValue() {
    let valueElement = document.querySelector(".value");
    let totalScoreElement = document.getElementById("total_score");

    if (value >= 100) {
        totalScore += value;
        value = 0;
        valueElement.innerHTML = `<img src="images/Subhan.png" alt="Photo">`;
        totalScoreElement.textContent = "مجموعی ذکر: " + totalScore;
    } else {
        valueElement.textContent = value;
    }
}

function increment() {
    value++;
    updateValue();
}

function decrement() {
    value--;
    value = Math.max(value, 0);
    updateValue();
}

updateValue();

document.getElementById('footer').textContent = new Date().getFullYear();