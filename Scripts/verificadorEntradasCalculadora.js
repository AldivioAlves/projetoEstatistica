verificadorEntradas = function (x) {
    if (x == 'Nacima') {
        if (document.getElementById('inputMediaNormal').value == '' || isNaN(document.getElementById('inputMediaNormal').value)) {
            alert('Verifique a entrada da Media \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }
        if (document.getElementById('inputDesvioNormal').value == '' || isNaN(document.getElementById('inputDesvioNormal').value)) {
            alert('Verifique a entrada do Desvio \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }
        if (document.getElementById('AcimaDe').value == '' || isNaN(document.getElementById('AcimaDe').value)) {
            alert('Verifique a entrada da Entrada "Acima de". \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }


    }
    else if (x == 'Nabaixo') {
        if (document.getElementById('inputMediaNormal').value == '' || isNaN(document.getElementById('inputMediaNormal').value)) {
            alert('Verifique a entrada da Media \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }
        if (document.getElementById('inputDesvioNormal').value == '' || isNaN(document.getElementById('inputDesvioNormal').value)) {
            alert('Verifique a entrada do Desvio \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }
        if (document.getElementById('AbaixoDe').value == '' || isNaN(document.getElementById('AcimaDe').value)) {
            alert('Verifique a entrada da Entrada "Abaixo de". \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }

    }
    else if (x == 'Nentre') {

        if (document.getElementById('inputMediaNormal').value == '' || isNaN(document.getElementById('inputMediaNormal').value)) {
            alert('Verifique a entrada da Media \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }
        if (document.getElementById('inputDesvioNormal').value == '' || isNaN(document.getElementById('inputDesvioNormal').value)) {
            alert('Verifique a entrada do Desvio \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }
        if (document.getElementById('valorEntre').value == '' || isNaN(document.getElementById('AcimaDe').value)) {
            alert('Verifique a entrada da Entrada "Entre". \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }
        if (document.getElementById('valorE').value == '' || isNaN(document.getElementById('AcimaDe').value)) {
            alert('Verifique a entrada da Entrada "E". \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }
    }
    else if (x == 'Bmedia') {
        if (document.getElementById('inputTamanhoDaAmostra').value == '' || isNaN(document.getElementById('inputTamanhoDaAmostra').value)) {
            alert('Verifique o campo "Tamanho da Amostra". \nO campo não pode estar vazio ou com valores que não seja numero.')
            return -1
        }
        else if (document.getElementById('inputSucesso').value == '' || isNaN(document.getElementById('inputSucesso').value)) {
            alert('Verifique o campo "Sucesso."\nO campo não pode estar vazio ou com valores que não seja numero.')
            return -1
        }
        else if (document.getElementById('inputFracasso').value == '' || isNaN(document.getElementById('inputFracasso').value)) {
            alert('Verifique o campo "Fracasso."\nO campo não pode estar vazio ou com valores que não seja numero.')
            return -1
        }

    }
    else if (x == 'Bdesvio') {
        if (document.getElementById('inputTamanhoDaAmostra').value == '' || isNaN(document.getElementById('inputTamanhoDaAmostra').value)) {
            alert('Verifique o campo "Tamanho da Amostra". \nO campo não pode estar vazio ou com valores que não seja numero.')
            return -1
        }
        else if (document.getElementById('inputSucesso').value == '' || isNaN(document.getElementById('inputSucesso').value)) {
            alert('Verifique o campo "Sucesso."\nO campo não pode estar vazio ou com valores que não seja numero.')
            return -1
        }
        else if (document.getElementById('inputFracasso').value == '' || isNaN(document.getElementById('inputFracasso').value)) {
            alert('Verifique o campo "Fracasso."\nO campo não pode estar vazio ou com valores que não seja numero.')
            return -1
        }



    }
    else if (x == 'Bprob') {
        if (document.getElementById('inputTamanhoDaAmostra').value == '' || isNaN(document.getElementById('inputTamanhoDaAmostra').value)) {
            alert('Verifique o campo "Tamanho da Amostra". \nO campo não pode estar vazio ou com valores que não seja numero.')
            return -1
        }
        if (document.getElementById('inputSucesso').value == '' || isNaN(document.getElementById('inputSucesso').value)) {
            alert('Verifique o campo "Sucesso."\nO campo não pode estar vazio ou com valores que não seja numero.')
            return -1
        }
        if (document.getElementById('inputFracasso').value == '' || isNaN(document.getElementById('inputFracasso').value)) {
            alert('Verifique o campo "Fracasso."\nO campo não pode estar vazio ou com valores que não seja numero.')
            return -1
        }

        for (i = 0; i < k.length; i++) {
            if (isNaN(k[i])) {
                alert('Verifique o campo "Evento".\n-O campo não pode estar vazio\n-Com valores que não seja numeros separados por ";"')
                return -1

            }
        }




    }
    else if (x == 'Umedia') {
        if (minimoValorUniforme=='' || isNaN(minimoValorUniforme)){
            alert('Verifique a entrada "valor minimo" \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1
        }
        if (maximoValorUniforme== '' || isNaN(maximoValorUniforme)) {
            alert('Verifique a entrada "valor maximo" \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }

    }
    else if (x == 'Udesvio') {
        if (document.getElementById('inputValorMinimo').value == '' || isNaN(document.getElementById('inputValorMinimo').value)) {
            alert('Verifique a entrada "valor minimo" \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }
        if (document.getElementById('inputValorMaximo').value == '' || isNaN(document.getElementById('inputValorMaximo').value)) {
            alert('Verifique a entrada "valor maximo" \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }

    }
    if (x == 'Uacima') {
        if (document.getElementById('inputValorMinimo').value == '' || isNaN(document.getElementById('inputValorMinimo').value)) {
            alert('Verifique a entrada "valor minimo" \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }
        if (document.getElementById('inputValorMaximo').value == '' || isNaN(document.getElementById('inputValorMaximo').value)) {
            alert('Verifique a entrada "valor maximo" \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }
        if (document.getElementById('AcimaDe').value == '' || isNaN(document.getElementById('AcimaDe').value)) {
            alert('Verifique a entrada da Entrada "Acima de". \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }


    }
    else if (x == 'Uabaixo') {
        if (document.getElementById('inputValorMinimo').value == '' || isNaN(document.getElementById('inputValorMinimo').value)) {
            alert('Verifique a entrada "valor minimo" \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }
        if (document.getElementById('inputValorMaximo').value == '' || isNaN(document.getElementById('inputValorMaximo').value)) {
            alert('Verifique a entrada "valor maximo" \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }
        if (document.getElementById('AbaixoDe').value == '' || isNaN(document.getElementById('AcimaDe').value)) {
            alert('Verifique a entrada da Entrada "Abaixo de". \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }

    }
    else if (x == 'Uentre') {

        if (document.getElementById('inputValorMinimo').value == '' || isNaN(document.getElementById('inputValorMinimo').value)) {
            alert('Verifique a entrada "valor minimo" \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }
        if (document.getElementById('inputValorMaximo').value == '' || isNaN(document.getElementById('inputValorMaximo').value)) {
            alert('Verifique a entrada "valor maximo" \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }
        if (document.getElementById('valorEntre').value == '' || isNaN(document.getElementById('valorEntre').value)) {
            alert('Verifique a entrada da Entrada "Entre". \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }
        if (document.getElementById('valorE').value == '' || isNaN(document.getElementById('valorEntre').value)) {
            alert('Verifique a entrada da Entrada "E". \n O campo não pode estar vazio ou com valores que não seja numero')
            return -1

        }
    }

}