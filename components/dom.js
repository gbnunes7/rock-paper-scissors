import userSelection from "./selection.js"
import setWinner from "./game.js"
import machineSelection from "./machineSelection.js"


const machineSelected = machineSelection()
const divUserChoice = document.getElementById('userChoice')
const vs = document.getElementById('vs')
const divMachineChoice = document.getElementById('machineChoice')
const diVictory = document.getElementById('victory')


userSelection().then((selection) => {
    const result = setWinner(selection,machineSelected)
    divUserChoice.innerHTML = `User choice: ${selection}`
    vs.innerHTML = 'VS'
    divMachineChoice.innerHTML = `Machine choice: ${machineSelected}`
    diVictory.innerHTML = `${result}`

})
  

