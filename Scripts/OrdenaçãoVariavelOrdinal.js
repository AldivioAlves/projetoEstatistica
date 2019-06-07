
inserirValores = function () {
    objetoIdeElemento = {}

    for (i = 0; i < vetorVariaveis.length; i++) {
        CaixaDeSeleção = document.createElement('select')
        CaixaDeSeleção.name = `Caixa${i}`
        CaixaDeSeleção.id = `CaixaId${i}`
        CaixaDeSeleção.setAttribute('onchange', "analiseAntesDaRemoção(this.id)")
        document.getElementById("caixaSelets").appendChild(CaixaDeSeleção)
        vazia = document.getElementById(CaixaDeSeleção.id).appendChild(document.createElement('option'))
        vazia.innerText = `${i}°`
        vazia.style.textAling = 'center'
        objetoIdeElemento[CaixaDeSeleção.id] = ''


        for (j = 0; j < vetorVariaveis.length; j++) {
            opção = document.createElement('option')
            opção.value = `${vetorVariaveis[j]}`
            opção.innerText = `${vetorVariaveis[j]}`
            opção.name = `opção${j}`
           // opção.id = `opção${i}${j}`
            document.getElementById(`CaixaId${i}`).appendChild(opção)
        }

    }
}
//seletores = document.getElementById('caixa').querySelectorAll('select')

analiseAntesDaRemoção= function(id){
    seletores = document.getElementById('caixa').querySelectorAll('select')

    idSolicitante =id
    alert(`O id do elemento que chamou a remoção é ${id}`)
    if(objetoIdeElemento[id]==''){
        alert(`O valor no objeto do id ${id} é ${objetoIdeElemento[id]}`)
        
        removerEntradas(idSolicitante)

    }
    else{
        alert(`O valor no objeto do id é ${objetoIdeElemento[id]} com id = ${objetoIdeElemento[id].id} e innerText = ${objetoIdeElemento[id].innerText}`)
        for(i=0;i<seletores.length;i++){
           // if(seletores[i].id!=id){
               alert(`O select que posivelmente vai receber o option é ${seletores[i].id}`)
                seletores[i].appendChild(objetoIdeElemento[id])
                teste = seletores[i].querySelectorAll('option')//remover essas linhas abaixo depois
                for(j=0;j<teste.length;j++){
                    alert(teste[j].innerText)
                }
            
                
           // }
        }
        
        removerEntradas(idSolicitante)


    }
}


removerEntradas = function (id) {
    alert('entrou na remoção de valores ')
    for(i=0;i<seletores.length;i++){//remover daqui
        // if(seletores[i].id!=id){
            alert(`O select que posivelmente vai receber o option é ${seletores[i].id}`)
             //seletores[i].appendChild(objetoIdeElemento[id])
             teste = seletores[i].querySelectorAll('option')//remover essas linhas abaixo depois
             for(j=0;j<teste.length;j++){
                 alert(teste[j].innerText)
             } //até aquii

            }
    selecionado = document.getElementById(id).value
    // objetoIdeElemento[id]=document.getElementById(id)
    seletores = document.getElementById('caixa').querySelectorAll('select')
    for (i = 0; i < seletores.length; i++) {
        if (seletores[i].id != id) {
            opções = document.getElementById(seletores[i].id).querySelectorAll('option')//vetor com as opções de cada select
            for (j = 0; j < opções.length; j++) {
                if (opções[j].innerText == selecionado) {
                    objetoIdeElemento[id] = opções[j]//o objeto em questão está recebendo mais de uma vez o elemento com diferente id pois a condição é verdadeira quando selecionado...
                    opções[j].id = 'remover'
                    
                    document.getElementById(seletores[i].id).removeChild(document.getElementById(opções[j].id))
                }
            }

        }

    }



}///esse foi um dos codigos com a logica mais complexa que desenvolvi ate agora kkkk
resetar = function () {
    selets.innerHTML = ''
    inserirValores()
    for (chaves in objetoIdeElemento) {
        objetoIdeElemento[chaves] = ''
    }


}

variaveisOrdem = function () {
    if (document.getElementById('entradaUsuario') == null && document.getElementById('entradaArquivo') == null) {
        alert('Por favor, Selecione um tipo de entrada de dados.')
        return
    }

    if (document.getElementById('caixa') != null) {
        document.getElementById('formulario').removeChild(document.getElementById('caixa'))
    }
    if (document.getElementById('caixaAP') != null) {
        document.getElementById('formulario').removeChild(caixaAP)
    }
    if (document.getElementById('entradaUsuario') != null) {
        vetorInteiro = document.getElementById('entradaUsuario').value
    }
    else {
        vetorInteiro = entrada
    }

    vetorInteiro = vetorInteiro.split(';')
    for (i = 0; i < vetorInteiro.length; i++) {
        if (vetorInteiro[i] == "") {
            vetorInteiro.splice(i, 1)

        }
    }

    for (i = 0; i < vetorInteiro.length; i++) {
        vetorInteiro[i] = vetorInteiro[i].trim()
    }

    //remover possiveis entradas entre ; em branco

    i = 0
    do {
        if (vetorInteiro[i] == "") {
            vetorInteiro.splice(i, 1)
        }
        else {
            i++
        }
    } while (i < vetorInteiro.length)

    // verificando se existe algum numero no vetor
    numerosNoVetor = 0
    for (i = 0; i < vetorInteiro.length; i++) {
        if (isNaN(vetorInteiro[i]) == false) {
            numerosNoVetor++
        }
    }
    if (numerosNoVetor > 0) {
        alert('Para variaveis do tipo Ordinal, apenas nomes na entrada.')
    }

    else {

        vetorVariaveis = []
        for (i = 0; i < vetorInteiro.length; i++) {
            if (vetorVariaveis.indexOf(vetorInteiro[i]) == -1) {
                vetorVariaveis.push(vetorInteiro[i])

            }
        }
        caixaVariaveisOrdem = document.createElement('div')
        caixaVariaveisOrdem.id = "caixa"
        document.getElementById('formulario').insertBefore(caixaVariaveisOrdem, document.getElementById("CarregamentoMaster"))



        instrução = document.createElement('p')
        instrução.innerText = "Da esquerda para a direita, selecione a ordem das variaveis:"
        instrução.id = "ParagrafoInstrução"
        document.getElementById('caixa').appendChild(instrução)
        selets = document.getElementById('caixa').appendChild(document.createElement('div'))
        selets.id = 'caixaSelets'
        inserirValores()
        reset = document.getElementById('caixa').appendChild(document.createElement('button'))
        reset.setAttribute('type', 'button')
        reset.setAttribute('onclick', 'resetar()')
        reset.innerText = "resetar"

        document.getElementById('caixa').appendChild(document.createElement('br'))
        document.getElementById('caixa').appendChild(document.createElement('br'))

    }



}




