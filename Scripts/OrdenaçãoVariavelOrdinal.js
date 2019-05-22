


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
    else{
        vetorInteiro=entrada
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


        for (i = 0; i < vetorVariaveis.length; i++) {
            CaixaDeSeleção = document.createElement('select')
            CaixaDeSeleção.name = `Caixa${i}`
            CaixaDeSeleção.id = `CaixaId${i}`
            document.getElementById("caixa").appendChild(CaixaDeSeleção)
            for (j = 0; j < vetorVariaveis.length; j++) {
                opção = document.createElement('option')
                opção.value = `${vetorVariaveis[j]}`
                opção.innerText = `${vetorVariaveis[j]}`
                opção.name = `opção${j}`
                document.getElementById(`CaixaId${i}`).appendChild(opção)
            }

        }

        document.getElementById('caixa').appendChild(document.createElement('br'))
        document.getElementById('caixa').appendChild(document.createElement('br'))

    }

}




