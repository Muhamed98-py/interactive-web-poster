let button = document.querySelectorAll('.button')
let modal = document.querySelector('.modal')
let close = document.querySelector('.modal-close')


button.forEach((button) => {
    button.addEventListener('click', function(evt) {
        evt.preventDefault();
        modal.classList.add('modal-show')
    })
});

close.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.remove('modal-show')
})

let robot = document.querySelector('.robot-catch')
let modalCatch = document.querySelector('.modal-catch')
let closeCatch = document.querySelector('.modal-close-catch')

robot.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCatch.classList.add('modal-show-catch')
})

closeCatch.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCatch.classList.remove('modal-show-catch')
})