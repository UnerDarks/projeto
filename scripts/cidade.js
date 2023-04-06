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
      //SABADO
      "6": "<li>10:30</li><li>13:00</li><li>15:00</li><li>17:00</li>",
      //DIAS ULTEIS
      "default": "<li>05:30</li><li>07:10</li><li>07:50</li><li>09:50</li><li>11:50</li><li>13:50</li><li>15:50</li><li>17:50</li><li>18:50</li><li>21:30</li>"
    },
    "horariosDiv2": {
      //DOMINGO
      "0": "<li>6:00</li><li>09:00</li><li>12:00</li>",
      //SABADO
      "6": "<li>11:00</li><li>14:00</li><li>17:00</li>",
      //DIAS ULTEIS
      "default": "<li>06:00</li><li>07:30</li><li>09:00</li><li>10:30</li><li>12:00</li><li>13:30</li><li>15:00</li><li>16:30</li><li>18:00</li><li>19:30</li><li>21:00</li>"
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
}

Horarios(); 
