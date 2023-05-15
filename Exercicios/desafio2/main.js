
const { gets, print } = require('./funcoes_auxiliares2.js');

const n = gets();

let maiorPar = null;
let menorImpar = null;

for (let i = 0; i <= n; i++) {
   const numero = gets();
    
    if (numero % 2 === 0 ) {
        if (maiorPar === null || numero > maiorPar) {
            maiorPar = numero;
        }

    } else {
        if (menorImpar === null || numero < menorImpar) {
            menorImpar = numero;
        }
    } 
    
}

print(`Maior par é: ${maiorPar}`);
print(`Menor impar é: ${menorImpar}`);
