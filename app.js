
// Burger
const burger = document.querySelector('#burgerMenu')
const nav = document.querySelector('#nav')
   
   
burger.addEventListener('click', event => {
   event.preventDefault()
   
   nav.classList.toggle('show')
})
   
   
// Filter
const buttons = document.querySelectorAll('.portfolio-btn')
const cards = document.querySelectorAll('.portfolio-item')


function filter(category, items) {
   items.forEach(item => {
      const isItemFiltered = !item.classList.contains(category)
      const isShowAll = category === 'all'
      if(isItemFiltered && !isShowAll) {
         item.classList.add('hide')
      } else {
         item.classList.remove('hide')
      }
   })
}

buttons.forEach(button => {
   button.addEventListener('click', event => {
      event.preventDefault()
      const currentCategory = button.dataset.filter
      filter(currentCategory, cards)
   })
})


// Form
let form = document.querySelector('#form')

form.addEventListener('submit', formSubmit)

async function formSubmit(event) {
   event.preventDefault()
   const data = serializeForm(event.target)
   const {status, error} = await sendData(data)

   if (status === 200) {
      onSuccess(event.target)
   } else {
      onError(error)
   }
}

function serializeForm(formNode) {
      const data = new FormData(formNode)
      console.log(Array.from(data.entries()))
      return data
}


async function sendData(data) {
   // return await fetch('/api/apply/', {
   //    method: 'POST',
   //    headers: { 'Content-Type': 'multipart/form-data'},
   //    body: data,
   // })

   return new Promise(resolve => {
      setTimeout(() => {
         resolve({
            status: 200,
            error: {
               message: 'Что-то пошло не так!'
            }
         })
      })
   })
}

function onSuccess(formNode) {
   alert('Ваша заявка успешно отправлена!')
 }

 function onError(error) {
   alert(error.message)
 }



