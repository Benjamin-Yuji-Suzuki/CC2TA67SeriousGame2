let tent = 2;
const resposta1 = "integridade"; 

function Enigma1() {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    const resultMessage = document.getElementById("result-message");
    const attemptsLeft = document.getElementById("attempts-left");

    if (userInput.toLowerCase() === resposta1) {
        resultMessage.innerText = "Parabéns! Você decifrou o código e abriu a porta";
        resultMessage.style.color = "green";
        setTimeout(function() {
            window.location.href = 'enigma2.html'; 
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
    document.getElementById("submit-answer").addEventListener("click", Enigma1);
});

document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname;

    if (currentPage.includes('final.html')) {
        document.getElementById("restart-game").addEventListener("click", function() {
            window.location.href = 'index.html';
        });
    }
});
