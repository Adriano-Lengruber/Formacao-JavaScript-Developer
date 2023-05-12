
class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;        
    }

    calcularIMC () {
        return this.peso / (this.altura * this.altura);
    }

}

const adriano = new Pessoa('Adriano', 75, 1.69);
const joao = new Pessoa('Joao', 80, 1.68);

console.log(adriano.calcularIMC());