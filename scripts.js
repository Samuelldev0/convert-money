const convertButton = document.querySelector(".convertButton")
    function conversion(){
        let inputValue = document.querySelector("#converted-value").value
        let dolarToday = 5.57
        let conversion = inputValue / dolarToday    /*converção*/
            
        let convertedValorReal = document.querySelector(".converted-valor-real")
        let convertedValorDolar = document.querySelector(".converted-valor-dolar")

            convertedValorReal.innerHTML = inputValue
            convertedValorDolar.innerHTML = conversion
}






convertButton.addEventListener("click", conversion)
