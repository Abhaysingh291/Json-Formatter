const inputArea = document.querySelector(".large-area--input");
const outputArea = document.querySelector(".large-area--output");
const btnFormat = document.querySelector(".button--format");
const btnClear = document.querySelector(".button--clear");

btnFormat.addEventListener("click", () => {
    const str = inputArea.value;
    function isJSON(text) {
        if (0 == text.trim().length) return outputArea.value = "error Sorry, Input is Empty.";
        try {
          const e=JSON.stringify(JSON.parse(inputArea.value), null, 4);
            outputArea.value = e;
            outputArea.style.color = "green";
        }
        catch (e) {
            console.log(e);
            outputArea.style.color = "red";
            return outputArea.value = (e.message)
        }
    }
    isJSON(str);
});

btnClear.addEventListener("click", () => {
    inputArea.value = "";
    outputArea.value = "";

})
