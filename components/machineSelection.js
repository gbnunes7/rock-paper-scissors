export default function machineSelection () {
    const options = ["rock","paper","scissors"]
    return options[getRandomNumber(((options.length)))]
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}