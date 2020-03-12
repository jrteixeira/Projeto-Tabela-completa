
    window.addEventListener("load", function(){
        $(".se-pre-con").fadeOut("slow");;
    })

    let data = [{
        "dispositivoid": "15",
        "statusIsca": "1",
        "statusViagem": "1",
        "alertaFunc": "1, 1, 1, 1, 1, 1, 1, 1",
        "acoes": "1, 1, 1",    
        "serial": "458652",
        "placa": "ABC1238",
        "proprietario": "Omega",
        "grupoVeiculo": "Fenando de Noronha , Triade , Vintage",
        "dtComunicacao": "12/02/2020 10:22:38",
        "dtPosicao": "09/12/2019 10:22:38",
        "enderecoPosicao": "R Jose Augusto  321 - 13070000 - campinas - SP",
        "longitude": "-22.891.825",
        "latitude": "-47.082.024",
        "eventos": "posição",
        "dtEvento": "12/02/2020 10:22:38",
        "sinalValido": "Sim",
        "itvlPosicao": "12:00:00",
        "itvlPosicaoSleepAtual": "12:00:00",
        "itvlPosicaoSleepAnterior": "12:00:00",
        "tipoIsca": "descartavel",
        "operadora": "TIM",
        "dadosLBS": "ERB 01 = MNC 6 BSIC 41 RSL -75 MCC 724 LAC 1962 CID 1061 TA 255, ERB 02 = MNC 6 BSIC 18 RSL -89 MCC 724 LAC 1962 CID 1063 TA 255, ERB 03 = MNC 6 BSIC 15 RSL -97 MCC 724 LAC 1962 CID 1062 TA 255, ERB 04 = MNC 6 BSIC 46 RSL -100 MCC 724 LAC 1862 CID 3421 TA 255, ERB 05 = MNC 6 BSIC 43 RSL -102 MCC 724 LAC 1962 CID 2213 TA 255",
        "sinalgsm": "alto",
        "tipoSinal": "RF",
        "dtExpiracao": "29/01/2020",
        "diasExpiracao": "13",
        "temperatura": "10°C",
        "rfLigado": "Sim",
        "frequencia": "434.000 MHz",
        "bateria": "10%",
        "observacao": "Testar responsividade",
        "enderecoOrigem": "rua das palmeiras, 103",
        "enderecoDestino": "Largo sao francisco"
    },
    {
        "dispositivoid": "15",
        "statusIsca": "2",
        "statusViagem": "1",
        "alertaFunc": "1, 1, 1, 2, 1, 2, 2, 2",
        "acoes": "1, 1, 1",  
        "serial": "754632",
        "placa": "ASD0989",
        "proprietario": "Grupo Sascar",
        "grupoVeiculo": "Fenando de Noronha , Triade",
        "dtComunicacao": "21/02/2020 10:22:38",
        "dtPosicao": "07/02/2020 10:22:38",
        "enderecoPosicao": "Rua serra verde 100 - 13070000 - campinas - SP",
        "longitude": "-22.891.825",
        "latitude": "-47.082.024",
        "eventos": "posição em sleep",
        "dtEvento": "12/02/2020 10:22:38",
        "sinalValido": "Não",
        "itvlPosicao": "13:00:00",
        "itvlPosicaoSleepAtual": "13:00:00",
        "itvlPosicaoSleepAnterior": "13:00:00",
        "tipoIsca": "descartavel",
        "operadora": "VIVO",
        "dadosLBS": "ERB 01 = MNC 6 BSIC 41 RSL -75 MCC 724 LAC 1962 CID 1061 TA 255, ERB 02 = MNC 6 BSIC 18 RSL -89 MCC 724 LAC 1962 CID 1063 TA 255, ERB 03 = MNC 6 BSIC 15 RSL -97 MCC 724 LAC 1962 CID 1062 TA 255, ERB 04 = MNC 6 BSIC 46 RSL -100 MCC 724 LAC 1862 CID 3421 TA 255, ERB 05 = MNC 6 BSIC 43 RSL -102 MCC 724 LAC 1962 CID 2213 TA 255",
        "sinalgsm": "medio",
        "tipoSinal": "GPRS",
        "dtExpiracao": "29/01/2020",
        "diasExpiracao": "01",
        "temperatura": "55°C",
        "rfLigado": "Não",
        "frequencia": "34.000 MHz",
        "bateria": "19%",
        "observacao": "",
        "enderecoOrigem": "rua das palmeiras 103",
        "enderecoDestino": "Largo sao francisco"
    },
    {
        "dispositivoid": "15",
        "statusIsca": "1",
        "statusViagem": "2",
        "alertaFunc": "1, 1, 1, 1, 1, 2, 2, 2",
        "acoes": "1, 1, 1",  
        "serial": "021358",
        "placa": "TLK1234",
        "proprietario": "Multi portal rastreamento",
        "grupoVeiculo": "Fenando de Noronha",
        "dtComunicacao": "20/02/2020 10:22:38",
        "dtPosicao": "05/02/2020 10:22:38",
        "enderecoPosicao": "Rua onze de fevereiro 189 - 13070000 - campinas - SP",
        "longitude": "-22.891.825",
        "latitude": "-47.082.024",
        "eventos": "posição",
        "dtEvento": "12/02/2020 10:22:38",
        "sinalValido": "Sim",
        "itvlPosicao": "1:00:00",
        "itvlPosicaoSleepAtual": "14:00:00",
        "itvlPosicaoSleepAnterior": "20:00:00",
        "tipoIsca": "retornavel",
        "operadora": "CLARO",
        "dadosLBS": "ERB 01 = MNC 6 BSIC 41 RSL -75 MCC 724 LAC 1962 CID 1061 TA 255, ERB 02 = MNC 6 BSIC 18 RSL -89 MCC 724 LAC 1962 CID 1063 TA 255, ERB 03 = MNC 6 BSIC 15 RSL -97 MCC 724 LAC 1962 CID 1062 TA 255, ERB 04 = MNC 6 BSIC 46 RSL -100 MCC 724 LAC 1862 CID 3421 TA 255, ERB 05 = MNC 6 BSIC 43 RSL -102 MCC 724 LAC 1962 CID 2213 TA 255",
        "sinalgsm": "alto",
        "tipoSinal": "RF",
        "dtExpiracao": "29/01/2020",
        "diasExpiracao": "15",
        "temperatura": "14°C",
        "rfLigado": "Não",
        "frequencia": "434.000 MHz",
        "bateria": "11%",
        "observacao": "",
        "enderecoOrigem": "rua das palmeiras 103",
        "enderecoDestino": "Largo sao francisco"
    },
    {
        "dispositivoid": "15",
        "statusIsca": "1",
        "statusViagem": "1",
        "alertaFunc": "2, 3, 2, 3, 1, 2, 2, 2",
        "acoes": "1, 1, 1",  
        "serial": "112530",
        "placa": "MAN1145",
        "proprietario": "Grupo Sascar",
        "grupoVeiculo": "Triade",
        "dtComunicacao": "01/02/2020 10:22:38",
        "dtPosicao": "16/02/2020 10:22:38",
        "enderecoPosicao": "R Jose Augusto  321 - 13070000 - campinas - SP",
        "longitude": "-22.891.825",
        "latitude": "-47.082.024",
        "eventos": "Alerta de temperatura",
        "dtEvento": "12/02/2020 10:22:38",
        "sinalValido": "Sim",
        "itvlPosicao": "09:00:00",
        "itvlPosicaoSleepAtual": "16:00:00",
        "itvlPosicaoSleepAnterior": "12:00:00",
        "tipoIsca": "descartavel",
        "operadora": "TIM",
        "dadosLBS": "ERB 01 = MNC 6 BSIC 41 RSL -75 MCC 724 LAC 1962 CID 1061 TA 255, ERB 02 = MNC 6 BSIC 18 RSL -89 MCC 724 LAC 1962 CID 1063 TA 255, ERB 03 = MNC 6 BSIC 15 RSL -97 MCC 724 LAC 1962 CID 1062 TA 255, ERB 04 = MNC 6 BSIC 46 RSL -100 MCC 724 LAC 1862 CID 3421 TA 255, ERB 05 = MNC 6 BSIC 43 RSL -102 MCC 724 LAC 1962 CID 2213 TA 255",
        "sinalgsm": "alto",
        "tipoSinal": "RF",
        "dtExpiracao": "29/01/2020",
        "diasExpiracao": "46",
        "temperatura": "19°C",
        "rfLigado": "Sim",
        "frequencia": "44.000 MHz",
        "bateria": "50%",
        "observacao": "",
        "enderecoOrigem": "rua das palmeiras 103",
        "enderecoDestino": "Largo sao francisco"
    },
    {
        "dispositivoid": "15",
        "statusIsca": "2",
        "statusViagem": "3",
        "alertaFunc": "2, 3, 1, 2, 1, 2, 2, 2",
        "acoes": "1, 1, 1",  
        "serial": "784652",
        "placa": "FGR4562",
        "proprietario": "Grupo Sascar",
        "grupoVeiculo": "Vintage",
        "dtComunicacao": "15/02/2020 10:22:38",
        "dtPosicao": "28/02/2020 10:22:38",
        "enderecoPosicao": "R Jose Augusto  321 - 13070000 - campinas - SP",
        "longitude": "-22.891.825",
        "latitude": "-47.082.024",
        "eventos": "posição em sleep",
        "dtEvento": "12/02/2020 10:22:38",
        "sinalValido": "Não",
        "itvlPosicao": "11:30:00",
        "itvlPosicaoSleepAtual": "17:00:00",
        "itvlPosicaoSleepAnterior": "22:00:00",
        "tipoIsca": "retornavel",
        "operadora": "TIM",
        "dadosLBS": "ERB 01 = MNC 6 BSIC 41 RSL -75 MCC 724 LAC 1962 CID 1061 TA 255, ERB 02 = MNC 6 BSIC 18 RSL -89 MCC 724 LAC 1962 CID 1063 TA 255, ERB 03 = MNC 6 BSIC 15 RSL -97 MCC 724 LAC 1962 CID 1062 TA 255, ERB 04 = MNC 6 BSIC 46 RSL -100 MCC 724 LAC 1862 CID 3421 TA 255, ERB 05 = MNC 6 BSIC 43 RSL -102 MCC 724 LAC 1962 CID 2213 TA 255",
        "sinalgsm": "baixo",
        "tipoSinal": "GPRS",
        "dtExpiracao": "29/01/2020",
        "diasExpiracao": "0",
        "temperatura": "23°C",
        "rfLigado": "Sim",
        "frequencia": "90.000 MHz",
        "bateria": "100%",
        "observacao": "",
        "enderecoOrigem": "rua das palmeiras 103",
        "enderecoDestino": "Largo sao francisco"
    },
    {
        "dispositivoid": "15",
        "statusIsca": "1",
        "statusViagem": "3",
        "alertaFunc": "2, 3, 1, 2, 1, 2, 2, 2",
        "acoes": "1, 1, 1",  
        "serial": "002356",
        "placa": "GST7851",
        "proprietario": "Desenvolvimento",
        "grupoVeiculo": "Teste Multi portal",
        "dtComunicacao": "05/02/2020 10:22:38",
        "dtPosicao": "02/03/2020 10:22:38",
        "enderecoPosicao": "R Jose Augusto  321 - 13070000 - campinas - SP",
        "longitude": "-22.891.825",
        "latitude": "-47.082.024",
        "eventos": "posição",
        "dtEvento": "12/02/2020 10:22:38",
        "sinalValido": "Sim",
        "itvlPosicao": "18:22:00",
        "itvlPosicaoSleepAtual": "18:00:00",
        "itvlPosicaoSleepAnterior": "13:00:00",
        "tipoIsca": "retornavel",
        "operadora": "CLARO",
        "dadosLBS": "ERB 01 = MNC 6 BSIC 41 RSL -75 MCC 724 LAC 1962 CID 1061 TA 255, ERB 02 = MNC 6 BSIC 18 RSL -89 MCC 724 LAC 1962 CID 1063 TA 255, ERB 03 = MNC 6 BSIC 15 RSL -97 MCC 724 LAC 1962 CID 1062 TA 255, ERB 04 = MNC 6 BSIC 46 RSL -100 MCC 724 LAC 1862 CID 3421 TA 255, ERB 05 = MNC 6 BSIC 43 RSL -102 MCC 724 LAC 1962 CID 2213 TA 255",
        "sinalgsm": "alto",
        "tipoSinal": "RF",
        "dtExpiracao": "29/01/2020",
        "diasExpiracao": "62",
        "temperatura": "87°C",
        "rfLigado": "Não",
        "frequencia": "1.000 MHz",
        "bateria": "99%",
        "observacao": "",
        "enderecoOrigem": "rua das macaxiras 103",
        "enderecoDestino": "Largo sao francisco"
    },
    {
        "dispositivoid": "15",
        "statusIsca": "2",
        "statusViagem": "1",
        "alertaFunc": "2, 3, 1, 2, 1, 2, 2, 2",
        "acoes": "1, 1, 1",  
        "serial": "878965",
        "placa": "DSP2121",
        "proprietario": "Grupo Sascar",
        "grupoVeiculo": "JowJow",
        "dtComunicacao": "28/02/2020 10:22:38",
        "dtPosicao": "04/03/2020 10:22:38",
        "enderecoPosicao": "Rua comandante juliano tena 290 - 13070000 - campinas - SP",
        "longitude": "-22.891.825",
        "latitude": "-47.082.024",
        "eventos": "Alerta de temperatura",
        "dtEvento": "15/02/2020 10:22:38",
        "sinalValido": "Não",
        "itvlPosicao": "15:50:00",
        "itvlPosicaoSleepAtual": "19:00:00",
        "itvlPosicaoSleepAnterior": "15:00:00",
        "tipoIsca": "retornavel",
        "operadora": "VIVO",
        "dadosLBS": "ERB 01 = MNC 6 BSIC 41 RSL -75 MCC 724 LAC 1962 CID 1061 TA 255, ERB 02 = MNC 6 BSIC 18 RSL -89 MCC 724 LAC 1962 CID 1063 TA 255, ERB 03 = MNC 6 BSIC 15 RSL -97 MCC 724 LAC 1962 CID 1062 TA 255, ERB 04 = MNC 6 BSIC 46 RSL -100 MCC 724 LAC 1862 CID 3421 TA 255, ERB 05 = MNC 6 BSIC 43 RSL -102 MCC 724 LAC 1962 CID 2213 TA 255",
        "sinalgsm": "medio",
        "tipoSinal": "GPRS",
        "dtExpiracao": "29/01/2020",
        "diasExpiracao": "25",
        "temperatura": "100°C",
        "rfLigado": "Sim",
        "frequencia": "20.000 MHz",
        "bateria": "83%",
        "observacao": "",
        "enderecoOrigem": "rua das palmeiras 103",
        "enderecoDestino": "Largo sao francisco"
    },
    {
        "dispositivoid": "15",
        "statusIsca": "1",
        "statusViagem": "2",
        "alertaFunc": "2, 3, 1, 2, 1, 2, 2, 2",
        "acoes": "1, 1, 1",  
        "serial": "526435",
        "placa": "FGB8752",
        "proprietario": "Carlos manoel",
        "grupoVeiculo": "Sascar monitoramento",
        "dtComunicacao": "19/02/2020 07:22:38",
        "dtPosicao": "22/01/2020 10:22:38",
        "enderecoPosicao": "R Jose Augusto  321 - 13070000 - campinas - SP",
        "longitude": "-22.891.825",
        "latitude": "-47.082.024",
        "eventos": "posição em sleep",
        "dtEvento": "12/02/2020 10:22:38",
        "sinalValido": "Não",
        "itvlPosicao": "02:09:00",
        "itvlPosicaoSleepAtual": "20:00:00",
        "itvlPosicaoSleepAnterior": "12:00:00",
        "tipoIsca": "descartavel",
        "operadora": "TIM",
        "dadosLBS": "ERB 01 = MNC 6 BSIC 41 RSL -75 MCC 724 LAC 1962 CID 1061 TA 255, ERB 02 = MNC 6 BSIC 18 RSL -89 MCC 724 LAC 1962 CID 1063 TA 255, ERB 03 = MNC 6 BSIC 15 RSL -97 MCC 724 LAC 1962 CID 1062 TA 255, ERB 04 = MNC 6 BSIC 46 RSL -100 MCC 724 LAC 1862 CID 3421 TA 255, ERB 05 = MNC 6 BSIC 43 RSL -102 MCC 724 LAC 1962 CID 2213 TA 255",
        "sinalgsm": "alto",
        "tipoSinal": "LORAWAN",
        "dtExpiracao": "29/01/2020",
        "diasExpiracao": "25",
        "temperatura": "19°C",
        "rfLigado": "Não",
        "frequencia": "74.000 MHz",
        "bateria": "71%",
        "observacao": "",
        "enderecoOrigem": "rua das palmeiras 103",
        "enderecoDestino": "Largo sao francisco"
    },
    {
        "dispositivoid": "15",
        "statusIsca": "2",
        "statusViagem": "3",
        "alertaFunc": "2, 3, 1, 2, 1, 2, 2, 2",
        "acoes": "1, 1, 1",  
        "serial": "774856",
        "placa": "VSN9090",
        "proprietario": "pietra macedo",
        "grupoVeiculo": "Sascar teste",
        "dtComunicacao": "19/02/2020 10:22:38",
        "dtPosicao": "11/01/2020 10:22:38",
        "enderecoPosicao": "R prudente paulista 490 - 13070000 - campinas - SP",
        "longitude": "-22.891.825",
        "latitude": "-47.082.024",
        "eventos": "Detecção jammer",
        "dtEvento": "12/02/2020 10:22:38",
        "sinalValido": "Sim",
        "itvlPosicao": "01:58:00",
        "itvlPosicaoSleepAtual": "23:00:00",
        "itvlPosicaoSleepAnterior": "12:00:00",
        "tipoIsca": "descartavel",
        "operadora": "CLARO",
        "dadosLBS": "ERB 01 = MNC 6 BSIC 41 RSL -75 MCC 724 LAC 1962 CID 1061 TA 255, ERB 02 = MNC 6 BSIC 18 RSL -89 MCC 724 LAC 1962 CID 1063 TA 255, ERB 03 = MNC 6 BSIC 15 RSL -97 MCC 724 LAC 1962 CID 1062 TA 255, ERB 04 = MNC 6 BSIC 46 RSL -100 MCC 724 LAC 1862 CID 3421 TA 255, ERB 05 = MNC 6 BSIC 43 RSL -102 MCC 724 LAC 1962 CID 2213 TA 255",
        "sinalgsm": "medio",
        "tipoSinal": "GPRS",
        "dtExpiracao": "29/01/2020",
        "diasExpiracao": "3",
        "temperatura": "34°C",
        "rfLigado": "Sim",
        "frequencia": "80.000 MHz",
        "bateria": "15%",
        "observacao": "",
        "enderecoOrigem": "rua das palmeiras 103",
        "enderecoDestino": "Largo sao francisco"
    },
    {
        "dispositivoid": "15",
        "statusIsca": "2",
        "statusViagem": "1",
        "alertaFunc": "2, 3, 1, 2, 1, 2, 2, 2",
        "acoes": "1, 1, 1",  
        "serial": "032567",
        "placa": "ASD5246",
        "proprietario": "Grupo Sascar",
        "grupoVeiculo": "teste do teste",
        "dtComunicacao": "19/02/2020 09:22:38",
        "dtPosicao": "14/01/2020 10:22:38",
        "enderecoPosicao": "R Jose Augusto  321 - 13070000 - campinas - SP",
        "longitude": "-22.891.825",
        "latitude": "-47.082.024",
        "eventos": "Alerta de temperatura",
        "dtEvento": "01/02/2020 10:22:38",
        "sinalValido": "Sim",
        "itvlPosicao": "22:18:00",
        "itvlPosicaoSleepAtual": "12:00:00",
        "itvlPosicaoSleepAnterior": "12:00:00",
        "tipoIsca": "retornavel",
        "operadora": "VIVO",
        "dadosLBS": "ERB 01 = MNC 6 BSIC 41 RSL -75 MCC 724 LAC 1962 CID 1061 TA 255, ERB 02 = MNC 6 BSIC 18 RSL -89 MCC 724 LAC 1962 CID 1063 TA 255, ERB 03 = MNC 6 BSIC 15 RSL -97 MCC 724 LAC 1962 CID 1062 TA 255, ERB 04 = MNC 6 BSIC 46 RSL -100 MCC 724 LAC 1862 CID 3421 TA 255, ERB 05 = MNC 6 BSIC 43 RSL -102 MCC 724 LAC 1962 CID 2213 TA 255",
        "sinalgsm": "baixo",
        "tipoSinal": "RF",
        "dtExpiracao": "29/01/2020",
        "diasExpiracao": "42",
        "temperatura": "62°C",
        "rfLigado": "Sim",
        "frequencia": "41.000 MHz",
        "bateria": "100%",
        "observacao": "",
        "enderecoOrigem": "rua das palmeiras 103",
        "enderecoDestino": "rua indaiatuba"
    },
    {
        "dispositivoid": "15",
        "statusIsca": "1",
        "statusViagem": "1",
        "alertaFunc": "2, 3, 1, 2, 1, 2, 2, 2",
        "acoes": "1, 1, 1",  
        "serial": "965311",
        "placa": "FSD5555",
        "proprietario": "Grupo Sascar",
        "grupoVeiculo": "Comboio atomico",
        "dtComunicacao": "13/02/2020 10:22:38",
        "dtPosicao": "11/01/2020 10:22:38",
        "enderecoPosicao": "R Jose Augusto  321 - 13070000 - campinas - SP",
        "longitude": "-22.891.825",
        "latitude": "-47.082.024",
        "eventos": "posição",
        "dtEvento": "12/02/2020 10:22:38",
        "sinalValido": "Não",
        "itvlPosicao": "04:15:00",
        "itvlPosicaoSleepAtual": "21:00:00",
        "itvlPosicaoSleepAnterior": "12:00:00",
        "tipoIsca": "retornavel",
        "operadora": "VIVO",
        "dadosLBS": "ERB 01 = MNC 6 BSIC 41 RSL -75 MCC 724 LAC 1962 CID 1061 TA 255, ERB 02 = MNC 6 BSIC 18 RSL -89 MCC 724 LAC 1962 CID 1063 TA 255, ERB 03 = MNC 6 BSIC 15 RSL -97 MCC 724 LAC 1962 CID 1062 TA 255, ERB 04 = MNC 6 BSIC 46 RSL -100 MCC 724 LAC 1862 CID 3421 TA 255, ERB 05 = MNC 6 BSIC 43 RSL -102 MCC 724 LAC 1962 CID 2213 TA 255",
        "sinalgsm": "alto",
        "tipoSinal": "RF",
        "dtExpiracao": "29/01/2020",
        "diasExpiracao": "25",
        "temperatura": "49°C",
        "rfLigado": "Sim",
        "frequencia": "87.000 MHz",
        "bateria": "100%",
        "observacao": "",
        "enderecoOrigem": "rua das palmeiras 103",
        "enderecoDestino": "Largo sao francisco"
    },
    {
        "dispositivoid": "15",
        "statusIsca": "2",
        "statusViagem": "2",
        "alertaFunc": "2, 3, 1, 2, 1, 2, 2, 2",
        "acoes": "1, 1, 1",  
        "serial": "665245",
        "placa": "BDC7586",
        "proprietario": "Teste proprietario",
        "grupoVeiculo": "Sao roque",
        "dtComunicacao": "29/01/2020 10:22:38",
        "dtPosicao": "11/02/2020 10:22:38",
        "enderecoPosicao": "R Jose Augusto  321 - 13070000 - campinas - SP",
        "longitude": "-22.891.825",
        "latitude": "-47.082.024",
        "eventos": "posição",
        "dtEvento": "30/02/2020 10:22:38",
        "sinalValido": "Sim",
        "itvlPosicao": "23:20:00",
        "itvlPosicaoSleepAtual": "10:00:00",
        "itvlPosicaoSleepAnterior": "23:00:00",
        "tipoIsca": "descartavel",
        "operadora": "VIVO",
        "dadosLBS": "ERB 01 = MNC 6 BSIC 41 RSL -75 MCC 724 LAC 1962 CID 1061 TA 255, ERB 02 = MNC 6 BSIC 18 RSL -89 MCC 724 LAC 1962 CID 1063 TA 255, ERB 03 = MNC 6 BSIC 15 RSL -97 MCC 724 LAC 1962 CID 1062 TA 255, ERB 04 = MNC 6 BSIC 46 RSL -100 MCC 724 LAC 1862 CID 3421 TA 255, ERB 05 = MNC 6 BSIC 43 RSL -102 MCC 724 LAC 1962 CID 2213 TA 255",
        "sinalgsm": "medio",
        "tipoSinal": "GPRS",
        "dtExpiracao": "29/01/2020",
        "diasExpiracao": "44",
        "temperatura": "39°C",
        "rfLigado": "Não",
        "frequencia": "789.000 MHz",
        "bateria": "74%",
        "observacao": "",
        "enderecoOrigem": "rua das palmeiras 103",
        "enderecoDestino": "Largo sao francisco"
    },
    {
        "dispositivoid": "15",
        "statusIsca": "1",
        "statusViagem": "3",
        "alertaFunc": "2, 3, 1, 2, 1, 2, 2, 2",
        "acoes": "1, 1, 1",  
        "serial": "621523",
        "placa": "HSG8512",
        "proprietario": "Macaxiba",
        "grupoVeiculo": "Bahia, americana",
        "dtComunicacao": "20/01/2020 10:22:38",
        "dtPosicao": "01/02/2020 10:22:38",
        "enderecoPosicao": "Rua dos maratas 150 - 13070000 - SP",
        "longitude": "-22.891.825",
        "latitude": "-47.082.024",
        "eventos": "posição em sleep",
        "dtEvento": "12/02/2020 10:22:38",
        "sinalValido": "Não",
        "itvlPosicao": "24:10:00",
        "itvlPosicaoSleepAtual": "23:00:00",
        "itvlPosicaoSleepAnterior": "12:00:00",
        "tipoIsca": "retornavel",
        "operadora": "CLARO",
        "dadosLBS": "ERB 01 = MNC 6 BSIC 41 RSL -75 MCC 724 LAC 1962 CID 1061 TA 255, ERB 02 = MNC 6 BSIC 18 RSL -89 MCC 724 LAC 1962 CID 1063 TA 255, ERB 03 = MNC 6 BSIC 15 RSL -97 MCC 724 LAC 1962 CID 1062 TA 255, ERB 04 = MNC 6 BSIC 46 RSL -100 MCC 724 LAC 1862 CID 3421 TA 255, ERB 05 = MNC 6 BSIC 43 RSL -102 MCC 724 LAC 1962 CID 2213 TA 255",
        "sinalgsm": "baixo",
        "tipoSinal": "RF",
        "dtExpiracao": "29/01/2020",
        "diasExpiracao": "25",
        "temperatura": "10°C",
        "rfLigado": "Não",
        "frequencia": "100.000 MHz",
        "bateria": "50%",
        "observacao": "",
        "enderecoOrigem": "rua das palmeiras 103",
        "enderecoDestino": "Largo sao francisco"
    },
    {
        "dispositivoid": "15",
        "statusIsca": "2",
        "statusViagem": "1",
        "alertaFunc": "2, 3, 1, 2, 1, 2, 2, 2",
        "acoes": "1, 1, 1",  
        "serial": "412458",
        "placa": "TRL2356",
        "proprietario": "Grupo Sascar",
        "grupoVeiculo": "São roque, São paulo",
        "dtComunicacao": "30/12/2019 10:22:38",
        "dtPosicao": "10/02/2020 10:22:38",
        "enderecoPosicao": "R Jose Augusto  321 - 13070000 - campinas - SP",
        "longitude": "-22.891.825",
        "latitude": "-47.082.024",
        "eventos": "posição",
        "dtEvento": "20/02/2020 10:22:38",
        "sinalValido": "Não",
        "itvlPosicao": "12:50:00",
        "itvlPosicaoSleepAtual": "12:00:00",
        "itvlPosicaoSleepAnterior": "21:00:00",
        "tipoIsca": "descartavel",
        "operadora": "TIM",
        "dadosLBS": "ERB 01 = MNC 6 BSIC 41 RSL -75 MCC 724 LAC 1962 CID 1061 TA 255, ERB 02 = MNC 6 BSIC 18 RSL -89 MCC 724 LAC 1962 CID 1063 TA 255, ERB 03 = MNC 6 BSIC 15 RSL -97 MCC 724 LAC 1962 CID 1062 TA 255, ERB 04 = MNC 6 BSIC 46 RSL -100 MCC 724 LAC 1862 CID 3421 TA 255, ERB 05 = MNC 6 BSIC 43 RSL -102 MCC 724 LAC 1962 CID 2213 TA 255",
        "sinalgsm": "alto",
        "tipoSinal": "GPRS",
        "dtExpiracao": "29/01/2020",
        "diasExpiracao": "72",
        "temperatura": "67°C",
        "rfLigado": "Sim",
        "frequencia": "320.000 MHz",
        "bateria": "99%",
        "observacao": "",
        "enderecoOrigem": "rua das palmeiras 103",
        "enderecoDestino": "Largo sao francisco"
    },
    {
        "dispositivoid": "15",
        "statusIsca": "2",
        "statusViagem": "2",
        "alertaFunc": "2, 3, 1, 2, 1, 2, 2, 2",
        "acoes": "1, 1, 1",  
        "serial": "325986",
        "placa": "UBS1010",
        "proprietario": "São pedro motoristas",
        "grupoVeiculo": "Fenando de Noronha , Triade",
        "dtComunicacao": "05/11/2019 10:22:38",
        "dtPosicao": "21/02/2020 10:22:38",
        "enderecoPosicao": "R Jose Augusto  321 - 13070000 - campinas - SP",
        "longitude": "-22.891.825",
        "latitude": "-47.082.024",
        "eventos": "Detecção de corte de antena GPS",
        "dtEvento": "12/02/2020 10:22:38",
        "sinalValido": "Não",
        "itvlPosicao": "19:02:00",
        "itvlPosicaoSleepAtual": "12:00:00",
        "itvlPosicaoSleepAnterior": "02:00:00",
        "tipoIsca": "retornavel",
        "operadora": "TIM",
        "dadosLBS": "ERB 01 = MNC 6 BSIC 41 RSL -75 MCC 724 LAC 1962 CID 1061 TA 255, ERB 02 = MNC 6 BSIC 18 RSL -89 MCC 724 LAC 1962 CID 1063 TA 255, ERB 03 = MNC 6 BSIC 15 RSL -97 MCC 724 LAC 1962 CID 1062 TA 255, ERB 04 = MNC 6 BSIC 46 RSL -100 MCC 724 LAC 1862 CID 3421 TA 255, ERB 05 = MNC 6 BSIC 43 RSL -102 MCC 724 LAC 1962 CID 2213 TA 255",
        "sinalgsm": "medio",
        "tipoSinal": "LORAWAN",
        "dtExpiracao": "29/01/2020",
        "diasExpiracao": "11",
        "temperatura": "91°C",
        "rfLigado": "Não",
        "frequencia": "90.000 MHz",
        "bateria": "80%",
        "observacao": "",
        "enderecoOrigem": "rua das palmeiras 103",
        "enderecoDestino": "Largo sao francisco"
    }];
    const dataBackup = data;
    // Função que popula a tabela
    function populaTabela(){
        
        var tableBody = document.querySelector("tbody");
        while(tableBody.hasChildNodes())
            {
                tableBody.removeChild(tableBody.firstChild);
            }
        data.forEach(v => {
        const events = v.eventos;
        const plate = v.placa;
        const proprietario = v.proprietario;
        const validSignal = v.sinalValido;
        let alertaFunc = v.alertaFunc;
        const acoes = v.acoes;
        const dt_comunication = v.dtComunicacao;
        const dt_position = v.dtPosicao;
        const itvl_posicao = v.itvlPosicao;
        const bateria = v.bateria;
        const frequencia = v.frequencia;
        const temperatura = v.temperatura;
        const serial = v.serial;
        const grupoVeiculo = v.grupoVeiculo;
        const enderecoPosicao = v.enderecoPosicao;
        const longitude = v.longitude;
        const latitude = v.latitude;
        const dtEvento = v.dtEvento;
        const itvlPosicaoSleepAtual = v.itvlPosicaoSleepAtual;
        const itvlPosicaoSleepAnterior = v.itvlPosicaoSleepAnterior;
        const tipoIsca = v.tipoIsca;
        const operadora = v.operadora;
        const dadosLBS = v.dadosLBS;
        const sinalgsm = v.sinalgsm;
        const tipoSinal = v.tipoSinal;
        const dtExpiracao = v.dtExpiracao;
        const diasExpiracao = v.diasExpiracao;
        const rfLigado = v.rfLigado;
        const observacao = v.observacao;
        const enderecoOrigem = v.enderecoOrigem;
        const enderecoDestino = v.enderecoDestino;
        var statusAcoesMap = "";
        var statusAcoesComando = "";
        var statusAcoesDash = "";
        var statusIscaType = "";
        var statusIscaColor = "";
        var statusViagemType = "";
        var sinalGsmIcon = "";

    
        // Laço para preencher coluna de status isca
        switch(v.statusIsca){
            case '1':
                statusIscaType = "Ativadas"
                statusIscaColor = "orange-color"
                break;
            case '2':
                statusIscaType = "Aguardando ativação"
                statusIscaColor = "green-color"
                break; 
        };
        // Laço para preencher coluna de status viagem
        switch(v.statusViagem){
            case '1':
                statusViagemType = "Em viagem"
                break;
            case '2':
                statusViagemType = "Fim de Viagem"
                break; 
            case '3':
                statusViagemType = "Fora de Operação"
                break;  
        };
        // Laço para preencher coluna de status isca
        alertaFunc = alertaFunc.split(", ")
        for(var i=0; i < alertaFunc.length; i++){
            if(alertaFunc[i] == 1){
                window["alerta"+i] = "green";
            }
            else if(alertaFunc[i] == 2){
                 window["alerta"+i] = "red";
            }
            else{
                 window["alerta"+i] = "";
            }
        };

        if(acoes[0] = 1){
            statusAcoesMap = "<a style='padding: inherit;' data-tooltip='Exibir mapa'><i class='map marker alternate large icon'></i></a>"
        };
        if(acoes[1] = 1){
            statusAcoesComando = "<a style='padding: inherit;'><i class='bullseye large icon'></i></a>"
        };
        if(acoes[2] = 1){
            statusAcoesDash = "<a style='padding: inherit;' data-tooltip='Exibir grafico'><i class='chart pie large icon'></i></a>"
        };
        
        if(sinalgsm == "baixo"){
                sinalGsmIcon = "<img name='baixo' style='width:19px;' src='https://cache.1gps.com.br/system/img/icons/signal_bars_1'>"
        }
        if(sinalgsm == "medio"){
                sinalGsmIcon = "<img name='medio' style='width:19px;' src='https://cache.1gps.com.br/system/img/icons/signal_bars_3'>"
        }
        if(sinalgsm == "alto"){
                sinalGsmIcon = "<img name='alto' style='width:19px;' src='https://cache.1gps.com.br/system/img/icons/signal_bars_5'>"

        };
        
            $('#tabela_criada tbody').append(
            '<tr><td name="statusIsca" scope="col"><div style="flex-direction: column;margin-left: 20px;">'
            +'<i class="circle '+ statusIscaColor +' icon"></i><span>' + statusIscaType + '</span>' + '</div></td>'
            + '<td class="centered-text" name="statusViagem" scope="col" style="padding-top: 5px;padding-right: 0px;"><div class="edit-icon"><a data-tooltip="Editar registro" data-position="top right"><i class="edit large icon"></i></a></div><span>' + statusViagemType + '</span></td>'
            +'<td name="alertaFunc" scope="col"><div class="display-flex centered-text">'
            +'<div style="margin-left: 20px;"><span>Falha de comunicação</span><i data-alert-func class="circle ' + window["alerta"+0] + ' icon" style="margin-top: 5px;"></i></div>'
            +'<div style="margin-left: 20px;"><span>Faixa temperatura</span><i data-alert-func class="circle ' + window["alerta"+1] + ' icon" style="margin-top: 5px;"></i></div>'
            +'<div style="margin-left: 20px;"><span>Nivel bateria</span><i data-alert-func class="circle ' + window["alerta"+2] + ' icon" style="margin-top: 5px;"></i></div>'
            +'<div style="margin-left: 20px;"><span>RF ligado</span><i data-alert-func class="circle ' + window["alerta"+3] + ' icon" style="margin-top: 5px;"></i></div>'
            +'<div style="margin-left: 20px;"><span>Tempo expiração</span><i data-alert-func class="circle ' + window["alerta"+4] + ' icon" style="margin-top: 5px;"></i></div>'
            +'<div style="margin-left: 20px;"><span>Ciclo isca</span><i data-alert-func class="circle ' + window["alerta"+5] + ' icon" style="margin-top: 5px;"></i></div>'
            +'<div style="margin-left: 20px;"><span>Modo recuperação</span><i data-alert-func class="circle ' + window["alerta"+6] + ' icon" style="margin-top: 5px;"></i></div>'
            +'<div style="margin-left: 20px;"><span>Modo emergência</span><i data-alert-func class="circle ' + window["alerta"+7] + ' icon" style="margin-top: 5px;"></i></div></div></td>'
            + '<td class="centered-text  " name="acoes" scope="col">' + statusAcoesMap + statusAcoesComando + statusAcoesDash +'</td>'
            + '<td class="centered-text " name="serial" scope="col">' + serial + '</td>'
            + '<td class="centered-text " name="placa" scope="col">' + plate + '</td>'
            + '<td class="centered-text" name="proprietario" scope="col" style="padding-top: 5px;padding-right: 0px;"><div class="edit-icon"><a data-tooltip="Editar registro" data-position="top right"><i class="edit large icon"></i></a></div><span>' + proprietario + '</span></td>'
            + '<td class="centered-text " name="grupoVeiculo" scope="col">' + grupoVeiculo + '</td>'
            + '<td class="centered-text " name="dtComunicacao" scope="col">' + dt_comunication + '</td>'
            + '<td class="centered-text " name="dtPosicao" scope="col">' + dt_position + '</td>'
            + '<td class="centered-text " name="enderecoPosicao" scope="col">' + enderecoPosicao + '</td>'
            + '<td class="centered-text " name="longitude" scope="col">' + longitude + '</td>'
            + '<td class="centered-text " name="latitude" scope="col">' + latitude + '</td>'
            + '<td class="" name="eventos" scope="col">' + events + '</td>'
            + '<td class="centered-text " name="dtEvento" scope="col">' + dtEvento + '</td>'
            + '<td class="centered-text " name="sinalValido" scope="col">' + validSignal + '</td>'
            + '<td class="centered-text " name="itvlPosicao" scope="col">' + itvl_posicao + '</td>'
            + '<td class="centered-text " name="itvlPosicaoSleepAtual" scope="col">' + itvlPosicaoSleepAtual + '</td>'
            + '<td class="centered-text " name="itvlPosicaoSleepAnterior" scope="col">' + itvlPosicaoSleepAnterior + '</td>'
            + '<td class="centered-text " name="tipoIsca" scope="col">' + tipoIsca + '</td>'
            + '<td class="centered-text " name="operadora" scope="col">' + operadora + '</td>'
            + '<td class="centered-text colLBS" name="dadosLBS" scope="col">' + dadosLBS + '</td>'
            + '<td class="centered-text " name="sinalgsm" scope="col">' + sinalGsmIcon + '</td>'
            + '<td class="centered-text " name="tipoSinal" scope="col">' + tipoSinal + '</td>'
            + '<td class="centered-text " name="dtExpiracao" scope="col">' + dtExpiracao + '</td>'
            + '<td class="centered-text " name="diasExpiracao" scope="col">' + diasExpiracao + '</td>'
            + '<td class="centered-text " name="temperatura" scope="col">' + temperatura + '</td>'
            + '<td class="centered-text " name="rfLigado" scope="col">' + rfLigado + '</td>'
            + '<td class="centered-text " name="frequencia" scope="col">' + frequencia + '</td>'
            + '<td class="centered-text " name="bateria" scope="col">' + bateria + '</td>'
            + '<td class="centered-text" name="observacao" scope="col" style="padding-top: 5px;padding-right: 0px;"><div class="edit-icon"><a data-tooltip="Editar registro" data-position="top right"><i class="edit large icon"></i></a></div><span>' + observacao + '</span></td>'
            + '<td class="centered-text" name="enderecoOrigem" scope="col" style="padding-top: 5px;padding-right: 0px;"><div class="edit-icon"><a data-tooltip="Editar registro" data-position="top right"><i class="edit large icon"></i></a></div><span>' + enderecoOrigem + '</span></td>'
            + '<td class="centered-text" name="enderecoDestino" scope="col" style="padding-top: 5px;padding-right: 0px;"><div class="edit-icon"><a data-tooltip="Editar registro" data-position="top right"><i class="edit large icon"></i></a></div><span>' + enderecoDestino + '</span></td></tr>'
            );
        });
    }



    // Populando filtro de status
    let StatusIsca = data.map(variavel => {
            return  variavel.statusIsca;
    });
    StatusIsca = [ ...new Set( StatusIsca ) ];
    StatusIsca.forEach(eve =>{
        $('#header_statusIsca .ui.custom.popup').append('<div class="ui checkbox"><input type="checkbox" id="id_statusIsca_'+eve+'" name="'+eve+'"><label>'+eve+'</label></div>');
    });
    //

    // Populando filtro de status
    let StatusViagem = data.map(variavel => {
        return  variavel.statusViagem;
    });
    StatusViagem = [ ...new Set( StatusViagem ) ];
    StatusViagem.forEach(eve =>{
        $('#header_statusViagem .ui.custom.popup').append('<div class="ui checkbox"><input type="checkbox" id="id_statusViagem_'+eve+'" name="'+eve+'"><label>'+eve+'</label></div>');
    });
    //

    // Populando filtro de eventos
    let Eventos = data.map(variavel => {
            return  variavel.eventos;
    });
    Eventos = [ ...new Set( Eventos ) ];
    Eventos.forEach(eve =>{
        $('#header_eventos .ui.custom.popup').append('<div class="ui checkbox"><input type="checkbox" id="id_eventos_'+eve+'" name="'+eve+'"><label>'+eve+'</label></div>');
    });
    //

    // Populando filtro de tipo de isca
    let TipoIsca = data.map(variavel => {
        return  variavel.tipoIsca;
    });

    TipoIsca = [ ...new Set( TipoIsca ) ];

    TipoIsca.forEach(eve =>{
        $('#header_tipoIsca .ui.custom.popup').append('<div class="ui checkbox"><input type="checkbox" id="id_tipoIsca_'+eve+'" name="'+eve+'"><label>'+eve+'</label></div>');
    });

    // Populando filtro de Nivel de sinal GMS
    let sinalGSM = data.map(variavel => {
            return  variavel.sinalgsm;
    });
    sinalGSM = [ ...new Set( sinalGSM ) ];
    sinalGSM.forEach(signal =>{
        $('#header_sinalgsm .ui.custom.popup').append('<div class="ui checkbox"><input type="checkbox" id="id_sinalgsm_'+signal+'" name="'+signal+'"><label>'+signal+'</label></div>');
    });

    // Populando filtro de Nivel de sinal GMS
    let TipoSinal = data.map(variavel => {
    return  variavel.tipoSinal;
    });
    TipoSinal = [ ...new Set( TipoSinal ) ];
    TipoSinal.forEach(signal =>{
        $('#header_tipoSinal .ui.custom.popup').append('<div class="ui checkbox"><input type="checkbox" id="id_tipoSinal_'+signal+'" name="'+signal+'"><label>'+signal+'</label></div>');
    });

    // Populando filtro de sinal valido
    let SinalValido = data.map(variavel => {
            return  variavel.sinalValido;
    });
    SinalValido = [ ...new Set( SinalValido ) ];
    SinalValido.forEach(signal =>{
        $('#header_sinalValido .ui.custom.popup').append('<div class="ui checkbox"><input type="checkbox" id="id_sinalValido_'+signal+'" name="'+signal+'"><label>'+signal+'</label></div>');
    });

    // Populando filtro de RF ligado
    let RfLigado = data.map(variavel => {
        return  variavel.rfLigado;
    });
    RfLigado = [ ...new Set( RfLigado ) ];
    RfLigado.forEach(signal =>{
        $('#header_rfLigado .ui.custom.popup').append('<div class="ui checkbox"><input type="checkbox" id="id_rfLigado_'+signal+'" name="'+signal+'"><label>'+signal+'</label></div>');
    });

    const allcommand = document.querySelectorAll('tbody tr td a i.bullseye.large.icon'); // Array com todos os botões de comandos
    console.log("Todos os botoes: "+allcommand)

    // Função que limpa listas auxiliares
    function limpaListasAuxiliares(){
        for (var i = 0; i < allHeaders.length; ++i) {
            var varname = allHeaders[i].getAttribute("name");
            window["filtro_"+varname] = [];
        }
    }

    // Função que calcula quantidade em cada status
    function calculaQtdStatus(){
        var ativos = 0;
        var aguardando = 0;
        var viagem = 0;
        var total = dataBackup.length;

        for(var i=0;i<dataBackup.length;i++){
            if(dataBackup[i].statusIsca == 1){
                ativos = ativos + 1;
            }
            if(dataBackup[i].statusIsca == 2){
                aguardando = aguardando + 1;
            }
            if(dataBackup[i].statusViagem == 3){
                viagem = viagem + 1;
            }
        }
        document.querySelector("#ativo_id").innerHTML = ativos;
        document.querySelector("#aguardando_ativacao_id").innerHTML = aguardando;
        document.querySelector("#em_viagem_id").innerHTML = viagem;
        document.querySelector("#total_id").innerHTML = total;
    }

    // Atualiza os dados da tabela
    function atualizaTabela(){
        auxiliar = [];
        var contemDados = true;
        for(var i = 0; i < allHeaders.length; i++){
            var varname = allHeaders[i].getAttribute("name");
            if(auxiliar.length == 0){
                auxiliar = window["filtro_"+varname];
            }
            if(auxiliar.length != 0 && window["filtro_"+varname].length != 0){
                auxiliar = auxiliar.filter(element => window["filtro_"+varname].includes(element));
                auxiliar = [ ...new Set( auxiliar ) ];
            }
        }
        for(var i = 0; i < allHeaders.length; i++){
            var varname = allHeaders[i].getAttribute("name");
            if(window["filtro_"+varname].length != 0){
                contemDados = false;
                break;
            }
        }
        if(contemDados == true){
            if(auxiliar.length == 0){
                data = dataBackup;
                populaTabela();
            //  limpaListasAuxiliares();
            }
        }
        else{
            data = auxiliar;
            populaTabela();
        //  limpaListasAuxiliares();
        }
    }
    
    // Função que limpa todos os Filtros
    function limpaFiltros(){
        data = dataBackup;
        const allCheckbox = $('.ui.custom.popup .ui.checkbox');
        for(i = 0; i < allCheckbox.length; i++){
            var selecionado = allCheckbox[i].firstChild.checked;
            if(selecionado == true){
                allCheckbox[i].firstChild.checked = 0;
            }
        };
        for (var i = 0; i < allSortIcons.length; ++i) {
            if(allSortIcons[i].classList.contains("down")){
                allSortIcons[i].classList.remove("down");
                allSortIcons[i].classList.add("up");
            }
        }
        document.querySelectorAll("#tabela_criada input").forEach(input =>{
            input.value = "";
        });
        ocultaColunas();
        limpaListasAuxiliares();
        populaTabela();
    }

    // Função para ordenar tabela
    function sortTable(n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("tabela_criada");
        switching = true;
        dir = "asc"; 
        while (switching) {
          switching = false;
          rows = table.rows;
          for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if(x.lastChild.lastChild != null && x.lastChild.lastChild.innerHTML != undefined){
                if (dir == "asc") {
                    if (x.lastChild.lastChild.innerHTML.toLowerCase() > y.lastChild.lastChild.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                    }
                }else if (dir == "desc") {
                    if (x.lastChild.lastChild.innerHTML.toLowerCase() < y.lastChild.lastChild.innerHTML.toLowerCase()) {    
                    shouldSwitch = true;
                    break;
                    }
                }
            }
            else if(x.lastChild != null && x.lastChild.innerHTML != undefined){
                if (dir == "asc") {
                    if (x.lastChild.innerHTML.toLowerCase() > y.lastChild.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                    }
                } else if (dir == "desc") {
                    if (x.lastChild.innerHTML.toLowerCase() < y.lastChild.innerHTML.toLowerCase()) {    
                    shouldSwitch = true;
                    break;
                    }
                }
            }
            else{
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {    
                        shouldSwitch = true;
                        break;
                    }
                }
            }
          }
          if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;      
          } else {
            if (switchcount == 0 && dir == "asc") {
              dir = "desc";
              switching = true;
            }
          }
        }
      }

    // Função para filtrar a tabela pelos checkBox
    function filtroCheckbox(){
        for (var i = 0; i < allCheckboxFilter.length; ++i) {
                var coluna = allCheckboxFilter[i].parentNode.parentNode.getAttribute("name");
                if(window["filtro_"+coluna].length != 0){
                    window["filtro_"+coluna] = [];
                }
        }
        for (var i = 0; i < allCheckboxFilter.length; ++i) {
            if(allCheckboxFilter[i].firstChild.checked == true){
                var coluna = allCheckboxFilter[i].parentNode.parentNode.getAttribute("name");
                var dataVal = allCheckboxFilter[i].firstChild.name;

                var filtrados = dataBackup.filter((dado)=>{      
                return dado[coluna] == dataVal;
                });

                filtrados.forEach(i =>{
                    window["filtro_"+coluna].push(i)
                })
                window["filtro_"+coluna] = [ ...new Set( window["filtro_"+coluna] ) ];
            }
        }
        atualizaTabela();
    }

    // Funcao para mudar icone de ordenação ao clicar
    function changeIcon(indice){
        var icone = $('.sort.alphabet.icon')[indice];
            if(icone.classList.contains("down")){
                icone.classList.remove("down");
                icone.classList.add("up");
            }
            else{
                icone.classList.remove("up");
                icone.classList.add("down");
            }
        }

    // Função para filtrar por valores digitados, por igualdade
    $(function(){
        $("#tabela_criada input.letter").keyup(function(){   
            var auxiliar = [];  
            var index = $(this).parent().parent().index();
            var coluna = this.parentElement.parentElement.getAttribute("name");
            window["filtro_"+coluna] = [];
            
            var nth = "#tabela_criada td:nth-child("+(index+1).toString()+")";
            var valor = $(this).val().toUpperCase();
            var accepted = true;
            var filtrados = dataBackup.filter((dado)=>{    
                for(var i = 0; i < valor.length; i++){
                    if(dado[coluna].toUpperCase().indexOf(valor.split("")[i]) >= 0){
                        accepted = true;
                    }else{
                        accepted = false;
                        break;
                    }  
                }
                if(accepted == true){
                    return dado[coluna];
                }
            });
            if(valor.length != 0){
                if(filtrados.length == 0){
                    data = [];
                    populaTabela();
                }
            }
            if(valor.length == 0){
                accepted = false;
            }
            

            if(filtrados.length != 0){
                filtrados.forEach(i =>{
                    window["filtro_"+coluna].push(i)
                })
                window["filtro_"+coluna] =  [ ...new Set( window["filtro_"+coluna] ) ];
                atualizaTabela()
            }
            
        });
    });

    // Função para filtrar dados por data
    $(function(){
        $("#tabela_criada input.date").keyup(function(e){  
            if(e.which == 8 || e.which == 46){ 
                
                if($(this).val() == ""){
                    var coluna = this.parentElement.parentElement.getAttribute("name");
                    window["filtro_"+coluna] = [];
                    atualizaTabela()
                }
            } 
            if(e.which == 13){ 
                auxiliar = [];
                var coluna = this.parentElement.parentElement.getAttribute("name");
                window["filtro_"+coluna] = [];
                var str = $(this).val().replace(/\s/g,'');  // Edita o valor digitado retirando os espaços
                if(str.slice(1, 2) == "="){
                    str = [str.slice(0, 2), str.slice(2)].join(' ');
                    str = [str.slice(0, 13), str.slice(13)].join(' ');
                    if(str.slice(15, 16) == "="){
                        str = [str.slice(0, 16), str.slice(16)].join(' ');
                     }
                     else{
                        str = [str.slice(0, 15), str.slice(15)].join(' ');
                     }
                }else{
                    str = [str.slice(0, 1), str.slice(1)].join(' ');
                    str = [str.slice(0, 12), str.slice(12)].join(' ');

                    if(str.slice(14, 15) == "="){
                        str = [str.slice(0, 15), str.slice(15)].join(' ');
                     }
                     else{
                        str = [str.slice(0, 14), str.slice(14)].join(' ');
                     }
                }
                
                var str = str.split(" "); //Recebe valores digitados
                var cond1 = str[0]; // recebe primeira condição
                var data1 =  str[1]; // Separa primeira data
                var partesData1 = data1.split("/");
                var NewData1 = new Date(partesData1[2], partesData1[1] - 1, partesData1[0]);
                var cond2 = str[2];
                var data2 = str[3];
                if(data2 != "Invalid Date"){
                    var partesData2 = data2.split("/");
                    var NewData2 = new Date(partesData2[2], partesData2[1] - 1, partesData2[0]);
                }
                
                var filtrados = dataBackup.filter((dado)=>{  
                    
                    var accepted = true;
                    var dataPrincipal = dado[coluna].split(" "); // Data que esta sendo comparada
                    var partesDataPrincipal = dataPrincipal[0].split("/");
                    var NewDataPrincipal = new Date(partesDataPrincipal[2], partesDataPrincipal[1] - 1, partesDataPrincipal[0]);
                    if(cond1 == '>'){
                        accepted = NewDataPrincipal > NewData1;
                    }
                    if(cond1 == '>='){
                        accepted = NewDataPrincipal >= NewData1;
                    }
                    if(cond1 == '<'){
                        accepted = NewDataPrincipal < NewData1;
                    }
                    if(cond1 == '<='){
                        accepted = NewDataPrincipal <= NewData1;
                    }
                    if(cond2 == '>' && accepted == true){ // É necessario que esteja nas duas condições
                        accepted = NewDataPrincipal > NewData2;
                    }
                    if(cond2 == '>=' && accepted == true){ // É necessario que esteja nas duas condições
                        accepted = NewDataPrincipal >= NewData2;
                    }
                    if(cond2 == '<' && accepted == true){
                        accepted = NewDataPrincipal < NewData2;
                    }
                    if(cond2 == '<=' && accepted == true){
                        accepted = NewDataPrincipal <= NewData2;
                    }
                    if(accepted == true){
                        return dado[coluna];
                    }
                });
                if(str.indexOf(">") == -1 && str.indexOf("<") == -1){
                    if($(this).val() != ""){
                        var str = $(this).val().replace(/\s/g,'');
                        str = str.replace(/[=]+/g, '');
                        var filtrados = dataBackup.filter((dado)=>{  
                            debugger
                            var dataPrincipal = dado[coluna].split(" "); // Data que esta sendo comparada
                            if(dataPrincipal[0] == str){
                                return dado[coluna]; 
                            }
                        });
                    };
                }
                if(filtrados.length != 0){
                    filtrados.forEach(i =>{
                        window["filtro_"+coluna].push(i)
                    })
                    window["filtro_"+coluna] =  [ ...new Set( window["filtro_"+coluna] ) ];
                }
                atualizaTabela()
        }
        });
        
    });

     // Função para filtrar dados por valor
     $(function(){
        $("#tabela_criada input.value").keyup(function(e){  
            if(e.which == 8 || e.which == 46){ 
                if($(this).val() == ""){
                    var coluna = this.parentElement.parentElement.getAttribute("name");
                    window["filtro_"+coluna] = [];
                    atualizaTabela()
                }
            } 
            if(e.which == 13){ 
                auxiliar = [];
                var coluna = this.parentElement.parentElement.getAttribute("name");
                window["filtro_"+coluna] = [];
                var str = $(this).val().replace(/\s/g,'');  // Edita o valor digitado retirando os espaços
                str = str.replace(/[%]+/g, '');
                str = str.replace(/[°C]+/g, '');
                str = str.replace(/[MHz]+/g, '');
                str = str.replace(/[.]+/g, '');

                if(str.indexOf(":") != -1){
                    if(str.slice(1, 2) == "="){

                        str = [str.slice(0, 2), str.slice(2)].join(' ');
                        str = [str.slice(0, 11), str.slice(11)].join(' ');
                        if(str.slice(13, 14) == "="){
                            str = [str.slice(0, 14), str.slice(14)].join(' ');
                        }
                        else{
                            str = [str.slice(0, 13), str.slice(13)].join(' ');
                        }
                    }else{
                        str = [str.slice(0, 1), str.slice(1)].join(' ');
                        str = [str.slice(0, 10), str.slice(10)].join(' ');

                        if(str.slice(12, 13) == "="){
                            str = [str.slice(0, 13), str.slice(13)].join(' ');
                        }
                        else{
                            str = [str.slice(0, 12), str.slice(12)].join(' ');
                        }
                    }
                    var str = str.split(" "); //Recebe valores digitados
                    var cond1 = str[0]; // recebe primeira condição
                    var valor1 =  str[1]; // Separa primeira data
                    var cond2 = str[2];
                    var valor2 = str[3];
                }
                else{
                    for(var i=0; i<str.length;i++){

                        if(str[i] == ">" || str[i] == "<" && str[i + 1] != " "){
                            if(str[i+1] == "="){
                                if(str[i + 2] != " "){
                                    str = [str.slice(0, i+2), str.slice(i+2)].join(' ');
                                }
                            }else{
                                str = [str.slice(0, i+1), str.slice(i+1)].join(' ');
                            }
                        }
                        if(str[i+1] == ">" || str[i+1] == "<" && str[i] != " " ){
                            str = [str.slice(0, i+1), str.slice(i+1)].join(' ');
                        }
                        
                    }
                    
                    var str = str.split(" "); //Recebe valores digitados
                    var cond1 = str[0]; // recebe primeira condição
                    var valor1 =  str[1]; // Separa primeira data
                    valor1 = parseInt(valor1);
                    var cond2 = str[2];
                    var valor2 = str[3];
                    valor2 = parseInt(valor2);


                }
                var filtrados = dataBackup.filter((dado)=>{  
                    
                    var accepted = true;
                    var valorPrincipal = dado[coluna]; // Data que esta sendo comparada
                    if(valorPrincipal.indexOf("%") != -1 || valorPrincipal.indexOf("°C") != -1 || valorPrincipal.indexOf("MHz") != -1){
                    valorPrincipal = valorPrincipal.replace(/[%]+/g, '');
                    valorPrincipal = valorPrincipal.replace(/[.]+/g, '');
                    valorPrincipal = valorPrincipal.replace(/[°C]+/g, '');
                    valorPrincipal = valorPrincipal.replace(/[MHz]+/g, '');
                    valorPrincipal = parseInt(valorPrincipal);
                    }
                    
                    if(cond1 == '>'){
                        accepted = valorPrincipal > valor1;
                    }
                    if(cond1 == '>='){
                        accepted = valorPrincipal >= valor1;
                    }
                    if(cond1 == '<'){
                        accepted = valorPrincipal < valor1;
                    }
                    if(cond1 == '<='){
                        accepted = valorPrincipal <= valor1;
                    }
                    if(cond2 == '>' && accepted == true){ // É necessario que esteja nas duas condições
                        accepted = valorPrincipal > valor2;
                    }
                    if(cond2 == '>=' && accepted == true){ // É necessario que esteja nas duas condições
                        accepted = valorPrincipal >= valor2;
                    }
                    if(cond2 == '<' && accepted == true){
                        accepted = valorPrincipal < valor2;
                    }
                    if(cond2 == '<=' && accepted == true){
                        accepted = valorPrincipal <= valor2;
                    }
                    if(accepted == true){
                        return dado[coluna];
                    }
                });
                if(str.indexOf(">") == -1 && str.indexOf("<") == -1){
                    if($(this).val() != ""){
                        var str = $(this).val().replace(/\s/g,'');
                        str = str.replace(/[=]+/g, '');
                        var filtrados = dataBackup.filter((dado)=>{  
                            var valorPrincipal = dado[coluna]; // Data que esta sendo comparada
                            if(valorPrincipal.indexOf("%") != -1 || valorPrincipal.indexOf("°C") != -1 || valorPrincipal.indexOf("MHz") != -1){
                            valorPrincipal = valorPrincipal.replace(/[%]+/g, '');
                            valorPrincipal = valorPrincipal.replace(/[.]+/g, '');
                            valorPrincipal = valorPrincipal.replace(/[°C]+/g, '');
                            valorPrincipal = valorPrincipal.replace(/[MHz]+/g, '');
                            valorPrincipal = parseInt(valorPrincipal);
                            }
                            debugger
                            if(valorPrincipal == str){
                                return dado[coluna]; 
                            }
                        });
                    };
                }
                if(filtrados.length != 0){
                    filtrados.forEach(i =>{
                        window["filtro_"+coluna].push(i)
                    })
                    window["filtro_"+coluna] =  [ ...new Set( window["filtro_"+coluna] ) ];
                }
                atualizaTabela()
        }
        });
        
    });

    // Função para ocultar colunas selecionadas
    function ocultaColunas(){

        for(var i = 0; i < allCheckboxColumns.length; i++){
            var column = allCheckboxColumns[i].firstChild.getAttribute("name");
            if(allCheckboxColumns[i].firstChild.checked == true){
                document.querySelector("thead #header_"+column).classList.add("d-none");
                document.querySelectorAll("tbody td[name ="+column+"]").forEach(i =>{
                    i.classList.add("d-none");
                })
                document.querySelector("#clear_checkbox").checked = false;
            }
            else{
                if(document.querySelector("thead #header_"+column).classList.contains("d-none")){
                    document.querySelector("thead #header_"+column).classList.remove("d-none");
                    document.querySelectorAll("tbody td[name ="+column+"]").forEach(i =>{
                        i.classList.remove("d-none");
                    })
                }
            }
        }
    }

    //Função para limpar checkBox que ocultam colunas
    function limpaCheckBoxOcultaColunas(){
        for(var i = 0; i < allCheckboxColumns.length; i++){
            if(allCheckboxColumns[i].firstChild.checked == true){
                allCheckboxColumns[i].firstChild.checked = false
            }
        }
        ocultaColunas()
    }

    //Função para popular com nomes corretos nos checkBox da coluna status isca
    $(function(){
        var popup = $("#popup_statusIsca .ui.checkbox");
        table = document.getElementById("tabela_criada");
        var filtrados = [];
        rows = table.rows;
          for (i = 1; i < (rows.length - 1); i++) {
            x = rows[i].getElementsByTagName("TD")[0];
            filtrados = filtrados.concat(x.lastChild.lastChild.innerHTML)
            filtrados = [ ...new Set( filtrados ) ];
          }
          for (i = 0; i < popup.length; i++) {
            var sub = filtrados[i];
            popup[i].lastChild.innerHTML = sub;
          }
    })

    //Função para popular com nomes corretos nos checkBox da coluna status viagem
    $(function(){
        var popup = $("#popup_statusViagem .ui.checkbox");
        table = document.getElementById("tabela_criada");
        var filtrados = [];
        var indice;
        rows = table.rows;
        for(var i = 0; i < allHeaders.length; i++){
            var varname = allHeaders[i].getAttribute("name");
            if(varname == "statusViagem"){
                indice = i;
                break
            }
        }
          for (i = 1; i < (rows.length - 1); i++) {
            x = rows[i].getElementsByTagName("TD")[indice];
            filtrados = filtrados.concat(x.lastChild.innerHTML)
            filtrados = [ ...new Set( filtrados ) ];
          }
          for (i = 0; i < popup.length; i++) {
            var sub = filtrados[i];
            popup[i].lastChild.innerHTML = sub;
          }
    })

    function scrollToSection() {
        let section = $("#tabela_criada th");
        for(var i =0; i< section.length; i++){
            if(section[i].classList.contains("d-none") != true){
                section = section[i];
                break;
            }
        }
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            });
      }

    //  let widthPopup = document.querySelector(".panel-container").offsetWidth;
    //  $("#popup_acoes").css("min-width", widthPopup - 37)