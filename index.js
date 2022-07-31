const btnFormat = document.querySelector(".button--format");
const btnClear = document.querySelector(".button--clear");

function stringify(obj) {
  if (typeof obj === "string") {
    return `"${obj}"`;
  }

  if (typeof obj === "number" || typeof obj === "boolean") {
    return `${obj}`;
  }

  if (Array.isArray(obj)) {
    let res = "[";
    for (let i = 0; i < obj.length; i++) {
      res += `${stringify(obj[i])},`;
    }

    res = `${res.substring(0, res.length - 1)}]`;
    return res;
  }


  let res = `{`;
  for (let key in obj) {
    res += `"${key}":${stringify(obj[key])},`;
  }

  res = `${res.substring(0, res.length - 1)}}`;
  return res;
}

btnFormat.addEventListener("click", () => {
    const str = inputArea.value;
    function isJSON(text) {
        if (0 == text.trim().length) return outputArea.value = "error Sorry, Input is Empty.";
        try {
            const e =stringify(JSON.parse(inputArea.value,null,4));
            // console.log(JSON.parse(stringifyJSON(inputArea.value)))
            // const e =JSON.parse(stringifyJSON(str));
            outputArea.value = e;
            outputArea.style.color = "green";
        }
	@@ -57,20 +26,3 @@ btnClear.addEventListener("click", () => {
    outputArea.value = "";

})
