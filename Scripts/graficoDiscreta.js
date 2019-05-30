graficoDiscreta = function(){

    contexto  = document.getElementById('graficoDiscreta')
    borda='black'
    if (objetoDadosUsuario.Variavel=='Discreta'){
        entreBarras = 1
        tipoGrafico='bar'

    }
    else if(objetoDadosUsuario.Variavel=='Continua'){
        entreBarras = 1.26
        tipoGrafico='bar'
    }
    else{
        tipoGrafico='pie'
        entreBarras=0
        
    }


    grafico = new Chart(contexto, {
        type:tipoGrafico,
        data:{
            labels:listaVetor,
            datasets:[{
                label:objetoDadosUsuario.nomeVar,
                data:frequenciaSimples,
                borderWidth: 2,
                borderColor: borda,
                backgroundColor:SeletorCores(listaVetor.length),

                
            }]
        },
// legenda tirada com legend:false foda-se
        options: {
            legend:{
                display:false
            },
            scales: {
                yAxes: [{
                    

                    ticks: {
                        beginAtZero: true

                    }
                }],
                xAxes: [{
                    
                    barPercentage: entreBarras,
                    gridLines:{display:false}
                    
                }]
            }
        }



    })
   
        
        
}