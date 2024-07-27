export default function setWinner(user,machine) {
    if(user.toLowerCase() === machine.toLowerCase()) {
        return "It's a draw"
    }
    
    if(
        (user.toLowerCase() === "rock" && machine.toLowerCase() === "scissors") ||
        (user.toLowerCase() === "scissors" && machine.toLowerCase() === "paper") ||
        (user.toLowerCase() === "paper" && machine.toLowerCase() === "rock") 
    ) {
        
        return "User wins"
    } else {
    
        return "Machine wins"
    }
}