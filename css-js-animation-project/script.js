// ----------------------------------------------
// 📌 Part 2: JavaScript Functions with Scope, Parameters & Return
// ----------------------------------------------

// Example: Function with parameters and return value
function calculateArea(width, height) {
  return width * height;
}

console.log("Area of 5x10:", calculateArea(5, 10));

// Example: Scope - global and local
let globalMessage = "I am a global variable.";

function showScope() {
  let localMessage = "I am a local variable.";
  console.log(globalMessage); // ✅ Accessible
  console.log(localMessage);  // ✅ Accessible
}
showScope();
// console.log(localMessage); // ❌ Un-commenting this will cause an error (local only)

// ----------------------------------------------
// 📌 Part 3: Using JS to Trigger CSS Animations
// ----------------------------------------------

// Toggle box animation
const toggleBoxBtn = document.getElementById("toggleBoxBtn");
const animatedBox = document.getElementById("animatedBox");

toggleBoxBtn.addEventListener("click", () => {
  animatedBox.classList.toggle("active");
});

// Modal show/hide with keyframe animation
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("show");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.classList.add("hidden");
});
