document.addEventListener('DOMContentLoaded', () => {
    const numberGrid = document.querySelector('.number-grid');
    const selectedNumberDisplay = document.getElementById('selected-number');
    const playButton = document.getElementById('play-button');
    let selectedNumber = null;

    // Create buttons for numbers 0-9
    for (let i = 0; i <= 9; i++) {
        const button = document.createElement('button');
        button.classList.add('number-button');
        button.textContent = i;

        // Add click event listener
        button.addEventListener('click', () => {
            selectedNumber = i;
            selectedNumberDisplay.textContent = `You selected: ${selectedNumber}`;
            highlightSelectedButton(button);
        });

        numberGrid.appendChild(button);
    }

    // Play button event listener
    playButton.addEventListener('click', () => {
        if (selectedNumber !== null) {
            selectedNumberDisplay.textContent = `You are playing with number: ${selectedNumber}`;
            // Add your game logic here
        } else {
            selectedNumberDisplay.textContent = 'Please select a number first!';
        }
    });

    // Function to highlight the selected button
    function highlightSelectedButton(selectedButton) {
        // Remove 'selected' class from all buttons
        const allButtons = document.querySelectorAll('.number-button');
        allButtons.forEach(btn => btn.classList.remove('selected'));
        
        // Add 'selected' class to the clicked button
        selectedButton.classList.add('selected');
    }
});
