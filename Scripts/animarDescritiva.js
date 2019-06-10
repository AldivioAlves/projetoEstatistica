
animarDescritiva = function (solicitante) {

    CaixaD = document.getElementById('descritiva')
    tInicial = document.getElementById('descritiva').offsetHeight - 7

    if (solicitante == 'arquivo') {
        if (tArquivo) {
            return
        }
        if (tOrdinal) {
            document.getElementById('caixa').innerHTML = ''
            document.getElementById('formulario').variavel.value = "Nominal"
        }
        if (tManual) {
            tFinal = tInicial - 40
        }
        else {
            tFinal = 287
        }
        tManual = false
        tNominal = false
        tOrdinal = false
        tArquivo = true
    }

    if (solicitante == 'manual') {
        if (tManual) {
            return
        }
        if (!tDisCont) {
            tFinal = 332
        }
        if (tDisCont) {
            tFinal = 404
        }
        tManual = true
        tArquivo = false
    }

    if (solicitante == 'AP') {
        if (tDisCont) {
            return
        }
        if (!tOrdinal) {
            tFinal = tInicial + 71
        }
        else {
            tFinal = 396
        }
        tDisCont = true
        tNominal = false
        tOrdinal = false
    }

    if (solicitante == 'nominal') {
        if (tNominal) {
            return
        }
        if (tDisCont) {

            tFinal = tInicial - 71
        }
        if (tOrdinal) {
            tFinal = tInicial - Hselets - 70
        }
        tOrdinal = false
        tDisCont = false
        tNominal = true
    }

    if (solicitante == 'ordinal') {
        if (tOrdinal) {
            return
        }
        Hselets = document.getElementById('caixaSelets').offsetHeight + 21
        tFinal = String(tInicial + Hselets - 25)
        tOrdinal = true
        tNominal = false
        tDisCont = false
    }

    CaixaD.animate([{ height: String(tInicial) + 'px' }, { height: String(tFinal) + 'px' }], { duration: 100 })
}