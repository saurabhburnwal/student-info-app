// Student Information System - JavaScript functionality
// Reads the values entered in the form and displays them on the ID pass card.

document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("nameInput");
  const regInput = document.getElementById("regInput");
  const programmeInput = document.getElementById("programmeInput");
  const emailInput = document.getElementById("emailInput");
  const phoneInput = document.getElementById("phoneInput");

  const displayName = document.getElementById("displayName");
  const displayReg = document.getElementById("displayReg");
  const displayProgramme = document.getElementById("displayProgramme");
  const displayEmail = document.getElementById("displayEmail");
  const displayPhone = document.getElementById("displayPhone");

  const showDetailsBtn = document.getElementById("showDetailsBtn");

  function showStudentDetails() {
    // Fall back to the existing card value if a field is left empty
    const name = nameInput.value.trim() || displayName.textContent;
    const reg = regInput.value.trim() || displayReg.textContent;
    const programme = programmeInput.value.trim() || displayProgramme.textContent;
    const email = (emailInput && emailInput.value.trim()) || (displayEmail ? displayEmail.textContent : "");
    const phone = (phoneInput && phoneInput.value.trim()) || (displayPhone ? displayPhone.textContent : "");

    displayName.textContent = name;
    displayReg.textContent = reg;
    displayProgramme.textContent = programme;
    if (displayEmail) displayEmail.textContent = email;
    if (displayPhone) displayPhone.textContent = phone;
  }

  showDetailsBtn.addEventListener("click", showStudentDetails);
});
