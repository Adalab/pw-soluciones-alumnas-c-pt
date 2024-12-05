'use strict';

// Número random

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

// Jugada random del ordenador

const JuegoComputadora = () => {

    const RandomNumber = getRandomNumber(11);

    if (RandomNumber <= 3) return 'piedra';

    if (RandomNumber >= 7) return 'papel';

    return 'tijera';
}

// Resultado del jugador contra la computadora

const ResultadoFinal = (Jugador, Computadora) => {

    if (Jugador === Computadora) return '¡Has empatado!';

    if (
        (Jugador === 'piedra' && Computadora === 'tijera') ||
        (Jugador === 'papel' && Computadora === 'piedra') ||
        (Jugador === 'tijera' && Computadora === 'papel')
    ) {

        return '¡Has ganado!';

    }

    return '¡Has perdido!';
};

// Llamada al botón

const submit = document.querySelector('.js_submit');

// Llamada al <p> para hacer el innerHTML

const selectGame = document.querySelector('.js_selectGame');

// Evento del botón

submit.addEventListener('click', (ev) => {

    ev.preventDefault();

    // Declaramos la variable del valor de la opción seleccionada en el formulario

    const jugada = document.querySelector('.js_jugada').value;

    // Variable en la que se unen la opción de la computadora (piedra, papel o tijera) y el número random

    const Computadora = JuegoComputadora();

    // Variable que llama a la variable en la que se comparaba el juego del jugador con el de la computadora (ganado, perdido o empate)
    
    const Result = ResultadoFinal(jugada, Computadora);

    // Reflejar en el HTML

    selectGame.innerHTML = Result;
});

