/*//Saida 
console.log("Digite o nome do seu jogador")

// declara uma variavel
let nickname = "CaraLegal"

//concatenando uma mensagem fixa+uma variável
console.log("Bem vindo " + nickname)

console.log(nickname + " entrou no servidor")

const notificacao = "Pokemon Go diz:"
console.log( notificacao +" tem um novo pokemmon na região")
console.log( notificacao +" você foi derrotado por um lider de ginásio")

//constante valor repetitivo 
//variavel pode sofrer alterções com o tempo
//------------------------------------------------------------------------
let poteCafe = "café pilão"
let poteAcucar= "açucar cristal"
let poteBiscoito = "Biscoito Maizena"

console.log (" Na cozinha da vovó hoje tem: " +poteCafe + " _ "+ poteAcucar +" _ "+poteBiscoito)

poteCafe = " Café 3 corações"
poteAcucar = "Açucar demerara"
poteBiscoito = "Biscoito Recheado "
console.log (" Na cozinha da vovó hoje tem: " +poteCafe + " _ "+ poteAcucar +" _ "+poteBiscoito)

//---------------------------------------------------------------
//pokemon
let nomePokemon = "Pikachu"
let pokemonSexo = "M"

let nivelPokemon = 20
let pontosDeVida = 45

let selecionavel = true

// nome,idade,numero de telefone, cpf,<Endereco"

let nomePessoa = "Josicreide Do Pythinho"
let idade = 115
let numeroDoTelefone = "(11)-98471-3388"
let cpf = "312.122.312-45"
let endereco = "Rua dos limoeiros, numero 75, bairro da Jaguar" 

let recebePensao = true


let pokemon = ["Pikachu", "Charmander","Bulbasaur"]

pokemon.shift()
pokemon.pop()

console.log (pokemon)

//-----------------------------------------------------------------------
let nomesPokemon = ["Pikachu", "Charmander","Bulbasaur"]
let nomesTreinadores = ["Ash","Misty","Borck"]


console.log (nomesPokemon)
console.log(nomesTreinadores)

//-----------------------------------------------------------------------

let nomePokemon = ["Pikachu", "Charmander", "Bulbasaur"]
let timePokemon = [
    ["Pikachu", "M", 1],
    ["Charmander", "F", 4]
]
console.log("O pokemon " + timePokemon[1][0] + " é do sexo " + timePokemon[1][1] + " e esta no nivel " + timePokemon[1][2])
*/
/*
let nomePokemon = ["Pikachu", "Charmander", "Bulbasaur"]
let timePokemon = [
    ["Pikachu", "M", 1],
    ["Charmander", "F", 4]
]
console.log(timePokemon[1])*/

/*
let nomeMarido = ["Romulo","Nogueira"]
let nomeEsposa = ["Keity","Martin"]
console.log(nomeEsposa[0])
*/
/*
let numero = "1"

console.log(numero === 1)
let resultado = marca === "Apple"
console.log(resultado)
*/
/*
let cpfBloqueado = "123.456.789-11"
let cpfUsuario = "111.222.333-44"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado

console.log(" O usuario esta barrado ?  " + ehCPFBloqueado)

let idadeMinima = 18
let idadeUsuario = 17
let idadePermitidaValida = idadeUsuario >= idadeMinima

console.log (idadePermitidaValida)

let idadeDeCorte = 50
let idadeUsuario = 45

let resultadoEhTerceiraIdade = idadeDeCorte <= idadeUsuario

console.log(resultadoEhTerceiraIdade)


let texto = "Felipe"
console.log( texto === "Felipe")

let idade = 18
let vistoVerificado = true
let resultado = (idade >= 18)&&(vistoVerificado === true)

console.log(resultado)

let moedasColetadas = 100
let item = "estrela"
let resultado = (moedasColetadas === 100) && (item === "estrela")

console.log(resultado)

let tempo = "sol"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva")|| (item === "guarda chuva")
console.log ("Nosso personagem pode sair? " + podeSair)

let tempo = "chuva"
let horario = 8
let resultado = !((tempo !== "chuva") && (horario > 6))
console.log (resultado)
------------------------
IF/ELSE
let ehLigado = true
if(ehLigado){
    console.log("Executou o comando")
}
------------------------
let possuiOvos = false
let itensComprados =""
if(possuiOvos){
    itensComprados = "Leite"
}
else{
    console.log("passou na sessão de congelados")
    itensComprados = "Lasanha congelada"
}
console.log("item comprado: " + itensComprados)

let nivelDeFome = 5
if(nivelDeFome ===1){
    console.log("pouca fome")
}else if(nivelDeFome ===2){
    console.log("Muita Fome")
}else{
    console.log("Comeria mais que o pica pau")
}


let keityEsposa = "positivo"
if(keityEsposa ==="positivo"){
    console.log("Meus parabens você é casado com Keity")
}else if(keityEsposa ==="negativo"){
    console.log("Se fudeu perdeu uma esposa maravilhosa")
}else{
    console.log("Volta e escolhe positivo que você se casou 25 de agosto de 23")
}

//Switch case break default
let fruta = "banana";

switch (fruta){
    case "laraja":
    console.log("laranjada")
    break

    case "banana":
    case "morango":
    console.log("vitamina") 
    break

    case "maça":
    console.log("suco de maçã")
    break

    default:
    console.log("suco generico")
}


let classes = "mago";

switch (personagens){
    case "guerreiro":
    console.log("Você jogara com o guerreiro Ramon")
    break

    case "barbaro":
    console.log("Você jogara com o barbaro Leir")
    break

    case "monge":
    console.log ("Você jogara com o monge Vitor")
    break

    case "druida":
    console.log("Você jogara com o druida Leonardo")
    break

    case "mago":
    console.log ("Você jogara com o mago Romulo")
    break

    default:
    console.log(" Classe errada ou não é do grupo")

}

//for
for (let contador = 0; contador < 4; contador++){
    console.log(contador)
    console.log("aumentar o contador")
}

let pontosDeVida = 0

for(let i = 0; i <= 11; i++){
    pontosDeVida += 1
    console.log("Tomou uma poção magica " + i)
    console.log(pontosDeVida + "Totais")
}


//while
let contador = 0
while(contador < 3){
    console.log("olá " + contador)
    contador++
}
*/
// do while
let i = 3

do {
    console.log("olá ")
    i++
} while (i < 3)
