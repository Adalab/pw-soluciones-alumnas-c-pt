const input = document.querySelector('.js_input')
const paragraph = document.querySelector('.js_paragraph')

input.addEventListener('input', (ev)=>{
    paragraph.innerHTML=ev.currentTarget.value;
})