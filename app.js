// Burger
const burger = document.querySelector('#burgerMenu')
const nav = document.querySelector('#nav')

burger.addEventListener('click', (event) => {
   event.preventDefault()

   nav.classList.toggle('show')
})

// Filter
const buttons = document.querySelectorAll('[data-filter]')
const allCards = document.querySelectorAll('.portfolio-item')

buttons.forEach((button) => {
   button.addEventListener('click', function () {
      if (button.classList.contains('active')) {
         button.classList.remove('active')
      }

      allCards.forEach((card) => {
         if (button.dataset.filter == 'all') {
            card.classList.remove('hide')
         } else {
            card.classList.add('hide')
         }
      })

      document
         .querySelectorAll('.' + this.dataset.filter)
         .forEach((currentCard) => {
            currentCard.classList.remove('hide')
         })
   })
})

// Form
document.addEventListener('DOMContentLoaded', () => {
   function ajaxSend(formData) {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         headers: { 'Content-Type': 'aplication/json' },
         body: JSON.stringify(formData),
      })
         .then((formData) => console.log(formData))
         .catch((error) => console.error(error))
   }

   const form = document.querySelector('#form')
   form.addEventListener('submit', formSubmit)

   function formSubmit(event) {
      event.preventDefault()

      let formData = new FormData(this)
      formData = Object.fromEntries(formData)

      ajaxSend(formData)
   }
})

