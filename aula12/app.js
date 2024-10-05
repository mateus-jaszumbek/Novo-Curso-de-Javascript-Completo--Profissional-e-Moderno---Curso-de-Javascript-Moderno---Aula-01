let n1 = [10, 20, 30];
let n2 = [11, 22, 33, 44, 55];
let n3 = [...n1, ...n2];

console.log("N1: " + n1);
console.log("N2: " + n2);
console.log("N3 " + n3);
console.log("tipo de N3: " + typeof (n3));

console.log("\n");

const jogador = { nome: "Bruno", energia: 100, Vidas: 3, magia: 150 }
const jogador2 = { nome: "Mateus", energia: 100, Vidas: 5, defesa: 70 }
const jogador3 = { ...jogador, ...jogador2 }

console.log(jogador3);

console.log("\n");

const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}

let valores = [1, 5, 7, 10];

console.log(soma(...valores));

console.log("\n");

const objs1 = document.getElementsByTagName("div");
const objs2 = [...document.getElementsByTagName("div")];

objs2.forEach(element => {
    element.innerHTML = "Curso";
});

console.log("\n");

console.log(objs1);
console.log(objs2);