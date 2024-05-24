const keyInput = document.getElementById('keyInput');
const valueInput = document.getElementById('valueInput');
const submitBtn = document.getElementById('submitBtn');
const deleteBtn = document.getElementById('deleteBtn');
const storageOutput = document.getElementById('storageOutput');
const searchInput = document.getElementById('searchInput');
const searchOutput = document.getElementById('searchOutput');
const searchBtn = document.getElementById('searchBtn');

// Save to LS function
const saveToLocalStorage = () => {
    let key = keyInput.value;
    let value = valueInput.value;
    if (key && value) {
        localStorage.setItem(key, value);
    }
}

// Call the Save to LS function on click of the submitBtn
submitBtn.addEventListener('click', saveToLocalStorage);

// Clear local storage
const clearLocalStorage = () => {
    localStorage.clear();
    location.reload();
}

// Call the clear local storage function on click
deleteBtn.addEventListener("click", clearLocalStorage);

// Loop over LS object and create elements for each k/v pair
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    let lsItem = document.createElement("h3");
    lsItem.innerText = `${key} : "${value}"`;
    storageOutput.append(lsItem);
}

// Search through local storage via the key
let searchResultElement = null;

const searchLocalStorage = (e) => {
    e.preventDefault();
    let key = searchInput.value;
    let value = localStorage.getItem(key);

    if (searchResultElement === null) {
        searchResultElement = document.createElement("h3");
        searchResultElement.innerText = `RESULT: ${key} : "${value}"`;
        searchOutput.append(searchResult);
    } else {
        searchResultElement.innerText = `RESULT: ${key} : "${value}"`;
    }

    if (value === null) {
        searchResultElement.innerText = `No results found...`;
    }
    searchInput.value = "";
}

searchBtn.addEventListener("click", searchLocalStorage);
