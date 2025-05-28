export {printOutString};
export {viewInTheHtml};

//Ejercicio 1
let arr = ["This", "is", "a", "sentence."];

function printOutString() {
  const list = arr.join(" ");
  const messaje = `The result is: ${list}`;
    return messaje;
}

//Complete the function to print out the string: This is a sentence.

//Mostrarlo en h3
const viewInTheHtml = (messaje) => {
   document.getElementById("result1").innerText=messaje;   
}
printOutString(viewInTheHtml);