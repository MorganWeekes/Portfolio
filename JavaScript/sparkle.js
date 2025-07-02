const cursor = document.querySelector(".cursor");
var whte = "";
var colors =[];
if(whte == true){
colors = [
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF"
];
}
if (whte != "off" ){
  colors = [
 "#FFD700",
  "#FF8C00",
  "#FF4500",
  "#FB68EE",
  "#FF69B4",
  "#00CED1"
];  
}
if(window.navigator.userAgent.toString().includes("Mobile") != true){
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY+scrollY + "px";
  createSparkle(e.clientX, e.clientY+scrollY);
});
document.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    cursor.style.left = touch.clientX + "px";
    cursor.style.top = touch.clientY+scrollY + "px";
    createSparkle(touch.clientX, touch.clientY+scrollY);
  },
  { passive: false }
);
}
function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("cursor-trail");

  const color = colors[Math.floor(Math.random() * colors.length)];
  const size = Math.random() * 1 + 5;
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * 50 + 10;

  sparkle.style.backgroundColor = color;
  sparkle.style.boxShadow = `0 0 10px ${color}`;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;

  document.body.appendChild(sparkle);


  sparkle.animate(
    [
      {
        opacity: 1,
        transform: "translate(-50%,-50%) scale(1)"
      },
      {
        opacity: 0,
        transform: `translate(calc(-50% + ${
          Math.cos(angle) * distance
        }px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0)`
      }
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fill: "forwards"
    }
  );
  setTimeout(() => {
    sparkle.remove();
  }, 1000);
}

