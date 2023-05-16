
const valores = [];
let i = 0;

function gets() {
    const numero = valores[i];
    i++;
    return numero;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };
