// Calcul des positions avec des valeurs fixes en pixels pour x et y
const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: []
};

// Point de départ (premier point)
let currentX = 100;  // Point de départ en x (en pixels)
let currentY = -20;  // Point de départ en y (en pixels)

// Décalages en pixels à ajouter pour chaque nouvelle étape (x et y en pixels)
const steps = [
  { deltaX: 150, deltaY: 30 },    // Étape 2
  { deltaX: 200, deltaY: 90 },    // Étape 3
  { deltaX: 250, deltaY: -200 },  // Étape 4
  { deltaX: -200, deltaY: 50 },   // Étape 5 (on recule en x)
  { deltaX: 300, deltaY: 150 },   // Étape 6
  { deltaX: 150, deltaY: 80 },   // Étape 7
  { deltaX: 120, deltaY: 0 },  // Étape 7
];

// Ajouter le premier point
flightPath.values.push({ x: currentX, y: currentY });

// Calcul des nouvelles positions basées sur la position actuelle
steps.forEach(step => {
  currentX += step.deltaX;  // Ajouter le delta en x (pixels)
  currentY += step.deltaY;  // Ajouter le delta en y (pixels)

  flightPath.values.push({ x: currentX, y: currentY });  // Ajouter le nouveau point
});

// Ajouter un dernier point qui sort de l'écran (ajout de 150px en x)
flightPath.values.push({ x: currentX + 150, y: currentY + 100 });  // Sortie de l'écran

// Création de l'animation Tween
const tween = new TimelineLite();

tween.add(
  TweenLite.to('.arrow-container', 3, {
    bezier: flightPath,
    ease: Power1.easeInOut
  })
);

// Configuration de ScrollMagic Controller
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: '.animation',
  duration: 5000,
  triggerHook: 0
})

.setTween(tween)
// .addIndicators() // Ligne supprimée pour éviter d'afficher les indicateurs de débogage
.setPin('.animation')
.addTo(controller);
