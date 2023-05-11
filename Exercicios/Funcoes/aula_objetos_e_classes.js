
class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = (new Date).getFullYear() - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos!`);
    }
}

// const adriano = new Pessoa("Adriano", 37);

// //console.log(adriano);

// adriano.descrever();


function compararPessoas(p1,p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}.`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade!`);
    }
}


const adriano = new Pessoa('Adriano', 37);
const heleno = new Pessoa('Heleno', 70);

compararPessoas(adriano, heleno);