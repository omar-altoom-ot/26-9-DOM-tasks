let nameInput = document.getElementById("nameInput");
let scoreInput = document.getElementById("scoreInput");
let result = document.getElementById("result");
let table = document.getElementById("table");

let addBtn = document.getElementById("addBtn");
let displayResultBtn = document.getElementById("displayResultBtn");
let displayScoresBtn = document.getElementById("displayScoresBtn");

let map1 = new Map();

addBtn.addEventListener("click", addScore);
displayResultBtn.addEventListener("click", displayResults);
displayScoresBtn.addEventListener("click", displayScores);

nameInput.focus();

function addScore() {
  let name = nameInput.value.trim();
  let score = Number(scoreInput.value);

  if (
    name === "" ||
    scoreInput.value === "" ||
    isNaN(score) ||
    score < 0 ||
    score > 100
  ) {
    alert("You must enter a name and a valid score");
    return;
  }

  map1.set(name, score);

  nameInput.value = "";
  scoreInput.value = "";

  nameInput.focus();
}

function displayResults() {
  let sum = 0;
  let count = 0;
  let maxValue = -Infinity;
  let maxName = "";

  map1.forEach((value, key) => {
    sum += Number(value);
    count++;

    if (Number(value) > maxValue) {
      maxValue = Number(value);
      maxName = key;
    }
  });

  if (count === 0) {
    result.innerHTML = "";
    return;
  }

  let average = sum / count;

  result.innerHTML =
    "<h2>Results</h2>" +
    "<p>Average score = " +
    average +
    "</p>" +
    "<p>High score = " +
    maxName +
    " with a score of " +
    maxValue +
    "</p>";
}

function displayScores() {
  table.innerHTML = "";

  map1.forEach((value, key) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.textContent = key;
    td2.textContent = value;

    tr.append(td1);
    tr.append(td2);
    table.append(tr);
  });
}
