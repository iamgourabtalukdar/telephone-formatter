const contactInput = document.querySelector("input[name='contact-input']");

let prevValue = "";

function telephoneFormat(e){
  const telInputElem = e.target;
  let inputValue = telInputElem.value;

  if (isNaN(e.data)) {
    telInputElem.value = inputValue.split(e.data).join("");
  }

  if (telInputElem.value.length === 4 && prevValue.length <= inputValue.length) {

    telInputElem.value = `+(${inputValue.substring(0,3)}) - ${inputValue.substring(3, inputValue.length)}`;
    inputValue = telInputElem.value;

  } else if (telInputElem.value.length === 9 && prevValue.length > inputValue.length) {
    telInputElem.value = inputValue.substring(2, 5);
  }

  prevValue = inputValue;
}

contactInput.addEventListener("input", telephoneFormat);