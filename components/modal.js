const closeBtn = document.getElementById('button__close');
const openModal = document.getElementById('modal-open')
const modal =  document.querySelector('.fade')

closeBtn.addEventListener('click',() => {
    modal.classList.add('esconder');
    modal.classList.remove('fade');
})

openModal.addEventListener('click',() => {
    modal.classList.add('fade');
    modal.classList.remove('esconder');
})

