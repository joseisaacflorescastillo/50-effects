const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById('next');
const circles = document.querySelectorAll(".circle");

let currentActiven = 1;

next.addEventListener("click", () => {
  currentActiven++;

  if (currentActiven > circles.length) {
    currentActiven = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActiven--;

  if (currentActiven < 1) {
    currentActiven = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActiven) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  console.log(actives.length, circles.length);
}
