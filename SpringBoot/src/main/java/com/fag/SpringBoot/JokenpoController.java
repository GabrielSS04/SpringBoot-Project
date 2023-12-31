package com.fag.SpringBoot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class JokenpoController {

    /*Classe onde coleta o valor no html para utilizalo*/

    @Autowired
    private JokenpoService jokenpoService;

    @PostMapping("/jogar")
    @ResponseBody
    public String jogar(@RequestBody Jogada jogada) {
        String resultado = jokenpoService.determinarVencedor(jogada);
        return resultado;
    }

}
