export default function machineSelection () {
    const options = ["Rock","Paper","Scissors"]
    return options[getRandomNumber(((options.length)))]
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}