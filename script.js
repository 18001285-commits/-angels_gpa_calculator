function startCalculator() {
  document.getElementById("start-screen").style.display = "none";
}

function showPage(page) {
  document.getElementById("simple").style.display = "none";
  document.getElementById("home").style.display = "none";

  document.getElementById(page).style.display = "block";
}

/* ================= SIMPLE GPA ================= */

function addSimpleClass() {
  const container = document.getElementById("simple-classes");

  const newClass = document.createElement("div");
  newClass.className = "class";

  newClass.innerHTML = `
    <label></label>

    <select class="simple-grade">
      <option value="4">A</option>
      <option value="3">B</option>
      <option value="2">C</option>
      <option value="1">D</option>
      <option value="0">F</option>
    </select>

    <button class="remove-btn">Remove</button>
  `;

  newClass.querySelector(".remove-btn").addEventListener("click", function () {
    newClass.remove();
    renumberClasses(); // IMPORTANT
  });

  container.appendChild(newClass);

  renumberClasses(); // IMPORTANT
}

function calculateSimpleGPA() {
  const grades = document.querySelectorAll(".simple-grade");

  let total = 0;

  for (let i = 0; i < grades.length; i++) {
    total += Number(grades[i].value);
  }

  let gpa = total / grades.length;

  const result = document.getElementById("simple-result");

  result.innerText = "Your GPA is " + gpa.toFixed(2);

  result.classList.remove("show-result");
  void result.offsetWidth;
  result.classList.add("show-result");
}

/* ================= COLLEGE GPA ================= */

let classCount = 1;

function addClass() {
  classCount++;

  const container = document.getElementById("classes");

  const newClass = document.createElement("div");
  newClass.className = "class";

  newClass.innerHTML = `
    <label>Class ${classCount}:</label>

    <select class="grade">
      <option value="4">A</option>
      <option value="3">B</option>
      <option value="2">C</option>
      <option value="1">D</option>
      <option value="0">F</option>
    </select>

    <label>Credits:</label>
    <input type="number" class="credits" value="3" min="1">

    <button class="remove-btn">Remove</button>
  `;

  newClass.querySelector(".remove-btn").addEventListener("click", function () {
    newClass.remove();
  });

  container.appendChild(newClass);
}

function calculateGPA() {
  const grades = document.querySelectorAll(".grade");
  const credits = document.querySelectorAll(".credits");

  let totalPoints = 0;
  let totalCredits = 0;

  for (let i = 0; i < grades.length; i++) {
    totalPoints += Number(grades[i].value) * Number(credits[i].value);
    totalCredits += Number(credits[i].value);
  }

  let gpa = totalPoints / totalCredits;

  const result = document.getElementById("result");

  result.innerText = "Your GPA is " + gpa.toFixed(2);

  result.classList.remove("show-result");
  void result.offsetWidth;
  result.classList.add("show-result");
}document.getElementById("startBtn").addEventListener("click", startCalculator);
