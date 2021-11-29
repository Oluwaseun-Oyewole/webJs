const date = document.querySelector('#date')
date.innerHTML = new Date().getFullYear()

const navToggle =  document.querySelector('.nav-toggle')
const links = document.querySelector('.links')
const linkContainer = document.querySelector('.links-container')


navToggle.addEventListener('click', () => {
    // linkContainer.classList.toggle('show-links')
    const containerHeight = linkContainer.getBoundingClientRect().height
    
    const linkHeight= links.getBoundingClientRect().height;

    if(containerHeight === 0){
        linkContainer.style.height  = `${linkHeight}px`
    }
    else{
        linkContainer.style.height  = 0
    }
}) 

const navbar = document.querySelector('#nav')
const topLink = document.querySelector('.top-link')


window.addEventListener('scroll', () => {
    const scrollHeigth = window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height

    if(scrollHeigth > navHeight){
        navbar.classList.add('fixed-nav')
    }

    else{
        navbar.classList.remove('fixed-nav')
    }

    if(scrollHeigth > 400){
        topLink.classList.add('show-link')
    }
    else{
        topLink.classList.remove('show-link')
    }


})


const scrollLinks = document.querySelectorAll('.scroll-link')
scrollLinks.forEach(scrollLink => {
    scrollLink.addEventListener('click', (e) => {
        e.preventDefault()
        
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)

        const container = linkContainer.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains('fixed-nav')

        const navHeight = navbar.getBoundingClientRect().height

        let position = element.offsetTop - navHeight

        if(!fixedNav){
            position = position - navHeight
        }

        if(navHeight > 82){
            position = position + container
        }
      
        window.scrollTo({
            left:0,
            top:position,
        })

        linkContainer.style.height = 0
    })
})



// about page