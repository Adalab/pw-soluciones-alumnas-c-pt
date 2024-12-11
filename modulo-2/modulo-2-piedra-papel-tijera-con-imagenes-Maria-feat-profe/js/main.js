'use strict';

// SECCIÓN DE LOS QUERY-SELECTOR

const playBtn = document.querySelector('.js_playBtn');
const userOptionSelect = document.querySelector('.js_userOptionSelect');
const resultDiv = document.querySelector('.js_result');
const counterWinParagraph = document.querySelector('.js_counter_win');
const counterLostParagraph = document.querySelector('.js_counter_lost');
const winnerParagraph = document.querySelector('.js_winnerParagraph');
const reloadBtn = document.querySelector('.js_reloadBtn');

const roundMoveElements = {
  'user': {
    'image': document.querySelector('.js_imagePlayerOptionSelect'),
    'paragraph':document.querySelector('.js_paragraphPlayerOptionSelect')
  },
  'computer': {
    'image': document.querySelector('.js_imageComputerOptionSelect'),
    'paragraph': document.querySelector('.js_paragraphComputerOptionSelect')
  }
}



// SECCIÓN DE LOS DATOS DE APLICACIÓN

let playerWinsCounter = 0;
let playerLosesCounter = 0;



// SECCIÓN DE FUNCIONES QUE RENDERIZAN EN LA PÁGINA

const showMovesElements = () => {
  roundMoveElements.user.image.classList.remove('hidden');
  roundMoveElements.user.paragraph.classList.remove('hidden');

  roundMoveElements.computer.image.classList.remove('hidden');
  roundMoveElements.computer.paragraph.classList.remove('hidden');
};

const hideMovesElements = () => {
  roundMoveElements.user.image.classList.add('hidden');
  roundMoveElements.user.paragraph.classList.add('hidden');

  roundMoveElements.computer.image.classList.add('hidden');
  roundMoveElements.computer.paragraph.classList.add('hidden');
};

const getMoveImageSrc = (move) => {
  return `./images/imagen_${move}.jpg`;
}

const getMoveImageAlt = (move) => {
  return `La jugadora ha seleccionado ${move}`;
}

const getMoveParagraphText = (player, move) => {
  const playerName = player === 'user' ? 'jugadora' : 'computadora';

  return `La ${playerName} ha seleccionado ${move}`;
}

const renderMove = (player, move) => {
  if( !['piedra', 'papel', 'tijera'].includes(move) ) {
    hideMovesElements();

    return;
  }
  showMovesElements();
  
  roundMoveElements[player].image.src = getMoveImageSrc(move);
  roundMoveElements[player].image.alt = getMoveImageAlt(move);
  roundMoveElements[player].paragraph.innerHTML = getMoveParagraphText(player, move);
};

const getResultMessage = (winner) => {
  if( winner === 'user' ) {
    return 'Has ganado';
  }
  else if( winner === 'computer' ) {
    return 'Has perdido';
  }
  else if( winner === 'tie' ) {
    return 'Has empatado';
  }
  else {
    return 'Recuerda seleccionar una jugada';;
  }
}

const renderResult = (winner) => {
  const message = getResultMessage(winner);

  resultDiv.innerHTML = message;
}

const renderCounters = () => {
  counterWinParagraph.innerHTML = `Jugadora: ${playerWinsCounter}`;
  counterLostParagraph.innerHTML = `Computadora: ${playerLosesCounter}`;
}



// SECCIÓN DE FUNCIONES CON LA LÓGICA DEL JUEGO

/**
 * Genera un número aleatorio entre 1 y el valor que el indiquemos
 * 
 * @param {*} max Número máximo que queremos que genere
 * @returns Un número entre 1 y el valor que le hayamos indicado
 */

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const translateNumberToMove = (number) => {
  if (number >= 1 && number <= 3) {
    return 'piedra';
  }
  else if (number >= 4 && number <= 6) {
    return 'papel';
  }
  else if (number >= 7 && number <= 9) {
    return 'tijera';
  }

  return 'ERROR';
}

const genComputerMove = () => {
  // Generar un número random

  const randomNumber = getRandomNumber(9);

  // Registrar lo que la computadora ha generado
  const computerMove = translateNumberToMove(randomNumber);

  return computerMove;
};


const getPlayerMove = () => {
  return userOptionSelect.value;
}

const whoWins = (userMove, computerMove) => {

  if( userMove === computerMove ) {
    return 'tie';
  }

  if( userMove === 'piedra' ) {
    if( computerMove === 'tijera' ) {
      return 'user';
    }
    else {
      return 'computer';
    }
  }
  else if( userMove === 'papel' ) {
    if( computerMove === 'piedra' ) {
      return 'user';
    }
    else {
      return 'computer';
    }
  }
  else if( userMove === 'tijera' ) {
    if( computerMove === 'papel' ) {
      return 'user';
    }
    else {
      return 'computer';
    }
  }

  return 'ERROR';
}

const playRound = () => {
  const computerMove = genComputerMove();
  
  // Registrar lo que la usuaria haya escogido

  const userMove = getPlayerMove();

  renderMove('computer', computerMove);
  renderMove('user', userMove);

  const winner = whoWins(userMove, computerMove);

  renderResult(winner);

  incrementCounters(winner);
};



// SECCIÓN DE FUNCIONES RELACIONADAS CON LOS CONTADORES

const incrementCounters = (winner) => {
  if( winner === 'user' ) {
    playerWinsCounter++;
  }
  else if( winner === 'computer' ) {
    playerLosesCounter++;
  }
}

const checkCounters = () => {
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
};

const updateCounters = () => {
  renderCounters();
  checkCounters();
}



// SECCIÓN DE FUNCIONES DE EVENTOS

const handleClickButton = (ev) => {
  ev.preventDefault();

  playRound();

  updateCounters();  
}

const handleClickResetBtn = (ev) => {
  ev.preventDefault();

  playBtn.classList.remove('hidden');
  reloadBtn.classList.add('hidden');

  playerWinsCounter = 0;
  playerLosesCounter = 0;

  counterWinParagraph.innerHTML = 'Jugadora: ' + playerWinsCounter;
  counterLostParagraph.innerHTML = 'Computadora: ' + playerLosesCounter;
  winnerParagraph.innerHTML = '';
  resultDiv.innerHTML = '¡Vamos a jugar!';

  hideMovesElements();
};



// SECCIÓN DE EVENTOS

playBtn.addEventListener('click', handleClickButton);

reloadBtn.addEventListener('click', handleClickResetBtn);

// CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA

updateCounters();