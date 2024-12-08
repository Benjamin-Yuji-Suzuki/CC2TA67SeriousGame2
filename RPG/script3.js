let tent = 2;
const resposta3 = "ajuda"; 

function Enigma3() {
    const userInput = document.getElementById("user-input").value.trim();
    const resultMessage = document.getElementById("result-message");
    const attemptsLeft = document.getElementById("attempts-left");

    if (userInput.toLowerCase() === resposta3) {
        resultMessage.innerText = "Parabéns! Você decifrou a cifra e escapou!";
        resultMessage.style.color = "green";
        setTimeout(function() {
            window.location.href = 'final.html'; 
        }, 1000); 
    } else {
        tent--; 
        resultMessage.innerText = "Resposta errada!";
        resultMessage.style.color = "red";
        attemptsLeft.innerText = `Tentativas restantes: ${tent}`;

        if (tent === 0) {
            setTimeout(function() {
                window.location.href = 'morte.html'; 
            }, 0);
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("submit-answer").addEventListener("click", Enigma3);
});
