// DOM elements
var displayVals = document.getElementById("values");

function displayValues(el) {
  var onDisplay = el.innerHTML;
  if (onDisplay === "=") {
    displayVals.innerHTML = eval(displayVals.innerHTML);
  } else if (onDisplay === "AC") {
    displayVals.innerHTML = 0;
    location.reload();
  } else if (displayVals.innerHTML == 0) {
    displayVals.innerHTML = onDisplay;
  } else if (onDisplay === "CE") {
    displayVals.innerHTML = displayVals.innerHTML.substring(
      0,
      displayVals.innerHTML.length - 1
    );
  } else if (
    displayVals.innerHTML === "undefined" ||
    displayVals.innerHTML === "CE"
  ) {
    displayVals.innerHTML = 0;
  } else {
    displayVals.innerHTML += onDisplay;
  }
  console.log(typeof onDisplay);
}

function goBack() {
  window.history.back();
  console.log("ajillaaa");
}
