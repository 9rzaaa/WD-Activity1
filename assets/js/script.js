let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

//Handle Coffee Order
document.getElementById("submitCoffee").addEventListener("click", function () {
    const coffeeName = document.getElementById("coffeeName").value;
    const coffeeSize = document.getElementById("coffeeSize").value;

    if (coffeeName) {
      document.getElementById("coffeeOutput").textContent = `You ordered a ${coffeeSize} ${coffeeName}.`;
    } else {
      alert("Please name your coffee.");
    }
});

//Handle Coffee Quiz
document.getElementById("checkNumber").addEventListener("click", function () {
    const question = "Which country is the largest producer of coffee in the world?";
    const answer = "Brazil";
    const userAnswer = document.getElementById("quizInput").value.trim();
    const output = document.getElementById("quizOutput");

    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      output.textContent = "Correct! Brazil is the largest coffee producer.";
    } else if (userAnswer) {
      output.textContent = `Incorrect. The correct answer is ${answer}.`;
    } else {
      output.textContent = "Please enter your answer.";
    }
});

//Handle Coffee Countdown
document.getElementById("startCountdown").addEventListener("click", function () {
    const countdownList = document.getElementById("countdownList");
    countdownList.innerHTML = "";

    for (let i = 5; i >= 1; i--) {
      const listItem = document.createElement("li");
      listItem.textContent = `Preparing coffee in ${i}...`;
      countdownList.appendChild(listItem);
    }

    const finalItem = document.createElement("li");
    finalItem.textContent = "Your coffee is ready!";
    countdownList.appendChild(finalItem);
});
