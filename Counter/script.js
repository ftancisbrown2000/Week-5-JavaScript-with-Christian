const addBtn = document.getElementById('addBtn');
const minusBtn = document.getElementById('minusBtn');
const countDisplay = document.getElementById('countDisplay');

let count = 0;

const updateCounter = () => {
    countDisplay.innerText = count;
}

addBtn.addEventListener("click", () => {
    count++;
    console.log(count);
    updateCounter();
})

minusBtn.addEventListener("click", () => {
    count--;
    console.log(count);
    updateCounter();
})

