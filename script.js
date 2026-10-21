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

function getHumanChoice()
{
    const humanChoice = prompt("Choose rock, paper, or scissors:");
    return humanChoice;
}

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice)
    {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice)
        {
            console.log("It's a tie!");
        }
        else if (humanChoice === "rock" && computerChoice === "scissors")
        {
            humanScore++;
            console.log("You win! Rock beats Scissors");
        }
        else if (humanChoice === "paper" && computerChoice === "rock")
        {
            humanScore++;
            console.log("You win! Paper beats Rock");
        }
        else if (humanChoice === "scissors" && computerChoice === "paper")
        {
            humanScore++;
            console.log("You win! Scissors beats Paper");
        }
        else
        {
            computerScore++;
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
        }
    }

    for (let round = 0; round < 5; round++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("Final score: You " + humanScore + " - Computer " + computerScore);

    if (humanScore > computerScore)
    {
        console.log("You won the game!");
    }
    else if (computerScore > humanScore)
    {
        console.log("The computer won the game!");
    }
    else
    {
        console.log("The game is a tie!");
    }
}

playGame();
