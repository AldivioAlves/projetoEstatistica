
contexto= document.getElementById('grafico')
grafico = new Chart(contexto, {
    type: 'line',
    data: {
        datasets: [{
            label: 'X',
            data: IeFlinha,
            fill: false,
            backgroundColor:'blue',
            borderColor:'red' ,
            pointRadius: 0,
            
        },
        {
            type: 'bubble',
            label: 'y',
            
            data:vetorPontos,
            backgroundColor: "black",
            borderColor: "blue",

        }]
},
    // legenda tirada com legend:false foda-se
    options: {
        legend: {
            display: false
        },
        tooltips:{
            mode:'nearest',
            backgroundColor:"black"

        },

        scales: {
            
            xAxes: [{
                type:'linear',
                position:'bottom'


            }]
        }
    }



})



    
    
