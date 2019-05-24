graficoDiscreta = function(){
    contexto  = document.getElementById('graficoDiscreta')

    grafico = new Chart(contexto, {
        type:'bar',
        data:{
            labels:listaVetor,
            datasets:[{
                label:objetoDadosUsuario.nomeVar,
                data:frequenciaSimples,
                borderWidth: 2,
                borderColor: 'black',
                backgroundColor:SeletorCores(listaVetor.length),

                
            }]
        },

        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true

                    }
                }],
                xAxes: [{
                    // Change here
                    barPercentage: 1.26
                    
                }]
            }
        }



    })

        
        
        
        
        
        
        
        
        
        
        
        
        
}