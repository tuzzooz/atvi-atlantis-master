import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";

let cliente = new Cliente()
cliente.nome = `Pedro de Alcântara João Carlos Leopoldo Salvador`
cliente.nomeSocial = `Dom Pedro II`
cliente.dataCadastro = new Date(1840, 6, 23)
cliente.dataNascimento = new Date(1825, 11, 2)
let endereco = new Endereco()
endereco.rua = `R. do Catete`
endereco.bairro = `Copacabana`
endereco.cidade = `Rio de Janeiro`
endereco.estado = `Rio de Janeiro`
endereco.pais = `Brasil`
endereco.codigoPostal = `22220-000`
cliente.endereco = endereco

let tel1 = new Telefone()
tel1.ddd = '21'
tel1.numero = '12345-6789'
cliente.telefones.push(tel1)

let dependente = new Cliente()
dependente.nome = `Isabel Cristina Leopoldina Augusta Micaela`
dependente.nomeSocial = `Princesa Isabel`
dependente.dataCadastro = new Date(1921, 10, 14)
dependente.dataNascimento = new Date(1846, 6, 29)
dependente.endereco = (cliente.endereco.clonar() as Endereco)
dependente.titular = cliente

dependente.endereco = (cliente.endereco.clonar() as Endereco)

for (let tel of cliente.telefones) {
    dependente.telefones.push(tel.clonar() as Telefone)
}

cliente.dependentes.push(dependente)

console.log("titular")
console.log(cliente);
console.log("dependente")
console.log(dependente);

console.log(`Telefone Titular: ${cliente.telefones[0].numero}`)
console.log(`Telefone Dependente: ${dependente.telefones[0].numero}`)

console.log(cliente);
console.log(dependente);
