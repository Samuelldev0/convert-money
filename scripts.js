const convertButton = document.querySelector(".convertButton")
    const selectConvertTo = document.querySelector(".convert-to")

    function conversion(){
        let inputValue = document.querySelector("#converted-value").value

            let dolarToday = 5.53
            let eurotoday = 6.40    //valor das Moedas
            let librasToday = 7.50
            let bitcoinToday = 588.422

        let conversionDolar = inputValue / dolarToday        /*converção dolar*/
        let conversionEuro = inputValue / eurotoday         /*converção euro*/
        let conversionLibras = inputValue / librasToday     /*converçao libras*/
        let conversionBitcoin = inputValue / bitcoinToday
            
        let convertedValorReal = document.querySelector(".converted-valor-real")
        let convertedValorDolar = document.querySelector(".converted-valor-dolar")

            if(selectConvertTo.value == "dolar"){
                convertedValorDolar.innerHTML = new Intl.NumberFormat("en-US",{
                style: 'currency',
                currency: 'USD'
                }).format(conversionDolar)      
            } 

            if(selectConvertTo.value == "euro"){
                convertedValorDolar.innerHTML = new Intl.NumberFormat("de-DE",{
                style: 'currency',
                currency: 'EUR'
                }).format(conversionEuro)
            }

            if(selectConvertTo.value == "libras"){
                convertedValorDolar.innerHTML = new Intl.NumberFormat("in-UK",{
                style: 'currency',
                currency: 'GBP'
                }).format(conversionLibras)     
            }

            if(selectConvertTo.value == "bitcoin"){
                convertedValorDolar.innerHTML = new Intl.NumberFormat("de-DE",{
                style: 'currency',
                currency: 'BTC'
                }).format(conversionBitcoin)
            }

            convertedValorReal.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: 'currency',
                currency: 'BRL'
            }).format(inputValue)

            
}

const convertedCurrency = document.querySelector(".converted-currency")
const imageCurrency = document.querySelector(".currency-img")
    function elementisChanges(){
        if(selectConvertTo.value == "dolar"){
            convertedCurrency.innerHTML = "Dólar americano"
            imageCurrency.src = "./assets/dolar.png"
        }

        if(selectConvertTo.value == "euro"){
            convertedCurrency.innerHTML = "Euro",
            imageCurrency.src = "./assets/euro.png"
        }

         if(selectConvertTo.value == "libras"){
            convertedCurrency.innerHTML = "Libras",
            imageCurrency.src = "./assets/libra.png"
        }
        if(selectConvertTo.value == "bitcoin"){
            convertedCurrency.innerHTML = "Bitcoin",
            imageCurrency.src = "./assets/bitcoin.png"
        }

        conversion()
    }




selectConvertTo.addEventListener("change", elementisChanges)
convertButton.addEventListener("click", conversion)




