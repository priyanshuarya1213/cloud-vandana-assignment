function validateInput(fieldId, errorId) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(errorId);

    if (field.checkValidity()) {
      field.classList.remove("invalid");
      error.textContent = "";
      return true;
    } else {
      field.classList.add("invalid");
      error.textContent = field.validationMessage;
      return false;
    }
  }

  function validateForm() {
    const validations = [
      validateInput("firstName", "firstNameError"),
      validateInput("lastName", "lastNameError"),
      validateInput("dob", "dobError"),
      validateInput("country", "countryError"),
      validateInput("profession", "professionError"),
      validateInput("email", "emailError"),
      validateInput("mobile", "mobileError"),
    ];

    return validations.every((valid) => valid);
  }

  function submitForm() {
    if (validateForm()) {
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const dob = document.getElementById("dob").value;
      const country = document.getElementById("country").value;
      const genderElements = document.getElementsByName("gender");
      const gender = Array.from(genderElements)
        .filter((el) => el.checked)
        .map((el) => el.value);
      const profession = document.getElementById("profession").value;
      const email = document.getElementById("email").value;
      const mobile = document.getElementById("mobile").value;

      const popupData = `
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Gender:</strong> ${gender.join(", ")}</p>
      <p><strong>Profession:</strong> ${profession}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

      document.getElementById("popupData").innerHTML = popupData;
      document.getElementById("popup").style.display = "block";
    }
  }

  function resetForm() {
    document.getElementById("surveyForm").reset();
    clearErrors();
  }

  function clearErrors() {
    const errorFields = document.querySelectorAll(".error");
    const inputFields = document.querySelectorAll("input, select");
    errorFields.forEach((error) => (error.textContent = ""));
    inputFields.forEach((field) => field.classList.remove("invalid"));
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
    resetForm();
  }