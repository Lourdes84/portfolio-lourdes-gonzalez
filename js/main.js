
// RESPONSIVE MENU

const toggleButton = document.getElementById('toggle')
const navToggle = document.getElementById('navToggle')
const navLink = document.querySelector('.nav-links')

toggleButton.addEventListener('click', ()=>{

    // TOGGLE MENU

    navLink.style.transition = 'transform 0.5s ease-in'

    navToggle.classList.toggle('nav-links__link--active')
   
    // ANIMATION BURGUER

    toggleButton.classList.toggle('toggle')

})

// CORRECTION ERROR TOGGLE MENU 'RESIZE'

window.addEventListener('resize',  () => {
    navLink.style.transition = ''
})

// CLOSE TOGGLE MENU WHEN SCROLLING

let ubication = window.pageYOffset
window.addEventListener('scroll', ()=>{
    let scroll = window.pageYOffset
    if(ubication = scroll){
        navToggle.classList.remove('nav-links__link--active')
        toggleButton.classList.remove('toggle')
    }
})

// Boton GO UP

const goUpButton = document.getElementById('go-up')


onscroll = () => {
   if(document.documentElement.scrollTop > 100) {
      goUpButton.classList.add('container-go-up__button--mostrar')
   } else {
      goUpButton.classList.remove('container-go-up__button--mostrar')
   }
}

goUpButton.addEventListener('click', ()=>{
   scrollTo({
      top: 0,
      behavior: 'smooth'
   })
})


// EFFECT TITLE

const logo = document.getElementById('logo')
const lettersLogo = logo.innerHTML

logo.innerHTML = "L"

const speed = 150
let i = 0

typeWriter = () =>{
    if(i < lettersLogo.length) {
        logo.innerHTML += lettersLogo.charAt(i)
        i++;
        setTimeout(typeWriter, speed)
    }
}

setTimeout(typeWriter, speed)







