graficoDiscreta = function(){
    contexto  = document.getElementById('graficoDiscreta')

    grafico = new Chart(contexto, {
        type:'bar',
        data:{
            labels:listaVetor,
            datasets:[{
                label:objetoDadosUsuario.nomeVar,
                data:frequenciaSimples,
                borderWidth: 4,
                borderColor: 'blue',
                backgroundColor:'#272822',
                
            }]
        },

        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }



    })

        
        
        
        
        
        
        
        
        
        
        
        
        
}