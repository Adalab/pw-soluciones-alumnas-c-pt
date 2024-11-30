'use strict';

const btn = document.querySelector('.js_btnSubmit');
const btnReset = document.querySelector('.js_btnReset');
const selectedDay = document.querySelector('.js_ReyesMagos');

const checkReyesMagos = (day, month) => {

    if (day === '6' && month === '1') {

        selectedDay.innerHTML = `<p>¡Son los Reyes Magos!</p>
        <img src="https://media1.tenor.com/m/7OyHJDBUhnYAAAAd/reyes-magos-6enero.gif" alt="Reyes Magos">
        `;
    }

    else {

        selectedDay.innerHTML = `<p>Lo siento, los Reyes Magos de Oriente no trabajan ese día</p>
    <img src="https://i.gifer.com/origin/e6/e67996f91f1a78ba71061f5083393842_w200.gif" alt="Patricio triste y llorando">
    `;
    }
}

btn.addEventListener('click', (ev) => {

    ev.preventDefault();

    const day = document.querySelector('.js_day').value;
    const month = document.querySelector('.js_month').value;

    checkReyesMagos(day, month);
})

btnReset.addEventListener('click', (ev) => {

    ev.preventDefault();

    const form = document.querySelector('.js_form');
    form.reset();

    const selectedDay = document.querySelector('.js_ReyesMagos');
    selectedDay.innerHTML = '';
})


