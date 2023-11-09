document.addEventListener("DOMContentLoaded", function() {

    const escolhaButtons = document.querySelectorAll("button");
    const resultadoDiv = document.getElementById("resultado");
    const form = document.getElementById("jogadaForm");
    const reset = document.getElementById("recomecar");
    const text = document.getElementById("text");

    escolhaButtons.forEach(button => {
        button.addEventListener("click", function() {
            const escolha = button.id;

            escolhaButtons.forEach(b => b.style.display = "none");

            fetch("/jogar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ jogador: escolha })
            })
            .then(response => response.text())
            .then(data => {
                resultadoDiv.innerHTML = `Resultado: ${data}`;
                reset.style.display = "block";
                text.innerHTML = ""
            });


        });

        
    });

    reset.addEventListener("click", function() {
        escolhaButtons.forEach(b => b.style.display = "inline");
        reset.style.display = "none";
        resultadoDiv.innerHTML = "";
        text.innerHTML = "Escolha umas das opcoes abaixo para jogar:";
    });
});


