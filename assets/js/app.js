// arrow to top
var arrowToTop = document.getElementsByClassName('arrowToTop');
function arrowToTopFun() {
  if(sectionTwo[0].getBoundingClientRect().top - window.innerHeight /1.2 <= 0 ){
    arrowToTop[0].style.opacity = '0.31'
  }else{
    arrowToTop[0].style.opacity = '0'
  }
}

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

// double hoveer sec three
var sectionThree = document.getElementsByClassName('sectionThree');

function sectionThreeDoubleHover() {
  if(sectionThree[0].getBoundingClientRect().top - window.innerHeight /3 <= 0 ){
    sectionThree[0].style.background = '#f5f6f7'
  }else{
    sectionThree[0].style.background = '#bfafa4'
  }
}


// window listener
window.addEventListener('scroll',()=>{
  arrowToTopFun();
  sectionTwoDoubleHover();
  sectionThreeDoubleHover();
})
