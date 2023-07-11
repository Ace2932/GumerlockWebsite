GoomerNames = ["GooGoo", "Gumi", "Guru Goomer", "Guru Gumi", "Goomi Loomi", "Googers", "Big G", "Big Goomi", "God Goomi", "Mecha-Goomi",
  "Top G", "Goomi Dock", "Zoomy-Gumi", "Gumi (got) Roomy", "Gumer Doomer"];

function GooGooGen() {
  var randomNumber = generateRandomNumber(GoomerNames.length);
  var generatedName = GoomerNames[randomNumber];
  document.getElementById('generatedName').textContent = generatedName;
}

function generateRandomNumber(max) {
  // Generate a random number between 0 and max (exclusive)
  return Math.floor(Math.random() * max);
}

var button = document.getElementById('generateButton');
button.addEventListener('click', GooGooGen);
