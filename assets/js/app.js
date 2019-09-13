// double hover
var sectionTwo = document.getElementsByClassName('sectionTwo');
var secTwoOverlay = document.getElementsByClassName('secTwoOverlay');

function sectionTwoDoubleHover() {
  if(sectionTwo[0].getBoundingClientRect().top - window.innerHeight /3 <= 0 ){
    secTwoOverlay[0].style.opacity = '0'
  }else{
    secTwoOverlay[0].style.opacity = '1'
  }
}

window.addEventListener('scroll',()=>{
  sectionTwoDoubleHover();
})
