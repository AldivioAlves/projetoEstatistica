
contexto= document.getElementById('grafico')
grafico = new Chart(contexto, {
    type: 'line',
    data: {
        datasets: [{
            label: 'X',
            data: IeFlinha,
            fill: false,
            backgroundColor:'blue',
            borderColor:'blue' ,
            pointRadius: 0
        },
        {
            type: 'bubble',
            label: 'Y:',
            data:vetorPontos,
            backgroundColor: "rgba(76,78,80, .7)",
            borderColor: "transparent",

        }]
},
    // legenda tirada com legend:false foda-se
    options: {
        legend: {
            display: false
        },
        scales: {
            
            xAxes: [{
                type:'linear',
                position:'bottom'


            }]
        }
    }



})



    
    
