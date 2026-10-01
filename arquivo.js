const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencyName = document.getElementById("currency-name");
const currencyImage = document.querySelector(".currency-img");

function convertValues() {
    const inputCurrencyValue = Number(document.querySelector(".input").value);

    const currencyValueToConvert = document.querySelector(".p4");
    const currencyValueConverted = document.querySelector(".p2");

    const dolarToday = 5.2;
    const euroToday = 5.6;
    const bitcoinToday = 550000;
    const dolarCanadenseToday = 3.8;

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

    if (currencySelect.value == "dolar") {
        const convertedValue = inputCurrencyValue / dolarToday;

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue);
    }

    if (currencySelect.value == "euro") {
        const convertedValue = inputCurrencyValue / euroToday;

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue);
    }

    if (currencySelect.value == "bitcoin") {
        const convertedValue = inputCurrencyValue / bitcoinToday;

        currencyValueConverted.innerHTML = convertedValue.toFixed(8) + " BTC";
    }

    if (currencySelect.value == "dolar-canadense") {
        const convertedValue = inputCurrencyValue / dolarCanadenseToday;

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(convertedValue);
    }
}

function changeCurrency() {
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImage.src = "./assets/estados-unidos (1) 1.png";
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "assets/images-removebg-preview.png";
    }

    if (currencySelect.value == "dolar-canadense") {
        currencyName.innerHTML = "Dólar Canadense";
        currencyImage.src = "assets/canadian-dollar-removebg-preview.png";
    }
    convertValues ()
}

convertButton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", changeCurrency);