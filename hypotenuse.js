const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  const SumOfSquares = a * a + b * b;
  return SumOfSquares;
}

function calculateHypoteuse() {
  const SumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(SumOfSquares);
  outputEl.innerText = "The length Of Hypotenuse is " + lengthOfHypotenuse;

  //   console.log(SumOfSquares);
}

hypotenuseBtn.addEventListener("click", calculateHypoteuse);
