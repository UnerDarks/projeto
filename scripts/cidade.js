var diasDaSemana = {
  0: "Domingo",
  1: "Segunda-Feira",
  2: "Terça-Feira",
  3: "Quarta-Feira",
  4: "Quinta-Feira",
  5: "Sexta-Feira",
  6: "Sábado"
};



//ANIMAÇÃO
function toggleDiv(id) {
  var minhaDiv = document.getElementById(id);

  if (minhaDiv.classList.contains("mostrar")) {
    minhaDiv.classList.remove("mostrar");
    minhaDiv.style.display = "none";
  } else {
    minhaDiv.classList.add("mostrar");
    minhaDiv.style.display = "block";
    minhaDiv.scrollIntoView({ behavior: 'smooth' });
  }
}

document.getElementById("botao1").addEventListener("click", function () {
  toggleDiv("minhaDiv1");
});

document.getElementById("botao2").addEventListener("click", function () {
  toggleDiv("minhaDiv2");
});
document.getElementById("botao3").addEventListener("click", function () {
  toggleDiv("minhaDiv3");
});

document.getElementById("botao4").addEventListener("click", function () {
  toggleDiv("minhaDiv4");
});
document.getElementById("botao5").addEventListener("click", function () {
  toggleDiv("minhaDiv5");
});

document.getElementById("botao6").addEventListener("click", function () {
  toggleDiv("minhaDiv6");
});
document.getElementById("botao7").addEventListener("click", function () {
  toggleDiv("minhaDiv7");
});

document.getElementById("botao8").addEventListener("click", function () {
  toggleDiv("minhaDiv8");
});
document.getElementById("botao9").addEventListener("click", function () {
  toggleDiv("minhaDiv9");
});

document.getElementById("botao10").addEventListener("click", function () {
  toggleDiv("minhaDiv10");
});
document.getElementById("botao11").addEventListener("click", function () {
  toggleDiv("minhaDiv11");
});

document.getElementById("botao12").addEventListener("click", function () {
  toggleDiv("minhaDiv12");
});


//DIA 

var data = new Date();
var dia = data.getDate();
var mes = data.getMonth() + 1;
var ano = data.getFullYear();

function diaCompleto() {
  if (dia < 10) {
    return "0"
  }
}

function mesCompleto() {
  if (mes < 10) {
    return "0"
  }
}

var dataAtual = document.getElementById("dataAtual");
dataAtual.innerHTML = "Data atual: " + diaCompleto() + dia + "/" + mesCompleto() + mes + "/" + ano + " - " + diasDaSemana[data.getDay()];

//Mudar o horario de acordo com os dias da semana 

