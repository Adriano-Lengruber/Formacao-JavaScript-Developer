
const { gets, print } = require('./funcoes_auxiliares.js');

const media = gets();

if (media < 5) {
    print('Reprovado!');
} else if (media >= 5 && media < 7) {
    print('Recuperação!');
} else {
    print('Aprovado!');
}

