const form = document.forms.cadastro;
const mensagemErro = document.querySelector("#mensagemErro");
const {nome, celular, cpf, email, senha, confirmaSenha, numCartao, codigoSeg, dataValidade} = form;

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    validaFormulario();
})

function validaNome(){
    const regex = /^[A-Z][a-z]* [A-Z][a-z]*$/;
    if(regex.test(nome.value)){
        console.log(nome.value); 
    }else{
        throw new Error("Nome e Sobrenome inválidos");
    }
}

function validaCelular(){
    const regex = /^\([0-9]{2}\) 9 [0-9]{4}[-][0-9]{4}$/
    if(regex.test(celular.value)){
        console.log(celular.value);
    }else{
        throw new Error("Celular inválido");
    }
}

function validaCPF(){
    const regex = /^[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}$/
    if(regex.test(cpf.value)){
        console.log(cpf.value);
    }else{
        throw new Error("CPF inválido");
    }
}

function validaEmail(){
    const regex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+/
    if(regex.test(email.value)){
        console.log(email.value);
    }else{
        throw new Error("Email inválido");
    }
}

function validaSenha(){
   const regex = /^[0-9]{8}$/
    if(regex.test(senha.value)){
        console.log(senha.value);
    }else{
        throw new Error("Senha inválida");
    }
}

function validaConfirmaSenha(){
    if(confirmaSenha.value === senha.value){
        console.log(confirmaSenha.value);
    }else{
        throw new Error("As senhas não são semelhantes");
    }
}

function validaCartao(){
    const regex = /^[0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}$/
    if(regex.test(numCartao.value)){
        console.log(numCartao.value);
    }else{
        throw new Error("Numero de cartão inválido");
    }
}

function validaData(){
    const regex = /^[0-9]{2}[/][0-9]{2}$/
    if(regex.test(dataValidade.value)){
        console.log(dataValidade.value);
    }else{
        throw new Error("Data de validade do cartão inválida");
    }
}

function validaCodigo(){
    const regex = /^[0-9]{3}$/

    if(regex.test(codigoSeg.value)){
        console.log(codigoSeg.value);
    }else{
        throw new Error("Códido de segurança inválido");
    }
}

function validaFormulario(){
    try{
        validaNome();
        validaCelular();
        validaCPF();
        validaEmail();
        validaSenha();
        validaConfirmaSenha();
        validaCartao();
        validaData();
        validaCodigo();
        alert("Dados cadastrados com sucesso!!");
    }catch(erro){
        mensagemErro.innerHTML = erro.message;
    }
}