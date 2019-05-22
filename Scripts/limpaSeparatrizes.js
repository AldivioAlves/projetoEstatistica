limpaSeparatriz = function(x){
    if (x=='Q'){
        document.getElementById('resultadoQuartil').value=''
    }
    else if(x=='K'){
        document.getElementById('resultadoQuintil').value=''
    }
    else if(x=='D'){
        document.getElementById('resultadoDecil').value=''
    }
    else{
        document.getElementById('resultadoPercentil').value=''
        document.getElementById('EntradaPercentil').value=''
    }
}