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