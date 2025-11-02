//your code here

function swapTheme() {
    const appDiv = document.getElementById('app');
    const swapButton = document.getElementById('swap');

    // Check if the current theme is day
    if (appDiv.classList.contains('day')) {
        // Change to night theme
        appDiv.classList.remove('day');
        appDiv.classList.add('night');
        swapButton.classList.remove('button_day');
        swapButton.classList.add('button_night');
        swapButton.textContent = "Switch to Light Theme"; // Change button text if needed
    } else {
        // Change to day theme
        appDiv.classList.remove('night');
        appDiv.classList.add('day');
        swapButton.classList.remove('button_night');
        swapButton.classList.add('button_day');
        swapButton.textContent = "Switch to Dark Theme"; // Change button text if needed
    }
}

// Add event listener to the button
document.getElementById('swap').addEventListener('click', swapTheme);