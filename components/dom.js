import userSelection from "./userSelection.js"
import setWinner from "./game.js"
import machineSelection from "./machineSelection.js"

const divUserChoice = document.getElementById('userChoice')
const vs = document.getElementById('vs')
const divMachineChoice = document.getElementById('machineChoice')
const divVictory = document.getElementById('victory')
const divUserScore = document.getElementById('user__score')
const divMachineScore = document.getElementById('machine__score')
let userScore = 0
let machineScore = 0
let lastUserSelection = null


function startGame() {
    const machineSelected = machineSelection()
    
    userSelection().then((selection) => {
        
        if (selection === 'Rock' && lastUserSelection === 'Rock') {
            divVictory.innerHTML = `You can't choose "rock" twice in a row!`
            startGame() // restart the game without updating scores
            return
        }
        
        const result = setWinner(selection,machineSelected)
        
        if(result === "It's a draw") {
            divUserChoice.innerHTML = `User choice: ${selection}`
            vs.innerHTML = 'VS'
            divMachineChoice.innerHTML = `Machine choice: ${machineSelected}`
            divVictory.innerHTML = `It's a draw!`
            lastUserSelection = selection
            startGame() 
            return
        }

        
        if(result === 'User wins') {
            userScore++
            divUserScore.innerHTML = `User: ${userScore}`
        } else {
            machineScore++
            divMachineScore.innerHTML = `Machine: ${machineScore}`
        }
        
        divUserChoice.innerHTML = `User choice: ${selection}`
        vs.innerHTML = 'VS'
        divMachineChoice.innerHTML = `Machine choice: ${machineSelected}`
        divVictory.innerHTML = `${result}`
        startGame()
    })
    
}

startGame()