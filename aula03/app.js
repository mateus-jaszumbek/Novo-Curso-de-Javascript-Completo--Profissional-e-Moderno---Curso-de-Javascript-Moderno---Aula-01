"use strict"

// Const - Constantes (Não permite duplicidade)

const curso = "JAvascript";
curso = "HTML";

function test() {
    let nome = "Mateus";
    if (true) {
        console.log("Dentro do if de teste" + nome);
    }
    console.log("Dentro de teste" + nome);
}
test();

// Dessa maneira da erro
// console.log("fota de teste" + nome);


//Let - mandeira certa de usar 
if (true) {
    let nome3 = "Mateus";
}
console.log(nome3)


// Var - Maneira errada de usar variavel
if (true) {
    var nome2 = "Mateus";
}
console.log(nome2)