function Horarios() {
  var data = new Date();
  var diaDaSemana = data.getDay();

  // Objeto que contém as informações dos horários para cada dia da semana e para cada div
  var horariosObj = {
    "lagoinhaDeFora": {
      //DOMINGO saindo de lagoinha de fora
      "0": "<li>05:50</li><li>08:10</li><li>10:30</li><li>12:20</li><li>14:30</li><li>16:30</li><li>18:30</li>",

      //SABADO saindo lagoinha de fora
      "6": "<li>05:50</li><li>08:10</li><li>10:30</li><li>12:20</li><li>14:30</li><li>16:30</li><li>18:30</li><li>21:40</li>",

      //DIAS UTEIS saindo lagoinha de fora
      "default": "<li>06:50</li><li>08:50</li><li>10:50</li><li>12:50</li><li>14:50</li><li>16:50</li><li>18:50</li><li>19:30</li><li>22:30</li>"
    },

    "santosDumont": {
      // domingo do santos dumont
      "0": "<li>06:50</li><li>09:30</li><li>11:20</li><li>13:30</li><li>15:30</li><li>17:30</li>",

      //Sabado saindo santos dumont
      "6": "<li>06:50</li><li>09:30</li><li>11:20</li><li>13:30</li><li>15:30</li><li>17:30</li><li>22:15</li>",

      //DIAS UTEIS saindo santos dumont
      "default": "<li>6:50</li><li>08:00</li><li>8:50</li><li>10:50</li><li>12:50</li><li>14:50</li><li>16:50</li><li>17:50</li><li>18:50</li><li>19:30</li><li>22:30</li>"

    },

    "aeronautas": {
      //DOMINGO saindo de aeronautas
      "0": "<li>5:10</li><li>06:00</li><li>07:00</li><li>09:30</li><li>11:30</li><li>13:30</li><li>15:30</li><li>17:30</li><li>19:30</li><li>21:30</li>",

      //SABADO saindo aeronautas
      "6": "<li>05:10</li><li>06:00</li><li>07:20</li><li>9:50</li><li>11:50</li><li>13:30</li><li>15:50</li><li>17:50</li><li>19:50</li><li>21:30</li>",

      //DIAS UTEIS saindo do aeronautas
      "default": "<li>05:10</li><li>07:10</li><li>08:55</li><li>10:30</li><li>12:30</li><li>14:30</li><li>15:30</li><li>16:20</li><li>17:15</li><li>18:00</li><li>19:30</li>"
    },

    "lapinha": {
      //DOMINGO saindo de lapinha => aeronautas
      "0": "<li>3:50</li><li>05:00</li><li>06:00</li><li>08:30</li><li>10:30</li><li>12:30</li><li>14:30</li><li>16:30</li><li>18:30</li><li>20:20</li><li>22:30</li>",

      //SABADO SAINDO DE LAPINHA => aeronautas
      "6": "<li>3:50</li><li>05:00</li><li>06:00</li><li>07:00</li><li>08:30</li><li>10:50</li><li>12:30</li><li>14:30</li><li>16:30</li><li>18:30</li><li>20:30</li>",


      //DIAS UTEIS saindo da lapinha => aeronautas
      "default": "<li>03:40</li><li>04:50</li><li>06:40</li><li>07:30</li><li>08:10</li><li>09:50</li><li>11:30</li><li>13:30</li><li>15:30</li><li>16:30</li><li>17:45</li>"
    },

    "lapinha/lagos": {
      //DOMINGO saindo da lapinha => recanto dos lagos
      "0": "<li>7:00</li><li>09:30</li><li>11:30</li><li>13:30</li><li>15:30</li><li>17:30</li><li>19:30</li><li>21:30</li>",

      //SABADO saindo da lapinha => recanto dos lagos
      "6": "<li>07:30</li><li>09:30</li><li>11:10</li><li>13:45</li><li>15:40</li><li>17:40</li><li>19:40</li><li>21:30</li>",

      //DIAS UTEIS saindo da lapinha => recanto dos lagos
      "default": "<li>05:20</li><li>07:00</li><li>09:00</li><li>11:00</li><li>13:00</li><li>15:10</li><li>17:00</li><li>18:40</li><li>19:15</li><li>20:00</li><li>21:30</li>"


    },

    "recantoDaLagoa": {
      //DOMINGO saindo do reanto da lagoa
      "0": "<li>06:10</li><li>08:30</li><li>10:30</li><li>12:30</li><li>14:30</li><li>16:30</li><li>18:30</li><li>20:30</li>",

      //sabado saindo do reanto da lagoa
      "6": "<li>06:30</li><li>08:30</li><li>10:10</li><li>12:45</li><li>14:45</li><li>16:45</li><li>18:45</li><li>20:45</li>",

      //Dias uteis saindo do recanto da lagoa
      "default": "<li>3:50</li><li>06:10</li><li>08:00</li><li>10:00</li><li>12:00</li><li>14:10</li><li>16:00</li><li>18:20</li><li>20:30</li>"
    },


    "lapinha/vista": {
      //DOMINGO saindo da lapinha => vista alegre
      "0": "<li>23:35</li>",

      //SABADO saindo da lapinha => vista alegre
      "6": "<li>23:35</li>",

      //DIAS ULTEIS lapinha => vista alegre
      "default": "<li>23:35</li>"

    },

    "vistaAlegre": {
      //DOMINGO saindo de vista alegre
      "0": "<li>00:15</li>",
      //DOMINGO saindo de vista alegre
      "6": "<li>00:15</li>",
      //DOMINGO saindo de vista alegre
      "default": "<li>00:15</li>"


    },

    "campinho": {
      //DOMINGO saindo campinho
      "0": "<li>4:50</li><li>06:30</li><li>09:00</li><li>12:20</li><li>15:50</li><li>18:20</li><li>20:20</li>",


      //SABADO saindo campinho
      "6": "<li>04:50</li><li>06:45</li><li>09:00</li><li>11:00</li><li>13:00</li><li>15:00</li><li>17:00</li><li>19:00</li><li>21:00</li><li>22:30</li>",



      //DIAS ULTEIS saindo campinho
      "default": "<li>04:40</li><li>06:00</li><li>07:10</li><li>08:50</li><li>10:30</li><li>11:00</li><li>12:30</li><li>13:00</li><li>14:30</li><li>16:15</li><li>18:30</li><li>20:30</li>"

    },

    "franciscoPereira": {
      //Domingo saindo francisco pereira
      "0": "<li>04:10</li><li>05:50</li><li>07:30</li><li>11:00</li><li>13:10</li><li>17:10</li><li>19:20</li><li>22:40</li>",

      //sabado saindo francisco pereira
      "6": "<li>04:10</li><li>05:40</li><li>07:45</li><li>10:00</li><li>12:00</li><li>14:00</li><li>16:10</li><li>18:00</li><li>20:00</li><li>22:45</li>",


      //DIAS ULTEIS saindo francisco prereira
      "default": "<li>04:10</li><li>04:50</li><li>05:40</li><li>06:20</li><li>07:50</li><li>09:30</li><li>11:10</li><li>12:00</li><li>13:15</li><li>15:15</li><li>17:15</li><li>19:15</li><li>22:20</li>"
    },

    "aeronautas/campinho": {

      //DOMINGO aeronautas => campinho
      "0": "<li>06:30</li><li>09:00</li><li>12:00</li><li>15:10</li><li>18:10</li><li>21:40</li>",

      //SABADO aeronautas
      "6": "<li>06:30</li><li>09:00</li><li>11:00</li><li>13:00</li><li>15:10</li><li>17:00</li><li>19:00</li>",


      //DIAS ULTEIS saindo de aeronautas
      "default": "<li>06:30</li><li>08:40</li><li>11:00</li><li>12:45</li><li>14:50</li><li>16:35</li<li>16:45</li><li>19:00</li><li>23:20</li>"


    },

    "campinho/aeronautas": {
      //DOMINGO campinho
      "0": "<li>05:30</li><li>07:50</li><li>11:00</li><li>14:00</li><li>17:00</li><li>20:00</li>",

      //Sabado campinho
      "6": "<li>05:30</li><li>08:00</li><li>10:00</li><li>12:00</li><li>14:00</li><li>16:00</li><li>18:00</li><li>20:00</li>",

      //DIAS ULTEIS campinho
      "default": "<li>05:20</li><li>05:50</li>li>06:50</li><li>07:40</li><li>09:50</li><li>11:50</li><li>14:00</li><li>15:50</li><li>18:00</li><li>20:00</li><li>22:30</li>"


    },

    "palmital": {

      //DOMINGO saindo palmital
      "0": "<li>07:00</li><li>10:00</li><li>18:00</li>>",

      //SABADO palmital
      "6": "<li>08:00</li><li>10:30</li><li>13:10</li><li>21:00</li><li>22:40</li>",

      //DIAS ULTEIS saindo palmital ao cemiterio
      "default": "<li>06:30</li><li>8:30</li><li>17:00</li><li>18:50</li><li>20:10</li>"

    },

    "rodoviaria": {

      //DOMINGO saindo rodoviaria
      "0": "<li>6:30</li><li>13:30</li><li>18:00</li><li>19:00</li>",

      //SABADO rodoviaria
      "6": "<li>07:30</li><li>09:30</li><li>10:00</li><li>14:10</li><li>21:30</li>",

      //DIAS ULTEIS saindo rodoviaria ao cemiterio
      "default": "<li>08:50</li><li>10:50</li><li>13:10</li><li>15:00</li><li>18:00</li>"
    },

    "palmital/cemiterio": {
      //DOMINGO Saindo do Palmital ao Cemitério
      "0": "<li>07:50</li><li>09:50</li><li>12:10</li><li>14:00</li><li>16:00</li><li>19:20</li>",

      //SABADO Saindo do Palmital ao Cemitério
      "6": "<li>07:50</li><li>09:50</li><li>12:10</li><li>16:00</li><li>19:20</li>",


      //DIAS ULTEIS Saindo do Palmital ao Cemitério
      "default": "<li>05:50</li><li>13:00</li><li>18:00</li>"

    },

    "joa/cemiterio/moradasDaLapinha": {
      //DOMINGO Saindo do Joá ao Cemitério e Moradas da Lapinha
      "0": "<li>07:50</li><li>09:50</li><li>12:10</li><li>14:00</li><li>16:00</li><li>19:20</li>",

      //SABADO Saindo do Joá ao Cemitério e Moradas da Lapinha
      "6": "<li>08:50</li><li>10:50</li><li>15:00</li><li>18:00</li>",

      //DIAS ULTEIS Saindo do Joá ao Cemitério e Moradas da Lapinha
      "default": "<li>05:00</li><li>12:00</li><li>17:00</li>"
    },

    "aeronautas/nossaSenhoraDeLourdes": {

      //DOMINGO Saindo aeronautas
      "0": "<li>6:40</li><li>08:10</li><li>10:20</li><li>12:20</li><li>14:20</li><li>16:20</li><li>18:20</li><li>20:10</li><li>22:00</li>",


      //SABADO saindo aeronautas
      "6": "<li>06:20</li><li>08:00</li><li>09:40</li><li>11:40</li><li>13:00</li><li>14:50</li><li>16:30</li><li>18:10</li><li>20:50</li>",



      //DIAS ULTEIS Saindo do Visão
      "default": "<li>05:40</li><li>06:20</li><li>07:10</li><li>08:10</li><li>09:15</li><li>10:35</li><li>12:10</li><li>13:00</li><li>14:40</li><li>16:20</li><li>17:10</li><li>18:30</li><li>19:40</li><li>21:10</li><li>22:30</li>"


    },

    "nossaSenhoraDeLourdes/Visao": {
      //DOMINGO Saindo de Nossa Senhora de Lourdes / Visão
      "0": "<li>5:40</li><li>07:30</li><li>09:20</li><li>11:20</li><li>13:20</li><li>15:20</li><li>17:20</li><li>18:30</li><li>21:15</li><li>22:30</li>",

      //SABADO Saindo de Nossa Senhora de Lourdes / Visão
      "6": "<li>05:45</li><li>07:20</li><li>09:00</li><li>11:00</li><li>12:20</li><li>14:10</li><li>15:50</li><li>17:30</li><li>21:30</li><li>22:20</li>",


      //DIAS ULTEIS Saindo de Nossa Senhora de Lourdes / Visão
      "default": "<li>05:30</li><li>06:20</li><li>07:15</li><li>08:15</li><li>09:50</li><li>11:25</li><li>12:10</li><li>13:50</li><li>15:30</li><li>16:20</li><li>17:30</li><li>19:10</li><li>20:30</li><li>21:40</li><li>23:10</li>"
    },

    "morroDoCruzeiro": {
      //DOMINGO Saindo do Morro Cruzeiro
      "0": "<li>8:00</li><li>17:10</li>",


      //SABADO Saindo do Morro Cruzeiro
      "6": "<li>05:40</li><li>07:30</li><li>08:00</li><li>11:30</li><li>17:00</li><li>19:00</li>",


      //DIAS ULTEIS Saindo do Morro Cruzeiro
      "default": "<li>05:50</li><li>07:30</li><li>11:30</li><li>17:00</li><li>19:00</li>"



    },

    "vilaJoseFagundes": {
      //DOMINGO Saindo do Vila José Fagundes
      "0": "<li>9:00</li><li>18:00</li>",

      //SABADO Saindo do Vila José Fagundes
      "6": "<li>06:30</li><li>08:20</li><li>12:20</li><li>17:50</li><li>19:50</li>",

      //DIAS ULTEIS Saindo do Vila José Fagundes
      "default": "<li>05:40</li><li>06:40</li><li>08:20</li><li>11:20</li><li>12:20</li><li>16:50</li><li>17:50</li><li>19:50</li>"



    },

    "lagoaSanta": {
      //DOMINGO Saindo de Lagoa Santa
      "0": "<li>4:30</li><li>05:30</li><li>06:30</li><li>11:30</li><li>12:35</li><li>13:30</li><li>14:30</li><li>15:30</li><li>16:30</li><li>17:30</li><li>19:45</li><li>21:30</li><li>22:45</li><li>22:35</li>",


      //SABADO saindo de lagoa santa
      "6": "<li>04:30</li><li>05:30</li><li>06:30</li><li>11:30</li><li>12:35</li><li>13:30</li><li>14:30</li><li>15:30</li><li>16:30</li><li>17:30</li><li>21:30</li><li>22:45</li><li>23:35</li>",


      //DIAS ULTEIS saindo de lagoa santa
      "default": "<li>04:30</li><li>05:30</li><li>06:30</li><li>07:30</li><li>08:35</li><li>10:35</li><li>12:35</li><li>13:30</li><li>14:35</li><li>15:30</li><li>16:25</li><li>17:30</li><li>19:45</li><li>20:40</li><li>21:35</li><li>22:40</li>"



    },

    "aeroporto/lagoaSanta": {
      //DOMINGO Saindo de aeroporto
      "0": "<li>4:55</li><li>06:10</li><li>07:10</li><li>12:10</li><li>13:10</li><li>14:10</li><li>15:10</li><li>16:10</li><li>17:10</li><li>18:10</li><li>20:10</li><li>22:10</li><li>23:15</li>",

      //SABADO saindo de aeroporto
      "6": "<li>00:15</li><li>04:55</li><li>06:10</li><li>07:10</li><li>12:10</li><li>13:10</li><li>14:10</li><li>15:10</li><li>16:10</li><li>17:10</li><li>18:10</li><li>22:10</li><li>23:15</li>",

      //DIAS ULTEIS saindo de aeroporto
      "default": "<li>00:15</li><li>05:00</li><li>06:10</li><li>07:10</li><li>08:10</li><li>10:10</li><li>11:10</li><li>12:10</li><li>13:10</li><li>14:10</li><li>15:10</li><li>16:10</li><li>17:10</li><li>18:10</li><li>20:20</li><li>21:10</li><li>22:10</li><li>23:10</li>"


    },

    "lapinha/distritoIndustrial": {
      //DIAS ULTEIS saindo da lapinha
      "default": "<li>05:30</li><li>06:20</li><li>11:40</li><li>15:40</li><li>16:30</li>"
    }
  };

  function imprimirHorario(id) {
    var horarios = document.getElementById(id);
    var horariosParaDia = horariosObj[id][diaDaSemana] || horariosObj[id]["default"];
    horarios.innerHTML = horariosParaDia;

  }

  document.getElementById("botao1").addEventListener("click", function () {
    imprimirHorario("lagoinhaDeFora");
  });

  document.getElementById("mostrarDiv").addEventListener("click", function () {
    imprimirHorario("santosDumont");
  });

  document.getElementById("botao3").addEventListener("click", function () {
    imprimirHorario("lapinha/lagos");
  });

  document.getElementById("botao4").addEventListener("click", function () {
    imprimirHorario("lapinha/vista");
  });

  document.getElementById("botao5").addEventListener("click", function () {
    imprimirHorario("campinho");
  });

  document.getElementById("botao6").addEventListener("click", function () {
    imprimirHorario("aeronautas/campinho");
  });

  document.getElementById("botao7").addEventListener("click", function () {
    imprimirHorario("palmital");
  });

  document.getElementById("botao8").addEventListener("click", function () {
    imprimirHorario("palmital/cemiterio");
  });

  document.getElementById("botao9").addEventListener("click", function () {
    imprimirHorario("aeronautas/nossaSenhoraDeLourdes");
  });

  document.getElementById("botao10").addEventListener("click", function () {
    imprimirHorario("morroDoCruzeiro");
  });

  document.getElementById("botao11").addEventListener("click", function () {
    imprimirHorario("lagoaSanta");
  });

  document.getElementById("botao12").addEventListener("click", function () {
    imprimirHorario("lapinha/distritoIndustrial");
  });
}


