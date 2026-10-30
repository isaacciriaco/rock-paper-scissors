function getComputerChoice()
{
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3)
  {
    return "rock";
  }
  else if (randomNumber < 2 / 3)
  {
    return "paper";
  }
  else
  {
    return "scissors";
  }
}

function playGame()
{
  let humanScore = 0;
  let computerScore = 0;

  const results = document.querySelector("#results");
  const rockButton = document.querySelector("#rock");
  const paperButton = document.querySelector("#paper");
  const scissorsButton = document.querySelector("#scissors");

  results.textContent = "Choose rock, paper, or scissors to play.";

  function playRound(humanChoice, computerChoice)
  {
    humanChoice = humanChoice.toLowerCase();

    let roundMessage;

    if (humanChoice === computerChoice)
    {
      roundMessage = "It's a tie! You both chose " + humanChoice + ".";
    }
    else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    )
    {
      humanScore++;
      roundMessage = "You win this round! " + humanChoice + " beats " + computerChoice + ".";
    }
    else
    {
      computerScore++;
      roundMessage = "You lose this round! " + computerChoice + " beats " + humanChoice + ".";
    }

    results.textContent =
      roundMessage +
      " Score: You " + humanScore +
      " - Computer " + computerScore + ".";

    if (humanScore === 5)
    {
      results.textContent += " You won the game!";
      rockButton.disabled = true;
      paperButton.disabled = true;
      scissorsButton.disabled = true;
    }
    else if (computerScore === 5)
    {
      results.textContent += " The computer won the game!";
      rockButton.disabled = true;
      paperButton.disabled = true;
      scissorsButton.disabled = true;
    }
  }

  rockButton.addEventListener("click", function ()
  {
    playRound("rock", getComputerChoice());
  });

  paperButton.addEventListener("click", function ()
  {
    playRound("paper", getComputerChoice());
  });

  scissorsButton.addEventListener("click", function ()
  {
    playRound("scissors", getComputerChoice());
  });
}

playGame();