function Horarios() {
  var data = new Date();
  var diaDaSemana = data.getDay();

  // Objeto que contém as informações dos horários para cada dia da semana e para cada div
  var horariosObj = {
    "horariosDiv1": {
      //DOMINGO
      "0": "<li>5:50</li><li>08:10</li><li>10:30</li><li>12:20</li><li>14:30</li><li>16:30</li><li>18:30</li>",
      //SABADO saindo lagoinha de fora
      "6": "<li>05:50</li><li>08:10</li><li>10:30</li><li>12:20</li><li>14:30</li><li>16:30</li><li>18:30</li><li>21:40</li>",

      /*SABADO saindo santos dumont
      "6": "<li>06:50</li><li>09:30</li><li>11:20</li><li>13:30</li><li>15:30</li><li>17:30</li><li>22:15</li>"*/

      //DIAS UTEIS saindo lagoinha de fora
      "default": "<li>5:50</li><li>08:10</li><li>10:30</li><li>12:20</li><li>14:30</li><li>16:30</li><li>18:30</li>"

      /*DIAS UTEIS saindo santos dumont
      "default": "<li>6:50</li><li>08:00</li><li>8:50</li><li>10:50</li><li>12:50</li><li>14:50</li><li>16:50</li><li>17:50</li><li>18:50</li><li>19:30</li><li>22:30</li>"*/

    },
    "horariosDiv2": {
      //DOMINGO saindo de aeronautas
      "0": "<li>5:10</li><li>06:00</li><li>07:00</li><li>09:30</li><li>11:30</li><li>13:30</li><li>15:30</li><li>17:30</li><li>19:30</li><li>21:30</li>",

      /*DOMINGO saindo de lapinha
      "0": "<li>3:50</li><li>05:00</li><li>06:00</li><li>08:30</li><li>10:30</li><li>12:30</li><li>14:30</li><li>16:30</li><li>18:30</li><li>20:20</li><li>22:30</li>"*/

      //SABADO saindo aeronautas
      "6": "<li>05:10</li><li>06:00</li><li>07:20</li><li>9:50</li><li>11:50</li><li>13:30</li><li>15:50</li><li>17:50</li><li>19:50</li><li>21:30</li>",

      /*SABADO saindo da lapinha
      "6": "<li>3:50</li><li>05:00</li><li>06:00</li><li>07:00</li><li>08:30</li><li>10:50</li><li>12:30</li><li>14:30</li><li>16:30</li><li>18:30</li><li>20:30</li>"*/

      //DIAS UTEIS saindo do aeronautas
      "default": "<li>05:10</li><li>07:10</li><li>08:55</li><li>10:30</li><li>12:30</li><li>14:30</li><li>15:30</li><li>16:20</li><li>17:15</li><li>18:00</li><li>19:30"
      
      /*DIAS UTEIS saindo da lapinha
      "default": "<li>03:40</li><li>04:50</li><li>06:40</li><li>07:30</li><li>08:10</li><li>09:50</li><li>11:30</li><li>13:30</li><li>15:30</li><li>16:30</li><li>17:45"*/

    },
    "horariosDiv3": {
      //DOMINGO saindo da lapinha
      "0": "<li>7:00</li><li>09:30</li><li>11:30</li><li>13:30</li><li>15:30</li><li>17:30</li><li>19:30</li><li>21:30</li>",

      /*DOMINGO saindo do reanto da lagoa
      "0": "<li>06:10</li><li>08:30</li><li>10:30</li><li>12:30</li><li>14:30</li><li>16:30</li><li>18:30</li><li>20:30</li>*/
      
      //SABADO
      "6": "<li>07:30</li><li>09:30</li><li>11:10</li><li>13:45</li><li>15:40</li><li>17:40</li><li>19:40</li><li>21:30</li>",

      /*sabado saindo de lapinha
      "0": "<li>06:30</li><li>08:30</li><li>10:10</li><li>12:45</li><li>14:45</li><li>16:45</li><li>18:45</li><li>20:45</li>"*/

      //DIAS UTEIS saindo da lapinha
      "default": "<li>05:20</li><li>07:00</li><li>09:00</li><li>11:00</li><li>13:00</li><li>15:10</li><li>17:00</li><li>18:40</li><li>19:15</li><li>20:00</li><li>21:30</li>"


       /*Dias uteis saindo do recanto da lagoa
      "0": "<li>3:50</li><li>06:10</li><li>08:00</li><li>10:00</li><li>12:00</li><li>14:10</li><li>16:00</li><li>18:20</li><li>20:30</li>"*/

    },


    "horariosDiv4": {
      //DOMINGO saindo da lapinha
      "0": "<li>23:35</li>",

      /*DOMINGO saindo de vista alegre
      "0": "<li>00:15</li>"*/

      //SABADO saindo da lapinha
      "6": "<li>23:35</li>",

      /*DOMINGO saindo do vista alegre
      "0": "<li>00:15</li>"*/
      
      //DIAS ULTEIS lapinha
      "default": "<li>23:35</li>"

      /*DOMINGO saindo de vista alegre
      "0": "<li>00:15</li>"*/

    },
    "horariosDiv5": {
      //DOMINGO saindo campinho
      "0": "<li>4:50</li><li>06:30</li><li>09:00</li><li>12:20</li><li>15:50</li><li>18:20</li><li>20:20</li>",

      /*Domingo saindo francisco pereira
      "default": "<li>04:10</li><li>05:50</li><li>07:30</li><li>11:00</li><li>13:10</li><li>17:10</li><li>19:20</li><li>22:40</li>"*/

      //SABADO saindo campinho
      "6": "<li>04:50</li><li>06:45</li><li>09:00</li><li>11:00</li><li>13:00</li><li>15:00</li><li>17:00</li><li>19:00</li><li>21:00</li><li>22:30</li>",

      /*sabado saindo francisco pereira
      "default": "<li>04:10</li><li>05:40</li><li>07:45</li><li>10:00</li><li>12:00</li><li>14:00</li><li>16:10</li><li>18:00</li><li>20:00</li><li>22:45</li>"*/

      //DIAS ULTEIS saindo campinho
      "default": "<li>04:40</li><li>06:00</li><li>07:10</li><li>08:50</li><li>10:30</li><li>11:00</li><li>12:30</li><li>13:00</li><li>14:30</li><li>16:15</li><li>18:30</li><li>20:30</li>"

      /*DIAS ULTEIS saindo francisco prereira
      "default": "<li>04:50</li><li>05:40</li><li>06:20</li><li>07:50</li><li>09:30</li><li>11:10</li><li>12:00</li><li>13:15</li><li>15:15</li><li>17:15</li><li>19:15</li><li>22:20</li>"*/

    },
    "horariosDiv6": {

      //DOMINGO aeronautas
      "0": "<li>06:30</li><li>09:00</li><li>12:00</li><li>15:10</li><li>18:10</li><li>21:40</li>",

      /*DOMINGO campinho
      "0": "<li>05:30</li><li>07:50</li><li>11:00</li><li>14:00</li><li>17:00</li><li>20:00</li>",*/


      //SABADO aeronautas
      "6": "<li>06:30</li><li>09:00</li><li>11:00</li><li>13:00</li><li>15:10</li><li>17:00</li><li>19:00</li>",
      
      /*Sabado campinho
      "default": "<li>05:30</li><li>08:00</li><li>10:00</li><li>12:00</li><li>14:00</li><li>16:00</li><li>18:00</li><li>20:00</li>"*/
      
      //DIAS ULTEIS saindo de aeronautas
      "default": "<li>06:30</li><li>08:40</li><li>11:00</li><li>12:45</li><li>14:50</li><li>16:45</li><li>19:00</li><li>23:20</li>"

      /*DIAS ULTEIS campinho
      "default": "<li>05:20</li><li>06:50</li><li>07:40</li><li>09:50</li><li>11:50</li><li>14:00</li><li>15:50</li><li>18:00</li><li>20:00</li><li>22:30</li>"*/

    },
    "horariosDiv7": {

      //DOMINGO saindo palmital
      "0": "<li>07:00</li><li>10:00</li><li>18:00</li>>",
      
      /*DOMINGO saindo rodoviaria
      "0": "<li>6:30</li><li>13:30</li><li>18:00</li><li>19:00</li>",*/


      //SABADO palmital
      "6": "<li>08:00</li><li>10:30</li><li>13:10</li><li>21:00</li><li>22:40</li>",

      /*SABADO rodoviaria
      "6": "<li>07:30</li><li>09:30</li><li>10:00</li><li>14:10</li><li>21:30</li>",*/


      //DIAS ULTEIS saindo palmital ao cemiterio
      "default": "<li>06:30</li><li>8:30</li><li>17:00</li><li>18:50</li><li>20:10</li>"

      /*DIAS ULTEIS saindo rodoviaria ao cemiterio
      "default": "<li>08:50</li><li>10:50</li><li>13:10</li><li>15:00</li><li>18:00</li>"*/


    },
    "horariosDiv8": {
      //DOMINGO Saindo do Palmital ao Cemitério
      "0": "<li>07:50</li><li>09:50</li><li>12:10</li><li>14:00</li><li>16:00</li><li>19:20</li>",

      /*DOMINGO Saindo do Joá ao Cemitério e Moradas da Lapinha
      "0": "<li>07:50</li><li>09:50</li><li>12:10</li><li>14:00</li><li>16:00</li><li>19:20</li>",*/


      //SABADO Saindo do Palmital ao Cemitério
      "6": "<li>07:50</li><li>09:50</li><li>12:10</li><li>16:00</li><li>19:20</li>",

      /*SABADO Saindo do Joá ao Cemitério e Moradas da Lapinha
      "6": "<li>08:50</li><li>10:50</li><li>15:00</li><li>18:00</li>",*/


      //DIAS ULTEIS Saindo do Palmital ao Cemitério
      "default": "<li>05:50</li><li>13:00</li><li>18:00</li>"

      /*DIAS ULTEIS Saindo do Joá ao Cemitério e Moradas da Lapinha
      "default": "<li>05:00</li><li>12:00</li><li>17:00</li>"*/
    },
    "horariosDiv9": {

      //DOMINGO Saindo aeronautas
      "0": "<li>6:40</li><li>08:10</li><li>10:20</li><li>12:20</li><li>14:20</li><li>16:20</li><li>18:20</li><li>20:10</li><li>22:00</li>",

      /*DOMINGO Saindo de Nossa Senhora de Lourdes / Visão
      "0": "<li>5:40</li><li>07:30</li><li>09:20</li><li>11:20</li><li>13:20</li><li>15:20</li><li>17:20</li><li>18:30</li><li>21:15</li><li>22:30</li>",*/

      //SABADO saindo aeronautas
      "6": "<li>06:20</li><li>08:00</li><li>09:40</li><li>11:40</li><li>13:00</li><li>14:50</li><li>16:30</li><li>18:10</li><li>20:50</li>",

      /*SABADO Saindo de Nossa Senhora de Lourdes / Visão
      "6": "<li>05:45</li><li>07:20</li><li>09:00</li><li>11:00</li><li>12:20</li><li>14:10</li><li>15:50</li><li>17:30</li><li>21:30</li><li>22:20</li>",*/

      //DIAS ULTEIS Saindo do Visão
      "default": "<li>05:40</li><li>06:20</li><li>07:10</li><li>08:10</li><li>09:15</li><li>10:35</li><li>12:10</li><li>13:00</li><li>14:40</li><li>16:20</li><li>17:10</li><li>18:30</li><li>19:40</li><li>21:10</li><li>22:30</li>"

      /*DIAS ULTEIS Saindo de Nossa Senhora de Lourdes / Visão
      "default": "<li>05:30</li><li>06:20</li><li>07:15</li><li>08:15</li><li>09:50</li><li>11:25</li><li>12:10</li><li>13:50</li><li>15:30</li><li>16:20</li><li>17:30</li><li>19:10</li><li>20:30</li><li>21:40</li><li>23:10</li>"*/

    },

    "horariosDiv10": {
      //DOMINGO Saindo do Morro Cruzeiro
      "0": "<li>8:00</li><li>17:10</li>",

      /*DOMINGO Saindo do Vila José Fagundes
      "0": "<li>9:00</li><li>18:00</li>",*/

      //SABADO Saindo do Morro Cruzeiro
      "6": "<li>05:40</li><li>07:30</li><li>08:00</li><li>11:30</li><li>17:00</li><li>19:00</li>",

      /*SABADO Saindo do Vila José Fagundes
      "6": "<li>06:30</li><li>08:20</li><li>12:20</li><li>17:50</li><li>19:50</li>",*/

      //DIAS ULTEIS Saindo do Morro Cruzeiro
      "default": "<li>05:50</li><li>07:30</li><li>11:30</li><li>17:00</li><li>19:00</li>"


      /*DIAS ULTEIS Saindo do Vila José Fagundes
      "default": "<li>05:40</li><li>06:40</li><li>08:20</li><li>11:20</li><li>12:20</li><li>16:50</li><li>17:50</li><li>19:50</li>"*/

    },


    "horariosDiv11": {
      //DOMINGO Saindo de Lagoa Santa
      "0": "<li>4:30</li><li>05:30</li><li>06:30</li><li>11:30</li><li>12:35</li><li>13:30</li><li>14:30</li><li>15:30</li><li>16:30</li><li>17:30</li><li>19:45</li><li>21:30</li><li>22:45</li><li>22:35</li>",

      /*DOMINGO Saindo de aeroporto
      "0": "<li>4:55</li><li>06:10</li><li>07:10</li><li>12:10</li><li>13:10</li><li>14:10</li><li>15:10</li><li>16:10</li><li>17:10</li><li>18:10</li><li>20:10</li><li>22:10</li><li>23:15</li>",*/

      //SABADO saindo de lagoa santa
      "6": "<li>04:30</li><li>05:30</li><li>06:30</li><li>11:30</li><li>12:35</li><li>13:30</li><li>14:30</li><li>15:30</li><li>16:30</li><li>17:30</li><li>21:30</li><li>22:45</li><li>23:35</li>",

      /*SABADO saindo de aeroporto
      "6": "<li>00:15</li><li>04:55</li><li>06:10</li><li>07:10</li><li>12:10</li><li>13:10</li><li>14:10</li><li>15:10</li><li>16:10</li><li>17:10</li><li>18:10</li><li>22:10</li><li>23:15</li>",*/

      //DIAS ULTEIS saindo de lagoa santa
      "default": "<li>04:30</li><li>05:30</li><li>06:30</li><li>07:30</li><li>08:35</li><li>10:35</li><li>12:35</li><li>13:30</li><li>14:35</li><li>15:30</li><li>16:25</li><li>17:30</li><li>19:45</li><li>20:40</li><li>21:35</li><li>22:40</li>"


      /*DIAS ULTEIS saindo de aeroporto
      "default": "<li>00:15</li><li>05:00</li><li>06:10</li><li>07:10</li><li>08:10</li><li>10:10</li><li>11:10</li><li>12:10</li><li>13:10</li><li>14:10</li><li>15:10</li><li>16:10</li><li>17:10</li><li>18:10</li><li>20:20</li><li>21:10</li><li>22:10</li><li>23:10</li>"*/

    },
    "horariosDiv12": {
      //DIAS ULTEIS saindo da lapinha
      "default": "<li>05:30</li><li>06:20</li><li>11:40</li><li>15:40</li><li>16:30</li>"
    }
  };

  function imprimirHorario(id) {
    var horarios = document.getElementById(id);
    var horariosParaDia = horariosObj[id][diaDaSemana] || horariosObj[id]["default"];
    horarios.innerHTML = horariosParaDia;
  }

  document.getElementById("botao1").addEventListener("click", function() {
    imprimirHorario("horariosDiv1");
  });

  document.getElementById("botao2").addEventListener("click", function() {
    imprimirHorario("horariosDiv2");
  });
  
  document.getElementById("botao3").addEventListener("click", function() {
    imprimirHorario("horariosDiv3");
  });
  
  document.getElementById("botao4").addEventListener("click", function() {
    imprimirHorario("horariosDiv4");
  });
  
  document.getElementById("botao5").addEventListener("click", function() {
    imprimirHorario("horariosDiv5");
  });

  document.getElementById("botao6").addEventListener("click", function() {
    imprimirHorario("horariosDiv6");
  });
  
  document.getElementById("botao7").addEventListener("click", function() {
    imprimirHorario("horariosDiv7");
  });
  
  document.getElementById("botao8").addEventListener("click", function() {
    imprimirHorario("horariosDiv8");
  });
  
  document.getElementById("botao9").addEventListener("click", function() {
    imprimirHorario("horariosDiv9");
  });
  
  document.getElementById("botao10").addEventListener("click", function() {
    imprimirHorario("horariosDiv10");
  });
  
  document.getElementById("botao11").addEventListener("click", function() {
    imprimirHorario("horariosDiv11");
  });
  
  document.getElementById("botao12").addEventListener("click", function() {
    imprimirHorario("horariosDiv12");
  });
}

Horarios(); 
