let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

// Allow keyboard input too
document.addEventListener("keydown", function(event) {
  if (event.key >= 0 && event.key <= 9 || "+-*/.".includes(event.key)) {
    display.value += event.key;
  } else if (event.key === "Enter") {
    calculateResult();
  } else if (event.key === "Backspace") {
    deleteLast();
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});