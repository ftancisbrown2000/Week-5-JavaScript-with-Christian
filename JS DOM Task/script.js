// Select the h1 from the Document using querySelector()
const heading = document.querySelector("h1");

// Add an ID to the element 
heading.setAttribute("id", "heading");

// Update the styling
heading.style.backgroundColor = "Aqua";

// Update the text content
heading.innerText = "New Text Content";

// Create the UL to store our li's 
const ul = document.createElement("ul");

// Add the ul element created above to the body of our document
document.body.append(ul);

// Use a loop to create 3 list items, style them and update the text content
for (let i = 0; i < 3; i++) {
    let li = document.createElement("li");
    li.style.color = "Blue";
    li.innerText = `List Item ${i + 1}`;
    ul.append(li);
}

// Remove the heading with a dom method
heading.remove();

