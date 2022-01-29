/*alert(document.querySelector(".box_opcoes > .greenborder"))*/

function colocarBordanasComidas(){
    const elementoComida = document.querySelector(".opcoes_comida");
    if(document.querySelector(".comidas > .greenborder") != null){
        elementoComida.classList.remove("greenborder");

    } else if(document.querySelector(".comidas > .greenborder") === null){
        elementoComida.classList.add("greenborder");
    }
}

function colocarBordanasBebidas(){
    const elementoBebida = document.querySelector(".opcoes_bebida");
    if(document.querySelector(".bebidas > .greenborder") != null){
        elementoBebida.classList.remove("greenborder");

    } else if(document.querySelector(".bebidas > .greenborder") === null){
        elementoBebida.classList.add("greenborder");
    }
}

function colocarBordanasSobremesas(){
    const elementoSobremesa = document.querySelector(".opcoes_sobremesa");
    if(document.querySelector(".sobremesas > .greenborder") != null){
        elementoSobremesa.classList.remove("greenborder");

    } else if(document.querySelector(".sobremesas > .greenborder") === null){
        elementoSobremesa.classList.add("greenborder");
    }
}
/*
if()
*/
