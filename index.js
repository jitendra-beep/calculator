let display = document.getElementById("display");

function appendValue(value) {
  if (display.value === "0" && value !== ".") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value.replace(/×/g, "*").replace(/÷/g, "/");
    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}
