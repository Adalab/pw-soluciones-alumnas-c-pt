'use strict';

// SECCIÓN DE LOS QUERY-SELECTOR

const playBtn = document.querySelector('.js_playBtn');
const userOptionSelect = document.querySelector('.js_userOptionSelect');
const resultDiv = document.querySelector('.js_result');
const counterWinParagraph = document.querySelector('.js_counter_win');
const counterLostParagraph = document.querySelector('.js_counter_lost');
const winnerParagraph = document.querySelector('.js_winnerParagraph');
const reloadBtn = document.querySelector('.js_reloadBtn');
const imagePlayerOptionSelect = document.querySelector('.js_imagePlayerOptionSelect');
const paragraphPlayerOptionSelect = document.querySelector('.js_paragraphPlayerOptionSelect');
const imageComputerOptionSelect = document.querySelector('.js_imageComputerOptionSelect');
const paragraphComputerOptionSelect = document.querySelector('.js_paragraphComputerOptionSelect');



// SECCIÓN DE LOS DATOS DE APLICACIÓN

let playerWinsCounter = 0;
let playerLosesCounter = 0;


// SECCIÓN DE FUNCIONES

/**
 * Genera un número aleatorio entre 1 y el valor que el indiquemos
 * 
 * @param {*} max Número máximo que queremos que genere
 * @returns Un número entre 1 y el valor que le hayamos indicado
 */

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}



const genComputerMove = () => {
  // Generar un número random

  const randomNumber = getRandomNumber(9);
  console.log(randomNumber);

  // Registrar lo que la computadora ha generado
  let computerMove = '';

  if (randomNumber >= 1 && randomNumber <= 3) {
    computerMove = 'piedra';
  }
  else if (randomNumber >= 4 && randomNumber <= 6) {
    computerMove = 'papel';
  }
  else if (randomNumber >= 7 && randomNumber <= 9) {
    computerMove = 'tijera';
  }

  return computerMove;
};



const handleClickButton = (ev) => {
  ev.preventDefault();

  const computerMove = genComputerMove();

  console.log(computerMove);

  // Registrar lo que la usuaria haya escogido

  const userMove = userOptionSelect.value;

  console.log(userMove);

  const result = compareMoves(userMove, computerMove);

  resultDiv.innerHTML = result;

  if (playerWinsCounter === 10) {

    winnerParagraph.innerHTML = '¡Ha ganado la jugadora!';
    playBtn.classList.add('hidden');
    reloadBtn.classList.remove('hidden');
  }

  else if (playerLosesCounter === 10) {

    winnerParagraph.innerHTML = '¡Ha ganado la computadora!';
    playBtn.classList.add('hidden');
    reloadBtn.classList.remove('hidden');
  }



  if (userMove === 'tijera') {

    userSelection(userMove);
  }

  else if (userMove === 'papel') {

    userSelection(userMove);
  }

  else if (userMove === 'piedra') {

    userSelection(userMove);
  }



  if (computerMove === 'tijera') {

    computerSelection(computerMove);
  }

  else if (computerMove === 'papel') {

    computerSelection(computerMove);
  }

  else if (computerMove === 'piedra') {

    computerSelection(computerMove);
  };


 /*

  if(userMove === 'tijera') {

    imagePlayerOptionSelect.classList.remove('hidden');
    imagePlayerOptionSelect.innerHTML = `<img src="./images/imagen_tijera.jpg" alt="La jugadora ha seleccionado tijera">`;
    paragraphPlayerOptionSelect.classList.remove('hidden');
    paragraphPlayerOptionSelect.innerHTML = '<p class=h2> La jugadora ha seleccionado tijera</p>';

  }
  
  else if(userMove === 'papel') {
    imagePlayerOptionSelect.classList.remove('hidden');
    imagePlayerOptionSelect.innerHTML = `<img src="./images/imagen_papel.jpg" alt="La jugadora ha seleccionado papel">`;
    paragraphPlayerOptionSelect.classList.remove('hidden');
    paragraphPlayerOptionSelect.innerHTML = '<p class=h2> La jugadora ha seleccionado papel</p>';
  }
  
  else if(userMove === 'piedra') {
    imagePlayerOptionSelect.classList.remove('hidden');
    imagePlayerOptionSelect.innerHTML = `<img src="./images/imagen_piedra.jpg" alt="La jugadora ha seleccionado piedra">`;
    paragraphPlayerOptionSelect.classList.remove('hidden');
    paragraphPlayerOptionSelect.innerHTML = '<p class=h2> La jugadora ha seleccionado piedra</p>';
  }



  if(computerMove === 'tijera') {

    imageComputerOptionSelect.classList.remove('hidden');
    imageComputerOptionSelect.innerHTML = `<img src="./images/imagen_tijera.jpg" alt="La computadora ha seleccionado tijera">`;
    paragraphComputerOptionSelect.classList.remove('hidden');
    paragraphComputerOptionSelect.innerHTML = '<p class=h2> La computadora ha seleccionado tijera</p>';

  }
  
  else if(computerMove === 'papel') {
    imageComputerOptionSelect.classList.remove('hidden');
    imageComputerOptionSelect.innerHTML = `<img src="./images/imagen_papel.jpg" alt="La computadora ha seleccionado papel">`;
    paragraphComputerOptionSelect.classList.remove('hidden');
    paragraphComputerOptionSelect.innerHTML = '<p class=h2> La computadora ha seleccionado papel</p>';
  }
  
  else if(computerMove === 'piedra') {
    imageComputerOptionSelect.classList.remove('hidden');
    imageComputerOptionSelect.innerHTML = `<img src="./images/imagen_piedra.jpg" alt="La computadora ha seleccionado piedra">`;
    paragraphComputerOptionSelect.classList.remove('hidden');
    paragraphComputerOptionSelect.innerHTML = '<p class=h2> La computadora ha seleccionado piedra</p>';

};
*/


}

