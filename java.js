


function calcularConta(){
    const pegaValordaConta = document.getElementById("valorConta");
    const pegaValordaTaxa = document.getElementById("taxaGarçom");
    const pegaQntClientes = document.getElementById("qntClientes");
    const resultadoFinal = 
    (parseFloat(pegaValordaConta.value) + parseFloat(pegaValordaTaxa.value)) / parseInt(pegaQntClientes.value);
    
    document.getElementById("resultado").innerHTML = `<strong class= "cor">Olá, bem-vindo a Adega e Distribuidora s2, valor da sua conta é R$ ${pegaValordaConta.value}, taxa do garçom é R$ ${pegaValordaTaxa.value}, valor para cada cliente ficou R$ ${resultadoFinal}.</strong>`;
}






function formEvent(){
    const form =document.getElementById("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault(); //evitar que página seja atualizada dps que receber as informações
    
    calcularConta();
});
}

