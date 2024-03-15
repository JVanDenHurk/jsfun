// Get the button and span elements by their IDs
const clickCountSpan = document.getElementById('clickCount');

const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
const colourButton = document.getElementById('colourButton');

const colours = ["","blue", "green", "red"];

// Initialize a counter variable
let clickCount = 0;
let colourCount = 0;


// Function to increment the counter and update the display
function incrementCounter() {
  clickCount++; // Increment the counter
  clickCountSpan.textContent = clickCount; // Update the text content of the span element
}

// Function to decrement the counter and update the display
function decrementCounter() {
    clickCount--; // Increment the counter
    clickCountSpan.textContent = clickCount; // Update the text content of the span element
}

function changeColour(){ 
    
    if(colourCount <= 2)
    {
        colourCount++
        clickCountSpan.style.color = colours[colourCount];
    }
    else 
    {
        colourCount = 0;
    }
}

// Attach an event listener to the button to listen for clicks
incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);
colourButton.addEventListener('click', changeColour);