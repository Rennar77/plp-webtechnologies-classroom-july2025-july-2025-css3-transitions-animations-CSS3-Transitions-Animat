// Part 2: JavaScript Functions, Parameters, Scope

// Global variable (scope example)
let isBoxSpinning = false;

// Function with parameter & return value
function toggleSpin(applySpin) {
  const box = document.querySelector(".box");

  if (applySpin) {
    box.classList.add("spin");
    isBoxSpinning = true;
    return "Box is spinning 🌀";
  } else {
    box.classList.remove("spin");
    isBoxSpinning = false;
    return "Box stopped ❌";
  }
}

// Part 3: Combining CSS & JS Animations
document.getElementById("animateBtn").addEventListener("click", () => {
  let message = toggleSpin(true);
  console.log(message);
});

document.getElementById("resetBtn").addEventListener("click", () => {
  let message = toggleSpin(false);
  console.log(message);
});

// Popup functionality
function showPopup() {
  document.getElementById("popup").classList.add("active");
}

function closePopup() {
  document.getElementById("popup").classList.remove("active");
}

// Trigger popup on button click
document.getElementById("popupBtn").addEventListener("click", showPopup);