Horarios();

[
  {

    "nomeDaLinha": " lagoinha  DeFora/Santo Dumont 3001",
    "partidaSantosDMont": {
      "horarioDomingo": ["05:00", "08:10", "10:30", "12:20", "14:30", "16:30", "18:30"],
      "horarioSabado": ["5:50", "08:10", "10:30", "12:20", "14:30", "16:30", "18:30", "21:40"],
      "horarioDiaUtil": ["05:50", "07:10", "07:50", "09:50", "09:50", "11:50", "13:50", "15:50", "17:50", "18:50", "21:50"]
    },
    "partidaSantosDMont": {
      "horarioDomingo": ["05:00", "08:10", "10:30", "12:20", "14:30", "16:30", "18:30"],
      "horarioSabado": ["5:50", "08:10", "10:30", "12:20", "14:30", "16:30", "18:30", "21:40"],
      "horarioDiaUtil": ["05:50", "07:10", "07:50", "09:50", "09:50", "11:50", "13:50", "15:50", "17:50", "18:50", "21:50"]
    }
  },
  {

    "nomeDaLinha": " lagoinha  DeFora/Santo Dumont 3001",
    "partidaSantosDMont": {
      "horarioDomingo": ["05:00", "08:10", "10:30", "12:20", "14:30", "16:30", "18:30"],
      "horarioSabado": ["5:50", "08:10", "10:30", "12:20", "14:30", "16:30", "18:30", "21:40"],
      "horarioDiaUtil": ["05:50", "07:10", "07:50", "09:50", "09:50", "11:50", "13:50", "15:50", "17:50", "18:50", "21:50"]
    },
    "partidaSantosDMont": {
      "horarioDomingo": ["05:00", "08:10", "10:30", "12:20", "14:30", "16:30", "18:30"],
      "horarioSabado": ["5:50", "08:10", "10:30", "12:20", "14:30", "16:30", "18:30", "21:40"],
      "horarioDiaUtil": ["05:50", "07:10", "07:50", "09:50", "09:50", "11:50", "13:50", "15:50", "17:50", "18:50", "21:50"]
    }
  },
  


]