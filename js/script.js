
function shuffleArray(array) { // Shuffle an Array //
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}


function clearBoard() { // Clear Current Game Board //
    document.getElementById("board").classList.remove("police-starter", "thug-starter");

    let board = document.querySelectorAll('#overlay .square');

    for (square of board) {
        square.classList.remove("rat", "civilian", "police", "thug")
    }
}


function newBoard() { // Create a New Board //
    // Clean Board //
    clearBoard();

    // Create and Shuffle New Board //
    let newBoard = ['rat', 'civilian', 'civilian', 'civilian', 'civilian', 'civilian', 'civilian', 'civilian'];

    const starter = (Math.random() * 100).toFixed(0);

    if (starter % 2 == 0) { // Police Start
        newBoard.push(...['police', 'police', 'police', 'police', 'police', 'police', 'police', 'police', 'police']);
        newBoard.push(...['thug', 'thug', 'thug', 'thug', 'thug', 'thug', 'thug', 'thug']);

        document.getElementById("board").classList.add("police-starter");
    }
    else { // Thugs Start
        newBoard.push(...['thug', 'thug', 'thug', 'thug', 'thug', 'thug', 'thug', 'thug', 'thug']);
        newBoard.push(...['police', 'police', 'police', 'police', 'police', 'police', 'police', 'police']);

        document.getElementById("board").classList.add("thug-starter");
    }

    const shuffledNewBoard = shuffleArray(newBoard);

    // Populate Board //
    let board = document.querySelectorAll('#overlay .square');

    for (i = 0; i != board.length; i++) {
        board[i].classList.add(shuffledNewBoard[i])
    }
}
