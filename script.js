async function executar() {
    // entrada
    const idPokemon = pegarValue()
    // processamento
    const pokemon = await chamarAPI(idPokemon)
    // saida
    mostrarDados(pokemon)

}

function pegarValue() {

    const valor = document.getElementById("idPokemon").value

    return valor

}

async function chamarAPI(idPersonagem) {

    const url = `https://pokeapi.co/api/v2/pokemon/${idPersonagem}`

    const resposta = await fetch(url)
    const pokemon = await resposta.json()

    return pokemon
}

function mostrarDados(dadosPokemon) {

    console.log(dadosPokemon)
    document.getElementById("nomePokemon").innerHTML = ("#" + dadosPokemon.id + " - " + dadosPokemon.name)

    document.getElementById("imgPokemon").innerHTML =
        `<img src="${dadosPokemon.sprites.front_default}">`

}


