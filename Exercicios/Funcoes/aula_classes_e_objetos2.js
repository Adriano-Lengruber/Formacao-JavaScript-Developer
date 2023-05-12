
class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
        
    }

    calcularGastoPecurso(precoCombustivel, distancia ) {
        return distancia * this.gastoMedioKm * precoCombustivel; 
    }
     
}

const fusca = new Carro('Wolks', 'barnca', 1/8);

console.log(fusca.calcularGastoPecurso(5, 70));