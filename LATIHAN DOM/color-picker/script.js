const body = document.querySelector("body");
const red = document.querySelector("input[name=red]");
const rangeRed = document.querySelector("input[name=rangeRed]");
const green = document.querySelector("input[name=green]");
const rangeGreen = document.querySelector("input[name=rangeGreen]");
const blue = document.querySelector("input[name=blue]");
const rangeBlue = document.querySelector("input[name=rangeBlue]");

red.addEventListener("input", function () {
  const valueRed = red.value;
  const valueGreen = green.value;
  const valueBlue = blue.value;
  rangeRed.setAttribute("value", valueRed);

  body.style.backgroundColor =
    "rgb(" + valueRed + ", " + valueGreen + ", " + valueBlue + ")";
});
green.addEventListener("input", function () {
  const valueRed = red.value;
  const valueGreen = green.value;
  const valueBlue = blue.value;
  rangeGreen.setAttribute("value", valueGreen);

  body.style.backgroundColor =
    "rgb(" + valueRed + ", " + valueGreen + ", " + valueBlue + ")";
});
blue.addEventListener("input", function () {
  const valueRed = red.value;
  const valueGreen = green.value;
  const valueBlue = blue.value;
  rangeBlue.setAttribute("value", valueBlue);

  body.style.backgroundColor =
    "rgb(" + valueRed + ", " + valueGreen + ", " + valueBlue + ")";
});
