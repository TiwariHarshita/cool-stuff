
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


  

/*function videoConAnimation(){
var videoCon= document.querySelector("#video-container");
var playBtn= document.querySelector("#play");
videoCon.addEventListener('mouseenter',function(){
   
    gsap.to(playBtn, {
        opacity: 1,
        scale: 1
    });
})

videoCon.addEventListener('mouseleave',function(){
    gsap.to(playBtn, {
        opacity: 0,
        scale: 0
    });

})

videoCon.addEventListener('mousemove',function(dets){
    gsap.to(playBtn, {
       left:dets.x-80,
       top:dets.y-80
    });

})

}
videoConAnimation();*/
function videoconAnimation() {
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");
    videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
      });
    });
    videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
      });
    });
    document.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
        left: dets.x - 70,
        top: dets.y - 80,
      });
    });
  }
  videoconAnimation();

 function loadingAnimation(){
gsap.from("#page1   #build ", {
    y:30,
    opacity:0,
    delay:0.9,
    duration:0.4,

})
gsap.from("#for-future", {
    y:30,
    opacity:0,
    delay:0.5,
    duration:0.3,

}) }

loadingAnimation();



function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
      });
    });
    document.querySelectorAll(".child").forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(1)",
        });
      });
      elem.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(0)",
        });
      });
    });
  }
  cursorAnimation();
  
  