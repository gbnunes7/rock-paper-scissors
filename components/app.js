export default function userSelection() {
    const btnPaper = document.getElementById('button__paper')
    const btnScissors = document.getElementById('button__scissors')
    const btnRock = document.getElementById('button__rock')
    
    return new Promise((resolve) => {
        btnPaper.addEventListener('click', function() {
            resolve("paper");
        });

        btnScissors.addEventListener('click', function() {
            resolve("scissors");
        });

        btnRock.addEventListener('click', function() {
            resolve("rock");
        });
    });
}
