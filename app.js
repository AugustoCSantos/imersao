function pesquisar(){
    let section = document.getElementById("resultados-pesquisa"); //procura no documento HTML por um elemento que tenha o ID "resultados-pesquisa"
    console.log(section);

    let resultados = ""

    for (let dado of dados){
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `
    }

    section.innerHTML = resultados
}


