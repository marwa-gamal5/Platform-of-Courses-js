// Get all the button elements by their IDs
const customButton1 = document.getElementById("customButton1");
const customButton2 = document.getElementById("customButton2");
const customButton3 = document.getElementById("customButton3");
const customButton4 = document.getElementById("customButton4");

// Function to handle button clicks
function handleButtonClick(selectedButton) {
    // Deselect all buttons
    [customButton1, customButton2, customButton3, customButton4].forEach(button => {
        button.classList.remove("selected");
    });

    // Toggle the 'selected' class on the clicked button
    selectedButton.classList.toggle("selected");
}

// Add click event listeners to all buttons
customButton1.addEventListener("click", function () {
    handleButtonClick(this);
});

customButton2.addEventListener("click", function () {
    handleButtonClick(this);
});

customButton3.addEventListener("click", function () {
    handleButtonClick(this);
});

customButton4.addEventListener("click", function () {
    handleButtonClick(this);
});
