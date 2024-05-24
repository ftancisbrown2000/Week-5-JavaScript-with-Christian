// Document Object Model

// Document
console.log(document);

// getElementById()
const heading = document.getElementById("heading");
console.log(heading);

// getElementsByClassName()
const listItems = document.getElementsByClassName("listItems");
console.log(listItems);

// getElementsByTagName()
const liElements = document.getElementsByTagName("li");
console.log(liElements);

// querySelector()
// ONLY selects the first instance that matches the argument
const para = document.querySelector("p");
console.log(para);

// querySelectorAll()
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

// Style an element via the DOM
heading.style.color = "Red";
heading.style.backgroundColor = "Yellow";

// Style multiple elements via the DOM
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "Orange";
    paragraphs[i].style.backgroundColor = "Red";
}

// Update the text Content of an element via the DOM
heading.innerText = "JavaScript DOM";

// Create a new element via the DOM
// Select the UL element to store our new list item
const ul = document.querySelector("ul");

// Create a new element to add to our UL
// NOTE: Elements created via the DOM are not automatically added to the Document
const newListItem = document.createElement("li");
console.log(newListItem);

// Append - Allows us to add elements to the document at a specified location
ul.append(newListItem);

// Update the inner text of the crehttps://justit831.sharepoint.com/sites/msteams_e04e38/_layouts/15/stream.aspx?id=%2Fsites%2Fmsteams%5Fe04e38%2FShared%20Documents%2FGeneral%2FRecordings%2FWeek%205%20%2D%20JavaScript%20%28AM%20Session%29%2D20240520%5F102615%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ee265ad31%2D0510%2D45c0%2D96c0%2D7901cd940483ated list item
newListItem.innerText = "*NEW* Item 5";

// Add a class via the DOM
newListItem.classList.add("listItems");

// Add an attribute via the DOM
newListItem.setAttribute("id", "item5");

// Remove an attribute via the DOM
newListItem.removeAttribute("id");

// Remove a class via the dom
newListItem.classList.remove("listItems");

// Remove an element from the DOM
newListItem.remove();

