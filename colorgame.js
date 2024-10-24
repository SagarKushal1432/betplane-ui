document.addEventListener('DOMContentLoaded', () => {
    const myHistoryTab = document.getElementById('myHistoryTab');
    const previousResultsTab = document.getElementById('previousResultsTab');
    const myHistoryContent = document.getElementById('myHistory');
    const previousResultsContent = document.getElementById('previousResults');

    // Switch tabs
    myHistoryTab.addEventListener('click', () => {
        myHistoryTab.classList.add('active');
        previousResultsTab.classList.remove('active');
        myHistoryContent.classList.add('active');
        previousResultsContent.classList.remove('active');
    });

    previousResultsTab.addEventListener('click', () => {
        previousResultsTab.classList.add('active');
        myHistoryTab.classList.remove('active');
        previousResultsContent.classList.add('active');
        myHistoryContent.classList.remove('active');
    });

    // Example Data for My History
    const myHistoryData = [
        { date: '2024-10-20 14:30', color: 'Blue', status: 'Won' },
        { date: '2024-10-18 16:00', color: 'Green', status: 'Lost' }
    ];
    
    const myHistoryTableBody = document.querySelector('#myHistoryTable tbody');
    myHistoryData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${entry.date}</td><td>${entry.color}</td><td>${entry.status}</td>`;
        myHistoryTableBody.appendChild(row);
    });

    // Example Data for Previous Results
    const previousResultsData = [
        { dateTime: '2024-10-19 12:00', color: 'Light Blue' },
        { dateTime: '2024-10-20 11:00', color: 'Light Green' },
        { dateTime: '2024-10-21 10:00', color: 'Light Purple' }
    ];

    const previousResultsTableBody = document.querySelector('#previousResultsTable tbody');
    previousResultsData.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${result.dateTime}</td><td>${result.color}</td>`;
        previousResultsTableBody.appendChild(row);
    });
});

// Function to select a ball
function selectBall(color) {
    document.getElementById('selected-ball').innerText = color;
    document.getElementById('popup-selected-ball').innerText = color;
    document.getElementById('bet-popup').style.display = 'block'; // Show the popup
}

// Function to close the popup
function closePopup() {
    document.getElementById('bet-popup').style.display = 'none'; // Hide the popup
}

// Function to change the bet amount
function changeAmount(amount) {
    const amountInput = document.getElementById('bet-amount');
    let currentAmount = parseInt(amountInput.value);
    currentAmount += amount;
    if (currentAmount < 0) currentAmount = 0; // Prevent negative amounts
    amountInput.value = currentAmount;
}

// Function to confirm the bet
function confirmBet() {
    const selectedBall = document.getElementById('popup-selected-ball').innerText;
    const betAmount = document.getElementById('bet-amount').value;
    if (selectedBall !== 'None' && betAmount > 0) {
        const date = new Date();
        const dateString = date.toLocaleString();
        const myHistoryTableBody = document.querySelector('#myHistoryTable tbody');
        const myHistoryRow = document.createElement('tr');
        myHistoryRow.innerHTML = `<td>${dateString}</td><td>${selectedBall}</td><td>Won</td>`;
        myHistoryTableBody.appendChild(myHistoryRow);
        alert(`You placed a bet of ₹${betAmount} on the ${selectedBall} ball!`);
        closePopup(); // Close the popup after confirming
    } else {
        alert('Please select a ball and enter a valid amount!');
    }
}
