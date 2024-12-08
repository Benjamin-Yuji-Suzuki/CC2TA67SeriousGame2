let tent = 2
const resposta2 = "16 18 15 20 5 3 1 15";
const resposta2_1 = "1618152053115";

function Enigma1() {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    const resultMessage = document.getElementById("result-message");
    const attemptsLeft = document.getElementById("attempts-left");

    if (userInput === resposta2 || userInput === resposta2_1) {
        resultMessage.innerText = "Parabéns! Você decifrou o código e abriu a porta";
        resultMessage.style.color = "green";
        setTimeout(function () {
            window.location.href = "enigma3.html";
        }, 1000);
    } else {
        tent--;
        resultMessage.innerText = "Resposta errada!";
        resultMessage.style.color = "red";
        attemptsLeft.innerText = `Tentativas restantes: ${tent}`;
    
        if (tent === 0) {
            setTimeout(function () {
                window.location.href = "morte.html";
            }, 0);
        }
    }
    
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("submit-answer").addEventListener("click", Enigma1);
});
