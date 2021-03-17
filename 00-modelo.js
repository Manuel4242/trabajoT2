/* 
JavaScript / jQuery
web o pagina: Ejercicio Práctico Segundo Trimestre
autor: Manuel Carrillo
fecha: Marzo de 2021
*/

//Cuenta el número de veces que se ha visitado una página
if(typeof(Storage) !== "undefined") {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
      sessionStorage.setItem("clickcount", 1);
    }
    if(sessionStorage.clickcount>1){
      $("#contador").text("Has visitado " + sessionStorage.clickcount + " páginas");
    }else{
      $("#contador").text("Has visitado " + sessionStorage.clickcount + " página");
    }
  } else {
    document.getElementById("contador").innerHTML = "Sorry, your browser does not support web storage...";
  }

//Despliega el menú de navegación oculto
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

//Repliega el menú de navegación oculto
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//Escribe en la "miga de pan" el título de la página actual
$("#prueba").text(document.title);
