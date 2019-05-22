pMediaDesvioNormal = document.getElementById('caixaInterna').appendChild(document.createElement('p'))
pMediaDesvioNormal.setAttribute('id', 'pMediaDesvioNormal')
text15 = document.getElementById('pMediaDesvioNormal').appendChild(document.createElement('p'))
text15.innerText = 'Media: '
text15.style.display = 'inline-block'

inputMediaNormal = document.getElementById('pMediaDesvioNormal').appendChild(document.createElement('input'))
inputMediaNormal.setAttribute('type', 'text')
inputMediaNormal.setAttribute('class', 'inputCalc')
inputMediaNormal.setAttribute('id', 'inputMediaNormal')

text16 = document.getElementById('pMediaDesvioNormal').appendChild(document.createElement('p'))
text16.innerText = 'Desvio Padrão:'
text16.style.display = 'inline-block'
inputDesvioNormal = document.getElementById('pMediaDesvioNormal').appendChild(document.createElement('input'))
inputDesvioNormal.setAttribute('type', 'text')
inputDesvioNormal.setAttribute('class', 'inputCalc')
inputDesvioNormal.setAttribute('id', 'inputDesvioNormal')


pAcimaDe = document.getElementById('caixaInterna').appendChild(document.createElement('p'))
pAcimaDe.setAttribute('id', 'pAcimaDe')
text17 = document.getElementById('pAcimaDe').appendChild(document.createElement('p'))
text17.innerText = 'Acima de:'
text17.style.display = 'inline-block'

inputAcimaDe = document.getElementById('pAcimaDe').appendChild(document.createElement('input'))
inputAcimaDe.setAttribute('id', 'AcimaDe')
inputAcimaDe.setAttribute('class', 'inputCalc')
inputAcimaDe.setAttribute('type', 'text')

calcular3 = document.getElementById('pAcimaDe').appendChild(document.createElement('input'))
calcular3.setAttribute('value', 'calcular!')
calcular3.setAttribute('type', 'button')
calcular3.setAttribute('class', 'inputCalc')
calcular3.setAttribute('onclick', 'calcularNormal("acima")')
inputResultadoAcimaDe = document.getElementById('pAcimaDe').appendChild(document.createElement('input'))
inputResultadoAcimaDe.setAttribute('type', 'text')
inputResultadoAcimaDe.setAttribute('id', 'resultadoAcimaDe')
inputResultadoAcimaDe.setAttribute('class', 'inputCalc')


pAbaixoDe = document.getElementById('caixaInterna').appendChild(document.createElement('p'))
pAbaixoDe.setAttribute('id', 'pAbaixoDe')
text18 = document.getElementById('pAbaixoDe').appendChild(document.createElement('p'))
text18.innerText = 'Abaixo de:'
text18.style.display = 'inline-block'
inputAbaixoDe = document.getElementById('pAbaixoDe').appendChild(document.createElement('input'))
inputAbaixoDe.setAttribute('id', 'AbaixoDe')
inputAbaixoDe.setAttribute('class', 'inputCalc')
inputAbaixoDe.setAttribute('type', 'text')
calcular4 = document.getElementById('pAbaixoDe').appendChild(document.createElement('input'))
calcular4.setAttribute('value', 'calcular!')
calcular4.setAttribute('type', 'button')
calcular4.setAttribute('class', 'inputCalc')
calcular4.setAttribute('onclick', 'calcularNormal("abaixo")')
inputResultadoAbaixoDe = document.getElementById('pAbaixoDe').appendChild(document.createElement('input'))
inputResultadoAbaixoDe.setAttribute('type', 'text')
inputResultadoAbaixoDe.setAttribute('id', 'resultadoAbaixoDe')
inputResultadoAbaixoDe.setAttribute('class', 'inputCalc')

pEntre = document.getElementById('caixaInterna').appendChild(document.createElement('p'))
pEntre.setAttribute('id', 'entre')
text19 = document.getElementById('entre').appendChild(document.createElement('p'))
text19.innerText = 'Entre: '
text19.style.display = 'inline-block'
text6 = document.getElementById('entre').appendChild(document.createElement('p'))
text6.innerText = 'E: '
text6.style.display = 'inline-block'
document.getElementById('entre').appendChild(text19)
inputEntre = document.getElementById('entre').appendChild(document.createElement('input'))
inputEntre.setAttribute('id', 'valorEntre')
inputEntre.setAttribute('type', 'text')
inputEntre.setAttribute('class', 'inputCalc')
document.getElementById('entre').appendChild(text6)
inputE = document.getElementById('entre').appendChild(document.createElement('input'))
inputE.setAttribute('id', 'valorE')
inputE.setAttribute('type', 'text')
inputE.setAttribute('class', 'inputCalc')
calcular2 = document.getElementById('entre').appendChild(document.createElement('input'))
calcular2.setAttribute('type', 'button')
calcular2.setAttribute('value', 'calcular!')
calcular2.setAttribute('class', 'inputCalc')
calcular2.setAttribute('onclick', 'calcularNormal("entre")')
inputResultadoEntre = document.getElementById('entre').appendChild(document.createElement('input'))
inputResultadoEntre.setAttribute('type', 'text')
inputResultadoEntre.setAttribute('id', 'resultadoEntre')
inputResultadoEntre.setAttribute('class', 'inputCalc')