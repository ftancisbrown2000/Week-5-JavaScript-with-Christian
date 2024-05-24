// Create a JS object
const myObject = {
    name: "Christian",
    age: 31,
    city: "Manchester"
}

console.log(myObject);

// Convert the JS object to JSON string
let jsonObject = JSON.stringify(myObject);

console.log(jsonObject);

// Convert JSON string data back into a workable JS object
let convertedJson = JSON.parse(jsonObject);

console.log(convertedJson.name);