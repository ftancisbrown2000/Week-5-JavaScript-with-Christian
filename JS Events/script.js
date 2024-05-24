const heading = document.getElementById("heading");
const btn = document.getElementById("btn");

// Event Listener where the process is defined as part of the event listener
heading.addEventListener("click", (event) => {
    console.log(event);
    alert("Click Detected");
});

const mouseOver = (event) => {
    heading.innerText = "Mouseover Detected!"
    heading.style.color = "Red";
    console.log(event);
}

function mouseOut(event) {
    heading.style.color = "Black";
    heading.innerText = "The mouse was previously here!";
    console.log(event);
}

// Event Listeners calling a defined function 
heading.addEventListener("mouseover", mouseOver);
heading.addEventListener("mouseout", mouseOut);


document.addEventListener("keypress", (event) => {
    // console.log(event);
    console.log(event.key);
    if (event.key === "w") {
        alert("W has been pressed!")
    }
})

btn.addEventListener("click", () => {
    let newElement = document.createElement("p");
    newElement.innerText = "I am a new element!";
    document.body.append(newElement);
})




