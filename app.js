// Burger
const burger = document.querySelector('#burgerMenu')
const nav = document.querySelector('#nav')

burger.addEventListener('click', (event) => {
   event.preventDefault()

   nav.classList.toggle('show')
})

// Filter
const buttons = document.querySelectorAll('.portfolio-btn')
const cards = document.querySelectorAll('.portfolio-item')

function filter(category, items) {
   items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category)
      const isShowAll = category === 'all'
      if (isItemFiltered && !isShowAll) {
         item.classList.add('hide')
      } else {
         item.classList.remove('hide')
      }
   })
}

buttons.forEach((button) => {
   button.addEventListener('click', (event) => {
      event.preventDefault()
      const currentCategory = button.dataset.filter
      filter(currentCategory, cards)
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
