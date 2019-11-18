
function updatePrice() {
    let s = document.getElementsByName("prodType");
    let select = s[0];
    let a = document.getElementById("number");
    let prodTypes = ["10", "50", "200"];
    let carrot = ["1000", "2000"];
    let prodProperties = ["6900"];
    let amount = a;
    let price = 0;
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
        price = prodTypes[priceIndex];
    }
    if (amount.value < 0) {
        amount.value = 0;
    }
    let radio = document.getElementById("radios");
    if (select.value === "1" ) {
        radio.style.display = "none";
    } else {
        radio.style.display = "block";
    }
    let radios = document.getElementsByName("carrot");
    radios.forEach(function (radio) {
        if (radio.checked) {
            let radioIndex = parseInt(radio.value) - 1;
            let optionPrice = carrot[radioIndex];
            if (optionPrice !== undefined) {
                if (select.value === "1" ) {
                    optionPrice = 0;
                }price = price*1 + optionPrice*1;
            }}});
    let check = document.getElementById("checkboxes");
    if (select.value === "1" || select.value === "2") {
        check.style.display = "none";
    } else {
        check.style.display = "block";
    }
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            let checkboxIndex = parseInt(checkbox.name) - 1;
            let propPrice = (prodProperties[checkboxIndex]);
            if (propPrice !== undefined) {
                if (select.value === "1" || select.value === "2") {
                    propPrice = 0;
                }price = price*1 + propPrice*1;
            }}});
    let prodPrice = document.getElementById("prodPrice");
    prodPrice.innerHTML = amount.value * price + " рубликов";
}


window.addEventListener("DOMContentLoaded", function () {
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";

    let s = document.getElementsByName("prodType");
    let select = s[0];
    select.addEventListener("change", function (event) {
        event = event.target;
        updatePrice();
    });
    let a = document.getElementById("number");
    let amount = a;
    amount.addEventListener("change", function (event) {
        event = event.target;
        updatePrice();
    });
    let radios = document.getElementsByName("carrot");
    radios.forEach(function (radio) {
        radio.addEventListener("change", function (event) {
            event = event.target;
            updatePrice();
        });
    });
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function (event) {
            event = event.target;
            updatePrice();
        });
    });
    updatePrice();
});