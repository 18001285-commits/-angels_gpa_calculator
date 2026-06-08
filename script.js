function startApp() {
  document.getElementById("landing").style.display = "none";
  document.getElementById("app").style.display = "block";
}

function showPage(page) {
  document.getElementById("simple").style.display = "none";
  document.getElementById("home").style.display = "none";

  document.getElementById(page).style.display = "block";
}

/* ================= SIMPLE GPA ================= */

let simpleCount = 1;

function addSimpleClass() {
  simpleCount++;

  const container = document.getElementById("simple-classes");

  const newClass = document.createElement("div");
  newClass.className = "class";

  newClass.innerHTML = `
