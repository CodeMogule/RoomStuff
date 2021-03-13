const uses = {
  x : document.querySelector('.x'),
  ham : document.querySelector('.ham'),
  navBar : document.getElementById('nav-bar'),
  slidesDesk : document.getElementById('slide-desk'),
  slidesMob : document.getElementById('slide-mob')
}
  
  let ImgSlidesDesktop = ['desktop-image-hero-1.jpg','desktop-image-hero-3.jpg','desktop-image-hero-2.jpg']
  let ImgSlidesMobile = ['mobile-image-hero-1.jpg','mobile-image-hero-3.jpg','mobile-image-hero-2.jpg']
  let slideNum = 0


  const next = () => {
if (slideNum >= ImgSlidesDesktop.length -1 )slideNum = -1
    slideNum++
    return setDesk() + setMob()
  }

  const previous = () => {
      if (slideNum<=0)
slideNum =ImgSlidesDesktop.length 
slideNum--
return setDesk() + setMob()
}
  
const setDesk = () => {
    return uses.slidesDesk.setAttribute('srcset', '../images/' + ImgSlidesDesktop[slideNum])
}

const setMob = () => {
  return uses.slidesMob.setAttribute('srcset', '../images/' + ImgSlidesMobile[slideNum])
}



const turnMenu = ()=>{
  uses.navBar.style.display = "block"
  uses.ham.style.display = "none"
}

const outMenu = () => {
  uses.navBar.style.display = "none"
  uses.ham.style.display = "block"
}
