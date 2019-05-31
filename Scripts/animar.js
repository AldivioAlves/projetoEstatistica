animar = function (elemento) {
    
        animação = document.getElementById(elemento)
        

        animação.animate(
            [

                { opacity: '0' }, { opacity: '1' },

            ],

            {
                duration: 500
            }
        )
        document.getElementById(elemento).style.opacity = '1'
    


}