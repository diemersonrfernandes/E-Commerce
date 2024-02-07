let produto = "321015521111111111-B\n2248-A\n255541266-C";

const regex =  /[0-9]+[-][B]/g;
//const resultado =  produto.match(regex);
const resultado = regex.exec(produto);
console.log(resultado);
