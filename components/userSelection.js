export default function userSelection() {
    const btnPaper = document.getElementById('button__paper')
    const btnScissors = document.getElementById('button__scissors')
    const btnRock = document.getElementById('button__rock')
    
    return new Promise((resolve) => {
        btnPaper.addEventListener('click', function() {
            resolve("Paper");
        });

        btnScissors.addEventListener('click', function() {
            resolve("Scissors");
        });

        btnRock.addEventListener('click', function() {
            resolve("Rock");
        });
    });
}
