let risk = document.getElementById("risk")
let stoploss = document.getElementById("stoploss")
let calculate = document.getElementById("btn")
let formElement = document.getElementById("form-element")
let error = document.getElementById("error")
let result = document.getElementById("result")

let formData = {
    riskValue: "",
    stoplossValue: ""
}

risk.addEventListener("change", function (event) {
    formData.riskValue = event.target.value
})

stoploss.addEventListener("change", function (event) {
    formData.stoplossValue = event.target.value
})




function validateForm(formData) {
    let { riskValue, stoplossValue } = formData
    if (riskValue.trim() === "" || stoplossValue.trim() === "") {
        error.textContent = "fields cannot be empty"
    }
    else {
        error.textContent = ""
        submitForm(formData)
    }

}

function submitForm(formData) {
    let { riskValue, stoplossValue } = formData
    let value = Math.floor(parseFloat(riskValue) / +parseFloat(stoplossValue))
    result.innerHTML = `Risk- ${riskValue} <br>
    Stoploss- ${stoplossValue}<br>
    You should buy or sell ${value} quantities`;
    risk.value=''
    stoploss.value=''


}



formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm(formData)

});