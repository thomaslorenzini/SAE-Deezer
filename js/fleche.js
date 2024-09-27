const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: []
};

let currentX = 100;  
let currentY = -20;  

const steps = [
  { deltaX: 150, deltaY: 30 },   
  { deltaX: 200, deltaY: 90 },   
  { deltaX: 250, deltaY: -200 },  
  { deltaX: -200, deltaY: 50 },   
  { deltaX: 300, deltaY: 150 },   
  { deltaX: 150, deltaY: 80 },   
  { deltaX: 120, deltaY: 0 },  
];

flightPath.values.push({ x: currentX, y: currentY });

steps.forEach(step => {
  currentX += step.deltaX;  
  currentY += step.deltaY;  

  flightPath.values.push({ x: currentX, y: currentY }); 
});

flightPath.values.push({ x: currentX + 150, y: currentY + 100 }); 

const tween = new TimelineLite();

tween.add(
  TweenLite.to('.arrow-container', 3, {
    bezier: flightPath,
    ease: Power1.easeInOut
  })
);

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: '.animation',
  duration: 5000,
  triggerHook: 0
})

.setTween(tween)
.setPin('.animation')
.addTo(controller);

// Made by Tom Limon