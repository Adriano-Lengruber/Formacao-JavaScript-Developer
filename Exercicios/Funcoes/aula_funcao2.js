function aplicarDesconto (valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros (valor, juros){
    return (valor + (valor * (juros / 100)));
}

const precoProduto = 100;
const formaPagamento = 0;

if (formaPagamento === 1){
    console.log(aplicarDesconto(precoProduto, 10));
} else if (formaPagamento === 2){
    console.log(aplicarDesconto(precoProduto, 15));
} else if (formaPagamento === 3){
    console.log(precoProduto);
} else if(formaPagamento === 4){
    console.log(aplicarJuros(precoProduto, 10));
} else {
    console.log("Forma de Pagamento inválida!");
}

