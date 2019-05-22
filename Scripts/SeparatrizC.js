Separatriz= function (x){
    objetoTiposDeValores={
        'D1':0.1,'D2':0.2,'D3':0.3,'D4':0.4,'D5':0.5,
        'D6':0.6,'D7':0.7,'D8':0.8,'D9':0.9,'D10':1,
        'k1':0.2,'k2':0.4,'k3':0.6,'k4':0.8,'k5':1,
        'Q1':0.25,'Q2':0.5,'Q3':0.75,'Q4':1
    }


    if(x=='Q'){
      //  objetoTiposDeValores={'Q1':0.25,'Q2':0.5,'Q3':0.75,'Q4':1} 
        document.getElementById('resultadoQuartil').value=""
        Prequisitado = objetoTiposDeValores[document.MedidasSeparatrizQuartil.medidasQ.value]*vetor.length
        idResultado = 'resultadoQuartil'
    }
    else if(x=='K'){
       // objetoTiposDeValores={'k1':0.2,'k2':0.4,'k3':0.6,'k4':0.8,'k5':1}
        document.getElementById('resultadoQuintil').value=""
        Prequisitado = objetoTiposDeValores[document.MedidasSeparatrizQuintil.medidasK.value]*vetor.length
        idResultado='resultadoQuintil'
    }
    else if(x=='D'){
       // objetoTiposDeValores={'D1':0.1,'D2':0.2,'D3':0.3,'D4':0.4,'D5':0.5,
        //'D6':0.6,'D7':0.7,'D8':0.8,'D9':0.9,'D10':1}
        document.getElementById('resultadoDecil').value=""
        Prequisitado = objetoTiposDeValores[document.MedidasSeparatrizDecil.medidasD.value]*vetor.length
        idResultado='resultadoDecil'
    }
    else{
        valorDigitado = document.getElementById('EntradaPercentil').value
        if(valorDigitado.length ==0 || valorDigitado==0 || isNaN(valorDigitado)==true){
            alert('Digite um valor numérico acima de 0')
        }
        else{
            Prequisitado= (valorDigitado/100)* vetor.length
        } 
        idResultado='resultadoPercentil'
    }




    // frequencia acumulada que contem o resultado de Qrequisitado
    indiceposiçãoP=0
    for (i=1;i<=vetorFrequenciaSimplesAcumulada.length;i++){
        if (Prequisitado<=vetorFrequenciaSimplesAcumulada[i-1]){
            classePrequisitado = i-1
            break
        }
        indiceposiçãoP++
    }
    fiClassePrequisitado= objetoVetor[`${vetorIntervalos[classePrequisitado][0]} |-- ${vetorIntervalos[classePrequisitado][1]}`].length
    I= vetorIntervalos[classePrequisitado][0]
    if (indiceposiçãoP==0){
        facAnterior = 0
    }
    else{
        facAnterior = vetorFrequenciaSimplesAcumulada[classePrequisitado-1]
    }
    // intervalo de classes
    h = IntervaloClasses
    //formula aplicada
    Resultado = I + (((Prequisitado - facAnterior)/fiClassePrequisitado)*h)
    //arredondando valor. 
    Resultado = parseFloat(Resultado.toFixed(2))
    document.getElementById(idResultado).value=Resultado



	
}