const userSelection = (userMove) => {

  const imageMove = `./images/imagen_${userMove}.jpg`;
  const altText = `La jugadora ha seleccionado ${userMove}`;
  const paragraphMove = `<p class="h2">La jugadora ha seleccionado ${userMove}</p>`;

  imagePlayerOptionSelect.classList.remove('hidden');
  imagePlayerOptionSelect.innerHTML = `<img src="${imageMove}" alt="${altText}">`;

  paragraphPlayerOptionSelect.classList.remove('hidden');
  paragraphPlayerOptionSelect.innerHTML = paragraphMove;
}

const computerSelection = (computerMove) => {

  const imageMove = `./images/imagen_${computerMove}.jpg`;
  const altText = `La computadora ha seleccionado ${computerMove}`;
  const paragraphMove = `<p class="h2">La computadora ha seleccionado ${computerMove}</p>`;

  imageComputerOptionSelect.classList.remove('hidden');
  imageComputerOptionSelect.innerHTML = `<img src="${imageMove}" alt="${altText}">`;

  paragraphComputerOptionSelect.classList.remove('hidden');
  paragraphComputerOptionSelect.innerHTML = paragraphMove;
}




const compareMoves = (userMove, computerMove) => {


  // Comparar la jugada de la computadora y la jugada de la usuaria

  // Decir quién ha ganado o si han empatado

  if (userMove === 'select') {

    const result = 'Recuerda seleccionar una jugada';

    return result;
  }

  if (userMove === computerMove) {
    // ¡EMPATE!

    const result = 'Has empatado';

    return result;
  }

  else if ((userMove === 'tijera' && computerMove === 'papel') ||
    (userMove === 'papel' && computerMove === 'piedra') ||
    (userMove === 'piedra' && computerMove === 'tijera')) {
    // Usuaria gana

    const result = 'Has ganado';

    playerWinsCounter += 1;

    counterWinParagraph.innerHTML = 'Jugadora: ' + playerWinsCounter;

    return result;
  }

  else {
    // Computadora gana

    const result = 'Has perdido';

    playerLosesCounter += 1;

    counterLostParagraph.innerHTML = 'Computadora: ' + playerLosesCounter;

    return result;
  }
}






// SECCIÓN DE EVENTOS

playBtn.addEventListener('click', handleClickButton);

reloadBtn.addEventListener('click', (ev) => {
  ev.preventDefault();

  playBtn.classList.remove('hidden');
  reloadBtn.classList.add('hidden');

  playerWinsCounter = 0;
  playerLosesCounter = 0;

  counterWinParagraph.innerHTML = 'Jugadora: ' + playerWinsCounter;
  counterLostParagraph.innerHTML = 'Computadora: ' + playerLosesCounter;
  winnerParagraph.innerHTML = '';
  resultDiv.innerHTML = '¡Vamos a jugar!';

}
)

// CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA

counterWinParagraph.innerHTML = 'Jugadora: 0';
counterLostParagraph.innerHTML = 'Computadora: 0';