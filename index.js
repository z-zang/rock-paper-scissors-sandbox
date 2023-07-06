const getRandomMove = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };
  
  const getOutcome = (moveOne, moveTwo) => {
    if (moveOne === moveTwo) {
      return "It's a draw!";
    }
  
    if (
      (moveOne === "scissors" && moveTwo === "paper") ||
      (moveOne === "rock" && moveTwo === "scissors") ||
      (moveOne === "paper" && moveTwo === "rock")
    ) {
      return "Player One wins!";
    }
  
    return "Player Two wins!";
  };
  
  // Removing elements (nodes) from the DOM
  const resetGame = () => {
    console.log('reset game')

    if (document.getElementById("outcome")) {
        console.log('remove element')
      const outcome = document.getElementById("outcome")
      document.body.removeChild(outcome);
    }
  };
  
  const playGame = () => {
    resetGame();
    console.log('hi')
    const playerOneMove = getRandomMove();
    const playerTwoMove = getRandomMove();
    const outcome = getOutcome(playerOneMove, playerTwoMove);
    updateDOM(playerOneMove, playerTwoMove, outcome);
  };
  
  const updateDOM = (moveOne, moveTwo, outcome) => {
    const playerOneImg = document.getElementById('player-one-move__img')
    playerOneImg.src = `images/${moveOne}.png`
    const playerOneText = document.getElementById('player-one-move__name')
    playerOneText.innerText = moveOne
    const playerTwoImg = document.getElementById('player-two-move__img')
    playerTwoImg.src = `images/${moveTwo}.png`
    const playerTwoText = document.getElementById('player-two-move__name')
    playerTwoText.innerText = moveTwo

    const node = document.createElement("p");
    node.id = 'outcome';
    const textnode = document.createTextNode(outcome);
    node.appendChild(textnode);
    const playerTwo = document.getElementById("container")
    playerTwo.after(node);
  };
  
  const playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", playGame);
  