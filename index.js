const checkbox = document.querySelector('.checkbox');
const body = document.body
const text = document.querySelector('.text');
const divExemplo = document.querySelector('.div-exemplo')

const handleCheckbox = () => {
    body.classList.toggle('dark')
    text.classList.toggle('dark')
    divExemplo.classList.toggle('dark')
}

checkbox.addEventListener('change', handleCheckbox)