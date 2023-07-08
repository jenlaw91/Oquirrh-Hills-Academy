// Setting Initial values
const spanText = document.getElementById("number");
let currentValue = spanText.textContent;

function onPress(){
   currentValue++;
   spanText.textContent = currentValue;
}
