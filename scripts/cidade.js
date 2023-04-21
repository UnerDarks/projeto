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
  var divHidden = document.getElementById(id);
  if (divHidden.classList.contains("mostrar")) {
    divHidden.classList.remove("mostrar");
    divHidden.style.display = "none";
  } else {
    divHidden.classList.add("mostrar");
    divHidden.style.display = "block";
    divHidden.scrollIntoView({ behavior: 'smooth' });
  }
}

document.getElementById("botao1").addEventListener("click", function () {
  toggleDiv("divHidden1");
});

document.getElementById("botao2").addEventListener("click", function () {
  toggleDiv("divHidden2");
});
document.getElementById("botao3").addEventListener("click", function () {
  toggleDiv("divHidden3");
});

document.getElementById("botao4").addEventListener("click", function () {
  toggleDiv("divHidden4");
});
document.getElementById("botao5").addEventListener("click", function () {
  toggleDiv("divHidden5");
});

document.getElementById("botao6").addEventListener("click", function () {
  toggleDiv("divHidden6");
});
document.getElementById("botao7").addEventListener("click", function () {
  toggleDiv("divHidden7");
});

document.getElementById("botao8").addEventListener("click", function () {
  toggleDiv("divHidden8");
});
document.getElementById("botao9").addEventListener("click", function () {
  toggleDiv("divHidden9");
});

document.getElementById("botao10").addEventListener("click", function () {
  toggleDiv("divHidden10");
});
document.getElementById("botao11").addEventListener("click", function () {
  toggleDiv("divHidden11");
});

document.getElementById("botao12").addEventListener("click", function () {
  toggleDiv("divHidden12");
});


//DIA 

var data = new Date();
var dia = data.getDate();
var mes = data.getMonth() + 1;
var ano = data.getFullYear();

function diaCompleto() {
  if (dia < 10) {
    return "0"
  } else {
    return ""
  }
}

function mesCompleto() {
  if (mes < 10) {
    return "0"
  } else {
    return ""
  }
}

var dataAtual = document.querySelectorAll('#dataAtual');

dataAtual.forEach((dataAtual)=>{
  dataAtual.innerHTML = "Data atual: " + diaCompleto() + dia + "/" + mesCompleto() + mes + "/" + ano + " - " + diasDaSemana[data.getDay()];

})

//Select//
const minhaSelecao = document.getElementById("minha-selecao");

minhaSelecao.addEventListener("change", function() {
  const opcaoPlaceholder = document.getElementById("opcao-placeholder");
  opcaoPlaceholder.hidden = true;
});


