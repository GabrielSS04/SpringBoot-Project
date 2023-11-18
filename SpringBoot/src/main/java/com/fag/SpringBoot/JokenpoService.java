package com.fag.SpringBoot;

import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class JokenpoService {

    public String escolherJogadaComputador() {
        String[] opcoes = {"pedra", "papel", "tesoura"};
        int indiceEscolhido = new Random().nextInt(opcoes.length);
        return opcoes[indiceEscolhido];
    }

    public String determinarVencedor(Jogada jogada){
        String jogador = jogada.getJogador();
        String computador = escolherJogadaComputador();

        if (jogador.equals(computador)) {
            return "Empate";
        } else if ((jogador.equals("pedra") && computador.equals("tesoura")) || (jogador.equals("papel") && computador.equals("pedra")) || (jogador.equals("tesoura") && computador.equals("papel"))) {
            return "Você venceu!";
        } else {
            return "Computador venceu!";
        }
    }

}
