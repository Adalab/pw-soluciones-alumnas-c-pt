'use strict';

const nameInput = document.querySelector('.js__nameInput');
const nameResultBox = document.querySelector('.js__nameResult');

/*
  Decimos al navegador que escuche un evento input sobre la caja
  de texto (el input) que hemos puesto en la página.
*/

nameInput.addEventListener('input', (event) => {
  /*
    Recogemos el nombre he ha escrito la usuaria
    desde el elemento donde ha sucedido el evento input
  */

  const userName = event.currentTarget.value;

  /* También se podría poner:

    const userName = nameInput.value;

    Pero el enunciado del ejercicio dice que lo hagamos
    usando el parámetro event
  */

  nameResultBox.innerHTML = userName;

  /*
    Se podría haber hecho un una sola línea:

    nameResultBox.innerHTML = event.currentTarget;

    pero creemos que usar una variable para recoger el
    valor de event.currentTarget clarifica un poco el código.
  */
})