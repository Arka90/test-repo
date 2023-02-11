const current = document.querySelector(".current");
const next = document.querySelector(".next");
const start = document.querySelector(".start-counter");
const value_box = document.querySelector(".input-value");
value_box.value = 0;
var interval;
let count = 0;
function startAnimation() {
  let value = value_box.value;

  if (value < 0 || value >= 10) {
    alert("Please enter a value between 0 and 9");
    return;
  }

  interval = setInterval(() => {
    animate();
    count++;
    next.textContent = count;

    if (count > value) {
      clearInterval(interval);
      alert("counting end");
      count--;
    }
  }, 1000);
}

function animate() {
  next.classList.add("animate");
  setTimeout(() => {
    current.textContent = count;
    next.classList.remove("animate");
  }, 500);
}

start.addEventListener("click", startAnimation);
