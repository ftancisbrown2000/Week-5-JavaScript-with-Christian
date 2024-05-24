const showHideBtn = document.getElementById("showHideBtn");
const image = document.getElementById("image");
const input = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");


// Function to show / hide the image
// IF Statement Version
// const toggleDisplay = () => {
//     if (image.style.display !== "none") {
//         image.style.display = "none";
//     } else {
//         image.style.display = "inline-block";
//     }
// }

// Ternary Operator Version
const toggleDisplay = () => {
    image.style.display !== "none" ? image.style.display = "none" : image.style.display = "inline-block";
}

showHideBtn.addEventListener("click", toggleDisplay);


// Create an element from input value
let outputElement = null;

submitBtn.addEventListener("click", () => {
    if (outputElement === null) {
        outputElement = document.createElement("h2");
        outputElement.innerText = input.value;
        document.body.append(outputElement);
    } else {
        outputElement.innerText = input.value;
    }
    input.value = "";
})
