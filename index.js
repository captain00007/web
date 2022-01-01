var color = "#";
var colorString = "a b c d e f 0 1 2 3 4 5 6 7 8 9";
var arrColors = colorString.split(" ");
var docBg = document.getElementById("main");

window.onload = function () {
  let url = new URL(window.location.href);
  let data = url.searchParams.get("message");
  let showMessage = document.getElementById("message-query");
  if (data === null) {
    showMessage.innerHTML = "Welcome to Dawn18";
  } else {
    showMessage.innerHTML = data;
  }

  /*laco para gerar cor hezadecimal*/
  for (let i = 0; i < 6; i++) {
    var number = Math.random() * 16;
    color += arrColors[parseInt(number)];
  }
  docBg.style.backgroundColor = color;
};

/*Funçao para recarregar a pagina e mudar a cor do background*/

var changeBack = function () {
  document.location.reload();
};
