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
var secTwoProd = document.getElementsByClassName('secTwoProd')[0];
      window.onscroll = function(){
        secTwoProd.style.top = '-' + window.scrollY/2 + "px";
      }
function paralax() {
  secTwoProd.style.top = window.scrollY/4 - sectionTwo[0].getBoundingClientRect().height/7 + "px";
}

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


// textBoxHeader
var effectiveContainer = document.getElementsByClassName('effectiveContainer');
var specialOffer = document.getElementsByClassName('specialOffer');
var specialOfferContainer = document.getElementsByClassName('specialOfferContainer');



function specialOfferFun() {
  effectiveContainer[0].style.width = '35.6416vw';
  setTimeout(function () {
    effectiveContainer[0].style.overflow = 'visible';
    specialOffer[0].style.top = '-1vw';
    setTimeout(function () {
      specialOffer[0].style.textShadow = '0.284261vw 0.284261vw 0px rgba(0,0,0,0.11)';
      specialOffer[0].style.top = '-1.54261vw';
      specialOffer[0].style.left = '-0.284261vw';
      setTimeout(function () {
        specialOfferContainer[0].style.top = '16.5vw';
        specialOfferContainer[0].style.left = '11.5vw';
      }, 300);
    }, 400);
  }, 1000);
};

var textTriger = 0;
function runSpecialOffer() {
  if(effectiveContainer[0].getBoundingClientRect().top - window.innerHeight /1.7 <= 0 && textTriger !== 1){
    textTriger =1;
    specialOfferFun()
  }
}


// window listener
window.addEventListener('scroll',()=>{
  arrowToTopFun();
  sectionTwoDoubleHover();
  sectionThreeDoubleHover();
  runSpecialOffer();
  paralax();
})

window.addEventListener('load',()=>{
  stripesFun();
  wrinclesSpanfun();
  uSpanfun();
});
