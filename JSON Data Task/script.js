const getBtn = document.getElementById("getBtn");

const myObject = {
    name: "Joe Bloggs",
    age: 35,
    city: "Birmingham",
    imageURL: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700524800&semt=sph"
};

localStorage.setItem("user", JSON.stringify(myObject));

let userCard = null;

getBtn.addEventListener("click", () => {
    if (userCard === null) {
        // Storing the parsed data from local via the getItem method
        let userInfo = JSON.parse(localStorage.getItem("user"));
        // Creating the div to house the image and p tag
        userCard = document.createElement("div");
        // Creating the image and p elements
        let userImage = document.createElement("img");
        let userDetails = document.createElement("p");
        // Add the image and p elements to the userCard div
        userCard.append(userImage, userDetails);
        userImage.setAttribute("src", userInfo.imageURL);
        userDetails.innerText = `
        Name: ${userInfo.name}
        Age: ${userInfo.age}
        City: ${userInfo.city}`;
        document.body.append(userCard);
    }
})