const flightPath = {
    curviness: 1.5,
    autoRotate: true,
    values: [
      {x: (window.innerWidth/8), y: -20},
      {x: (window.innerWidth/8)*2, y:10},
      {x: (window.innerWidth/8)*3, y: 100},
      {x: (window.innerWidth/8)*4, y: -100},
      {x: (window.innerWidth/8)*3, y: -50},
      {x: (window.innerWidth/8)*5, y: 100},
      {x: (window.innerWidth/8)*7, y: 0},
      {x: window.innerWidth + 150, y: 100}
    ]
  }
  
  const tween = new TimelineLite()
  
  tween.add(
    TweenLite.to('.arrow-container', 3, {
      bezier: flightPath,
      ease: Power1.easeInOut
    })
  )
  
  const controller = new ScrollMagic.Controller()
  const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 5000,
    triggerHook: 0
  })
  
  .setTween(tween)
  // .addIndicators() // Ligne supprimÃ©e
  .setPin('.animation')
  .addTo(controller)

//   Implémenter par Tom Limon
