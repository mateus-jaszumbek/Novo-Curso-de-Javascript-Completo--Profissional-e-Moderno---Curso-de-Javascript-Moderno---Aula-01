let joao = {
    nome: "João",
    cursos: ["Banco de Dados", "Redes de Computadores", "Programação Orientada a Objetos"],
    isActive: true,
    points: 1500,
    periodo: 3,
    turma: "Bº 2"
};

let fernanda = {
    nome: "Fernanda",
    cursos: ["Engenharia de Software", "Sistemas Operacionais", "Calculo Diferencial"],
    isActive: false,
    points: 1800,
    periodo: 4,
    turma: "Cº 3"
};

let carlos = {
    nome: "Carlos",
    cursos: ["Arquitetura de Computadores", "Segurança da Informação", "Redes de Computadores"],
    isActive: true,
    points: 2100,
    periodo: 5,
    turma: "Dº 1"
};

let ana = {
    nome: "Ana",
    cursos: ["Desenvolvimento Web", "Inteligência Artificial", "Processamento de Imagens"],
    isActive: false,
    points: 1750,
    periodo: 6,
    turma: "Eº 5"
};

let estudantes = [joao, fernanda, carlos, ana];

for (estudante of estudantes) {
    console.log("O(a) estudante " + estudante.nome + " Esta no Nº " + estudante.periodo + " periodo Do curso: ");
    for (curso of estudante.cursos) {
        console.log(curso);
    }
    console.log("\n");
};

let valorTotal = estudantes.reduce((a, c) => a + c.points, 0);

console.log("Total de todas as notas: " + valorTotal)
