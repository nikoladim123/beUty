// arrow to top
var arrowToTop = document.getElementsByClassName('arrowToTop');
function arrowToTopFun() {
  if(sectionTwo[0].getBoundingClientRect().top - window.innerHeight /1.2 <= 0 ){
    arrowToTop[0].style.opacity = '0.31'
    arrowToTop[0].style.pointerEvents = 'auto'
  }else{
    arrowToTop[0].style.opacity = '0'
    arrowToTop[0].style.pointerEvents = 'none'
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
    sectionThree[0].style.background = '#ae9572'
  }
}

// stripes
var stripes = document.getElementsByClassName('stripes');
function stripesFun() {
  stripes[0].style.transform = 'scale(1,1)';
}

//wrinclesSpan
var wrinclesSpan = document.getElementsByClassName('wrinclesSpan');

function wrinclesSpanfun() {
  setTimeout(function () {
    wrinclesSpan[0].style.transform = 'rotateX(0deg)'
  }, 500);
}

// uSpan
var uSpan = document.getElementsByClassName('uSpan');
function uSpanfun() {
setTimeout(function () {
  uSpan[0].style.color = '#b9a0e6';
}, 500);
}

// window listener
window.addEventListener('scroll',()=>{
  arrowToTopFun();
  sectionTwoDoubleHover();
  sectionThreeDoubleHover();
})

window.addEventListener('load',()=>{
  stripesFun();
  wrinclesSpanfun();
  uSpanfun();
});
