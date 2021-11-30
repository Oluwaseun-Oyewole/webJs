
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];



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

const btns = document.querySelectorAll('.tab-btn')

const articles = document.querySelectorAll('.content')

const about = document.querySelector('.about')
about.addEventListener('click', (e) => {
    
    const id = e.target.dataset.id
    
    if(id){
        btns.forEach(btn => {
            btn.classList.remove('active')
            e.target.classList.add('active')
        })

        articles.forEach(article => {
            article.classList.remove('active')
            const element = document.getElementById(id)
            element.classList.add('active')
        })
    }
})


const giveaway = document.querySelector('.giveaway')

const items = document.querySelectorAll('.deadline-format h4')

const deadline = document.querySelector('.deadline')


const tempDate = new Date()
let temptYear = tempDate.getFullYear()
let temptMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()


// const futureDate = new Date(2021, 11, 24, 10, 30, 0 )
const futureDate = new Date(temptYear, temptMonth, tempDay+10, 11, 30, 0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

let month = futureDate.getMonth()
const dates = futureDate.getDate()
const weekDay = futureDate.getDay()

giveaway.textContent = `giveaway ends on ${weekdays[weekDay]}, ${dates} ${months[month]} ${year} ${hours}:${minutes}am`  

// future time in miliseconds

const futureTime = futureDate.getTime()


function getRemainingTime () {
    const today = new Date().getTime()
    const t = futureTime-today
    
    const oneDay = 24*60*60*1000   
    const oneHour = 60*60*1000
    const oneMinute= 60*1000

    const days = Math.floor(t/oneDay)
    const hours = Math.floor(( t % oneDay) /oneHour)
    const minutes = Math.floor((t %oneHour)/ oneMinute) 
    const seconds = Math.floor((t %oneMinute)/ 1000)


    const values = [days, hours, minutes, seconds]
    
    function format(item){
        if(item < 10)return item = `0${item}`
        return item
        
    }   

    items.forEach((item, index) => {
        item.innerHTML = format(values[index])
    })

    if(t < 0){
        clearInterval(countDown)
        deadline.innerHTML = `<h4 class="expired">sorry this giveaway has expired</h4>`
    }
}   


let countDown = setInterval(getRemainingTime, 1000);
getRemainingTime()