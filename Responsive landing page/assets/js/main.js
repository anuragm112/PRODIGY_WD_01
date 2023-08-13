/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header=document.getElementById('header');
    this.scrollY>=50?header.classList.add('scroll-header'):header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);

/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts=new Swiper(".products__container",{
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    slidesPreview: 'auto',
    spaceBetween: 30,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
},
     breakpoints:{
        1024:{
          
            spaceBetween: 72,
        }
     },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.getElementById('section[id]')
const scrollActive = () =>{
  

    sections.forEach(current =>{
        const sectionHeight=current.offsetHeight,
        sectionTop=current.offsetTop-58,
        sectionId=current.getAttribute('id'),
        sectionClass=document.querySelector('.nav__menu a[href*=' +sectionId+ ']')
        
        if(this.scrollY>sectionTop && scrollY<=sectionTop+sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else{
            sectionClass.classList.remove('active-link');
        }
        
    })
}
window.addEventListener('scroll',scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollup(){
const scrollUp=document.getElementById('scroll-up');
  this.scrollY>=350?scrollUp.classList.add('show-scroll'):scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollup);
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton=document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='ri-sun-line'

const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

const getCurrentTheme=()=> document.body.classList.contains(darkTheme)? 'dark': 'light'
const getCurrentIcon=()=> document.body.classList.contains(iconTheme)? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme ==='dark'? 'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon==='ri-moon-line'? 'add':'remove'](iconTheme)
}
themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.home__data, .products__container, .footer__container, .footer__info`)
sr.reveal(`.home__images`,{delay: 600, origin: 'bottom'})
sr.reveal(`.new__card`,{interval: 100})
sr.reveal(`.collection__explore:nth-child(1)`,{origin: 'right'})
sr.reveal(`.collection__explore:nth-child(2)`,{origin: 'left'})