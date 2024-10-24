document.addEventListener('DOMContentLoaded', () => {
    const allWinnersTab = document.getElementById('allWinnersTab');
    const myHistoryTab = document.getElementById('myHistoryTab');
    const allWinnersContent = document.getElementById('allWinners');
    const myHistoryContent = document.getElementById('myHistory');
    
    // Switch tabs
    allWinnersTab.addEventListener('click', () => {
        allWinnersTab.classList.add('active');
        myHistoryTab.classList.remove('active');
        allWinnersContent.classList.add('active');
        myHistoryContent.classList.remove('active');
    });

    myHistoryTab.addEventListener('click', () => {
        myHistoryTab.classList.add('active');
        allWinnersTab.classList.remove('active');
        myHistoryContent.classList.add('active');
        allWinnersContent.classList.remove('active');
    });

    // Example Data for All Winners and My History (replace with real data)
    const allWinnersTableBody = document.querySelector('#allWinnersTable tbody');
    const myHistoryTableBody = document.querySelector('#myHistoryTable tbody');

    // Load all winners data (this can be dynamically fetched from your backend)
    const allWinnersData = [
        { rank: 1, player: 'Player1', wins: 5 },
        { rank: 2, player: 'Player2', wins: 4 },
        { rank: 3, player: 'Player3', wins: 3 }
    ];
    
    allWinnersData.forEach(winner => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${winner.rank}</td><td>${winner.player}</td><td>${winner.wins}</td>`;
        allWinnersTableBody.appendChild(row);
    });

    // Load my history data (this can be dynamically fetched from your backend)
    const myHistoryData = [
        { date: '2024-10-20', game: 'Game 1', amountWon: '$100' },
        { date: '2024-10-18', game: 'Game 2', amountWon: '$150' }
    ];
    
    myHistoryData.forEach(history => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${history.date}</td><td>${history.game}</td><td>${history.amountWon}</td>`;
        myHistoryTableBody.appendChild(row);
    });
});
