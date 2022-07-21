const inputArea = document.querySelector(".large-area--input");
const outputArea = document.querySelector(".large-area--output");
const btnFormat = document.querySelector(".button--format");
const btnClear = document.querySelector(".button--clear");

btnFormat.addEventListener("click", () => {
    const str = inputArea.value;
    function isJSON(text) {
        if (0 == text.trim().length)  return outputArea.value="error Sorry, Input is Empty.";
        try {
            const e = JSON.stringify(JSON.parse(inputArea.value), null, 4);
            outputArea.value = e;
            outputArea.style.color="green";
        }
        catch (e) {
            console.log(e);
            outputArea.style.color="red";
           return outputArea.value=(e.message)
        }
    }
    isJSON(str); 
});

btnClear.addEventListener("click", () => {
    inputArea.value = "";
    outputArea.value = "";

})
// {
//     "id": "0001",
//     "type": "donut",
//     "name": "Cake",
//     "ppu": 0.55,
//     "batters":
//     {"batter":[
//     {"id": 1001, "type": "Regular" },
//     {"id": 1002, "type": "Chocolate" },
//     {"id": 1003, "type": "Blueberry" },
//     {"id": 1004, "type": "Devil's Food"}
//     ]},
//     "topping":[
//     {"id": 5001, "type": "None"},
//     {"id": 5002, "type": "Glazed" },
//     {"id": 5005, "type": "Sugar" },
//     {"id": 5007, "type": "Powdered Sugar" },{ "id": "5006", "type": "Chocolate with Sprinkles" },{ "id": "5003" ,"type": "Chocolate" },{ "id": "5004", "type": "Maple" }]}
