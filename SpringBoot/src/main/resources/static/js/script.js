document.addEventListener("DOMContentLoaded", function() {

    //As linhas abaixo servem para conectar os elementos do html à uma variavel no JavaScript, podendo manipular da maneira que quiser

    const escolhaButtons = document.querySelectorAll("button");
    const resultadoDiv = document.getElementById("resultado");
    const form = document.getElementById("jogadaForm");
    const reset = document.getElementById("recomecar");
    const text = document.getElementById("text");

    //O código JavaScript gerencia cliques em botões de escolha, enviando a opção do jogador para o servidor e exibindo o resultado retornado. A interface é ajustada, ocultando os botões de escolha e mostrando um botão de reset.

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

    //função para o reset, faz com que o jogo volte ao estado inicial, retornand os botões de escolha, desapareçendo o botão de reset e zerando o resultado

    reset.addEventListener("click", function() {
        escolhaButtons.forEach(b => b.style.display = "inline");
        reset.style.display = "none";
        resultadoDiv.innerHTML = "";
        text.innerHTML = "Escolha umas das opcoes abaixo para jogar:";
    });
});


