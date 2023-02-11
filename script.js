const inputUnit = document.getElementById("input-unit");
const outputUnit = document.getElementById("output-unit");
const inputValue = document.getElementById("input-value");
const output = document.getElementById("output");

function convertArea() {
  const input = parseFloat(inputValue.value);

  if (isNaN(input)) {
    output.innerText = "Invalid input value";
    return;
  }

  switch (inputUnit.value) {
    case "kanal":
      convertFromKanal(input);
      break;
    case "marla":
      convertFromMarla(input);
      break;
    case "biswa":
      convertFromBiswa(input);
      break;
    case "sqft":
      convertFromSqft(input);
      break;
    case "acres":
      convertFromAcres(input);
      break;
  }
}

function convertFromKanal(input) {
  switch (outputUnit.value) {
    case "kanal":
      output.innerText = input.toFixed(2) + " kanal";
      break;
    case "marla":
      output.innerText = (input * 20).toFixed(2) + " marla";
      break;
    case "biswa":
      output.innerText = (input * 5).toFixed(2) + " biswa";
      break;
    case "sqft":
      output.innerText = (input * 5445).toFixed(2) + " sqft";
      break;
    case "acres":
      output.innerText = (input / 8).toFixed(2) + " acres";
      break;
  }
}

function convertFromMarla(input) {
  switch (outputUnit.value) {
    case "kanal":
      output.innerText = (input / 20).toFixed(2) + " kanal";
      break;
    case "marla":
      output.innerText = input.toFixed(2) + " marla";
      break;
    case "biswa":
      output.innerText = (input / 4).toFixed(2) + " biswa";
      break;
    case "sqft":
      output.innerText = (input * 272.25).toFixed(2) + " sqft";
      break;
    case "acres":
      output.innerText = (input / 320).toFixed(2) + " acres";
      break;
  }
}

function convertFromBiswa(input) {
  switch (outputUnit.value) {
    case "kanal":
      output.innerText = (input / 5).toFixed(2) + " kanal";
      break;
    case "marla":
      output.innerText = (input * 4).toFixed(2) + " marla";
      break;
    case "biswa":
      output.innerText = input.toFixed(2) + " biswa";
      break;
    case "sqft":
      output.innerText = (input * 1361).toFixed(2) + " sqft";
      break;
    case "acres":
      output.innerText = (input / 200).toFixed(2) + " acres";
      break;
  }
}

function convertFromSqft(input) {
  switch (outputUnit.value) {
    case "kanal":
      output.innerText = (input / 5445).toFixed(2) + " kanal";
      break;
    case "marla":
      output.innerText = (input / 272.25).toFixed(2) + " marla";
      break;
    case "biswa":
      output.innerText = (input / 1361).toFixed(2) + " biswa";
      break;
    case "sqft":
      output.innerText = input.toFixed(2) + " sqft";
      break;
    case "acres":
      output.innerText = (input / 43560).toFixed(2) + " acres";
      break;
  }
}

function convertFromAcres(input) {
  switch (outputUnit.value) {
    case "kanal":
      output.innerText = (input * 8).toFixed(2) + " kanal";
      break;
    case "marla":
      output.innerText = (input * 320).toFixed(2) + " marla";
      break;
    case "biswa":
      output.innerText = (input * 200).toFixed(2) + " biswa";
      break;
    case "sqft":
      output.innerText = (input * 43560).toFixed(2) + " sqft";
      break;
    case "acres":
      output.innerText = input.toFixed(2) + " acres";
      break;
  }
}

inputValue.addEventListener("input", convertArea);
inputUnit.addEventListener("change", convertArea);
outputUnit.addEventListener("change", convertArea);
