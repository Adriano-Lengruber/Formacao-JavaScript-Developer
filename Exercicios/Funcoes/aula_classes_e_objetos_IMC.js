
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

    classificarIMC () {
        const imc = this.calcularIMC();

        if (imc < 18.5) {
            return('Abaixo do Peso!');
        } else if (imc >= 18.5 && imc < 25) {
            return('Peso Normal!');
        } else if (imc >= 25 && imc < 30) {
            return('Acima do Peso!');
        } else if (imc >= 30 && imc < 40) {
            return('Obeso!');
        } else {
            return('Obesidade Grave!');
        }
    }

}

const adriano = new Pessoa('Adriano', 75, 1.69);

console.log(`Meu nome é ${adriano.nome} e meu IMC é ${adriano.calcularIMC()}`);

console.log(`De acordo com meu IMC:${adriano.calcularIMC()} estou classificado como: ${adriano.classificarIMC()}`);


