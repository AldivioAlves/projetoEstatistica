ElementosCorrelação = function () {
    criar = function (tipo, id, texto = '', onclick = '', classe = '', valor = '') {
        elemento = document.createElement(tipo)

        elemento.setAttribute('id', id)
        elemento.innerText = texto
        elemento.setAttribute('onclick', onclick)
        elemento.setAttribute('class', classe)
        elemento.setAttribute('value', valor)

        return elemento
    }

    divCorrelação = document.body.appendChild(criar('div', 'divCorrelação'))

    fecharCorrelação = divCorrelação.appendChild(criar('p', 'pFechar', 'X', "document.body.removeChild(document.getElementById('divCorrelação'))"))

    instrução = divCorrelação.appendChild(criar('p', 'pInstrução', 'Slecione o tipo de entrada:'))

    botãoManual = divCorrelação.appendChild(criar('button', 'botãoManualCorrelação', 'Manual', 'plotarEntrada("manual")'))

    botãoArquivo = divCorrelação.appendChild(criar('button', 'botãoArquivoCorrelação', 'Arquivo', 'plotarEntrada()'))

    divEntrada = divCorrelação.appendChild(criar('div', 'divEntrada'))




}

plotarEntrada = function (tipo) {
    divEntrada.innerHTML = ''

    if (tipo == 'manual') {
        instruçãoManual = divEntrada.appendChild(criar('p', 'instruçãoManual', 'digite os dados nas entradas das variaveis separando-os com ";"'))
        Px = divEntrada.appendChild(criar('p', 'Px', 'independente:'))
        x = Px.appendChild(criar('input', 'independente'))
        Py = divEntrada.appendChild(criar('p', 'Py', 'dependente:'))
        y = Py.appendChild(criar('input', 'dependente'))
        submeter = divEntrada.appendChild(criar('a', 'calculaC', 'Calcular', 'validarEntradasC("manual")'))
        submeter.setAttribute('href', '#')

    }
    else {
        instruçãoArquivo = divEntrada.appendChild(criar('p', '', 'Selecione um arquivo do tipo .csv ou .txt:'))
        botaoCarregarArquivo = divEntrada.appendChild(criar('input', 'arquivoC'))
        botaoCarregarArquivo.setAttribute('type', 'file')
        botaoCarregarArquivo.setAttribute('onchange', 'carregarArquivoC()')
        submeter = divEntrada.appendChild(criar('a', 'calcularC', 'Calcular', 'validarEntradasC("arquivo")'))
        submeter.setAttribute('href', '#')

    }


}

tratamento = function (vetor) {
    //remover espaços entre os dados do vetor
    for (i = 0; i < vetor.length; i++) {
        vetor[i] = vetor[i].trim()
    }
    i = 0
    do {
        if (vetor[i] == "") {
            vetor.splice(i, 1)
        }
        else {
            i++
        }
    } while (i < vetor.length)

    // substituir "," por "." em possiveis digitações de decimais com virgulas.
    for (i = 0; i < vetor.length; i++) {
        dado = vetor[i]
        for (j = 0; j < dado.length; j++) {
            if (dado[j] == ',') {
                dado = dado.replace(dado[j], '.')
                vetor[i] = dado
            }
        }
    }

    for (i = 0; i < vetor.length; i++) {
        vetor[i] = parseFloat(vetor[i])
    }

    return vetor
}

//carregar dados do arquivo importado 

carregarArquivoC = function () {

    entradaC = document.getElementById('arquivoC')
    entradaC = entradaC.files[0]
    if(entradaC.type!='application/vnd.ms-excel' && entradaC.type!='text/plain'){
        alert('Tipo de arquivo inválido.Selecione um arquivo do tipo .txt ou .csv')
        document.getElementById('arquivoC').value=''
    }
    leitorC = new FileReader()
    leitorC.readAsText(entradaC)

    leitorC.onload = function () {
        entradaC = leitorC.result

    }

}

validarEntradasC = function (tipo) {

    if (tipo == 'manual') {

        //entradas vazias
        if (x.value == '') {
            alert('Digite valores no campo da variavel independente.')
            
            return
        }
        else if (y.value == '') {
            alert('Digite valores no campo da variavel dependente.')
            return
        }
        vetorX = x.value.split(';')
        vetorY = y.value.split(';')
    }


    else {

        //dividindo a entrada em um vetor onde os elementos serão separados a partir da quebra de linha


        entradaC = entradaC.split('\n')

        //verificando se existe algum elemento vazio no vetor, se sim: excluir

        for (i = 0; i < entradaC.length; i++) {
            if (entradaC[i].length == 0) {
                entradaC.splice(i, 1)
            }
        }
        //se a entrada estiver apenas um elemento.
        if (entradaC.length == 1) {
            alert('O arquivo tem apenas uma linha de dados.\nEle deve ser composto por 2 linhas válidas.')
            document.getElementById('arquivoC').value=''
            return
        }
        //se a entrada estiver mais de 2 elementos 
        else if (entradaC.length > 2) {
            alert('O arquivo tem mais de duas linhas válidas. Ele deve ser composto por apenas 2 linhas validas com dados.')
            document.getElementById('arquivoC').value=''
            return

        }
        else {
            vetorX = entradaC[0].split(';')
            vetorY = entradaC[1].split(';')
        }

    }


    //tratamento e verificação do vetorX
    vetorX = tratamento(vetorX)

    for (i = 0; i < vetorX.length; i++) {
        if (isNaN(vetorX[i])) {
            alert('Verifique os dados da variavel independente:\napenas numeros separados por";".')
            document.getElementById('arquivoC').value=''
            return

        }
    }

    //tratamento e verificação do vetorY
    vetorY = tratamento(vetorY)
    for (i = 0; i < vetorY.length; i++) {

        if (isNaN(vetorY[i])) {
            alert('Verifique os dados da variavel dependente:\napenas numeros separados por";"')
            document.getElementById('arquivoC').value=''
            return
        }
    }
    //verificação se os vetores tem a mesma quantidade de elementos válidos
    if (vetorX.length != vetorY.length) {
        alert('A quantidade de dados da variavel independente e da variavel\ndependente deve ser a mesma.')
        document.getElementById('arquivoC').value=''
        return
    }


    window.localStorage.removeItem('dadosCorrelação')
    objetoCorrelação = {
        x:vetorX,
        y:vetorY
    }
    window.localStorage.setItem('dadosCorrelação',JSON.stringify(objetoCorrelação))
    submeter.setAttribute('href', 'correlação.html')

}


