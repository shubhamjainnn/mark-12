const inputs = document.querySelectorAll(".angl-inputs");
const isTriangeBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

function calculateSumOfSAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  //   console.log(sumOfAngles);
  return sumOfAngles;
}

function isTriange() {
  const sumOfAngles = calculateSumOfSAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sumOfAngles === 180) {
    output.innerText = "Yay The Angle Form Is Triangle";
  } else {
    output.innerText = "oh oh ! the angle form is not a triangle";
  }
}

isTriangeBtn.addEventListener("click", isTriange);
