var btnTranslate = document.querySelector("#translate-button");
var txtInput = document.querySelector("#translate-input");
var outputDiv = document.querySelector("#translate-output");
// console.log(btnTranslate);
// console.log(txtInput);
// console.log(outputDiv);

var serverURL = "https://api.funtranslations.com/translate/uk2us.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error ocurred", error)
    alert("Something's wrong , try later!")
}

function clickHandler() {
    var inputText = txtInput.value; //taking input


    //call for data
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            console.log(json);
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;

        })
        .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler) 