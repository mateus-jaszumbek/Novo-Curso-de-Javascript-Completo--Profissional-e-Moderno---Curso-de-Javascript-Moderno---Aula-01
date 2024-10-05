/* && -> and, || -> or ou, ! -> not não */

let n1 = 0, n2 = 0, n3 = 0, n4 = 0;

n1 = 10;
n2 = 5;
n3 = 15;
n4 = 2;

console.log((n1 > n2) && (n1 > n3));

console.log("\n" + (n1 > n2) || (n1 > n3));

console.log("\n" + !(n1 > n2) || (n1 > n3));

console.log("\n");

if (n1 > n2) {
    console.log(n1 + " maior que " + n2);
}
else {
    console.log(n2 + " maior que " + n1);
}

console.log("\n");

if ((n1 > n2) && (n3 > n4)) {
    console.log("Verdadeiro");
} else {
    console.log("Falso");
}

console.log("\n");

if ((n1 > n2) || (n3 > n4)) {
    console.log("Verdadeiro");
} else {
    console.log("Falso");
}