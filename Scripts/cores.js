SeletorCores= function(qtdElementos){
    Combinações= '0123456789ABCDEF'
    cor = ''
    vetorCor =[]

    for(i=0;i<qtdElementos.length;i++){
        for(j=0;j<16;j++){
            cor+=Combinações[Math.floor(Math.random() * 16)]
        }
        if(vetorCor.indexOf(cor)!=-1){
            i-=1
            cor =''
        }
        else{
            vetorCor.push(cor)
            cor=''
        }
    }
    return vetorCor
}
