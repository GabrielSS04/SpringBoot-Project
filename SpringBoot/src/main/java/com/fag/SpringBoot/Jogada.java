package com.fag.SpringBoot;
/*classe base para manpular os resultados e armazenalos*/

public class Jogada {


    
    private String jogador;
    private String computador;

    public String getJogador() {
        return jogador;
    }

    public void setJogador(String jogador) {
        this.jogador = jogador;
    }

    public String getComputador() {
        return computador;
    }

    public void setComputador(String computador) {
        this.computador = computador;
    }
}
