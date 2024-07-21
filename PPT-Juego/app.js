const rock = 1;
const paper = 2;
const scissor = 3;

let shiftMachine = 0;
let shiftUser = 0;

let countUser = 0;
let countMachine = 0;

const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissor = document.getElementById('scissor');
const result = document.getElementById('result');
const shiftUserElement = document.getElementById('shift-user');
const shiftCpuElement = document.getElementById('shift-cpu');
const userScoreElement = document.getElementById('user-score');
const cpuScoreElement = document.getElementById('cpu-score');

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

btnRock.addEventListener('click', chooseRock);
btnPaper.addEventListener('click', choosePaper);
btnScissor.addEventListener('click', chooseScissor);

function chooseRock() {
    shiftUserElement.textContent = 'Usuario eligió piedra';
    shiftUser = rock;
    playGame();
}

function choosePaper() {
    shiftUserElement.textContent = 'Usuario eligió papel';
    shiftUser = paper;
    playGame();
}

function chooseScissor() {
    shiftUserElement.textContent = 'Usuario eligió tijera';
    shiftUser = scissor;
    playGame();
}

function chooseCpu() {
    const shiftCpu = getRandomNumber(rock, scissor);
    shiftMachine = shiftCpu;
    if (shiftCpu === rock) {
        shiftCpuElement.textContent = 'La máquina eligió piedra';
        return rock;
    } else if (shiftCpu === paper) {
        shiftCpuElement.textContent = 'La máquina eligió papel';
        return paper;
    } else {
        shiftCpuElement.textContent = 'La máquina eligió tijera';
        return scissor;
    }
}

function validateWinner() {
    if (shiftUser === shiftMachine) {
        return 'Empate';
    } else if (
        (shiftUser === rock && shiftMachine === scissor) ||
        (shiftUser === paper && shiftMachine === rock) ||
        (shiftUser === scissor && shiftMachine === paper)
    ) {
        countUser++;
        userScoreElement.textContent = countUser;
        return 'Usuario gana';
    } else {
        countMachine++;
        cpuScoreElement.textContent = countMachine;
        return 'Computadora gana';
    }
}

function playGame() {
    const cpuChoice = chooseCpu();
    result.textContent = validateWinner();
}
