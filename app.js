document
  .getElementById("paymentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous errors
    const inputs = document.querySelectorAll("input, select,textarea");
    let hasError = false;

    inputs.forEach((input) => {
      input.classList.remove("is-invalid");
      const invalidFeedback = input.nextElementSibling;
      if (invalidFeedback) {
        invalidFeedback.classList.add("d-none");
      }
    });

    // Validate Card Number
    const card = document.getElementById("input_card");
    if (!/^\d{12,19}$/.test(card.value)) {
      card.classList.add("is-invalid");
      card.nextElementSibling.classList.remove("d-none");
      hasError = true;
    }

    // Validate CVC
    const cvc = document.getElementById("input_cvc");
    if (!/^\d{3,4}$/.test(cvc.value)) {
      cvc.classList.add("is-invalid");
      cvc.nextElementSibling.classList.remove("d-none");
      hasError = true;
    }

    // Validate Amount
    const amount = document.getElementById("input_amount");
    if (amount.value === "" || amount.value <= 0) {
      amount.classList.add("is-invalid");
      amount.nextElementSibling.classList.remove("d-none");
      hasError = true;
    }

    // Validate First Name
    const firstName = document.getElementById("input_firstname");
    if (firstName.value.trim() === "") {
      firstName.classList.add("is-invalid");
      firstName.nextElementSibling.classList.remove("d-none");
      hasError = true;
    }

    // Validate Last Name
    const lastName = document.getElementById("input_lastname");
    if (lastName.value.trim() === "") {
      lastName.classList.add("is-invalid");
      lastName.nextElementSibling.classList.remove("d-none");
      hasError = true;
    }

    // Validate City
    const city = document.getElementById("input_city");
    if (city.value.trim() === "") {
      city.classList.add("is-invalid");
      city.nextElementSibling.classList.remove("d-none");
      hasError = true;
    }

    // Validate State
    const state = document.getElementById("select_state");
    if (state.value === "") {
      state.classList.add("is-invalid");
      state.nextElementSibling.classList.remove("d-none");
      hasError = true;
    }

    // Validate Postal Code
    const postalCode = document.getElementById("input_postal_code");
    if (!/^\d{4,10}$/.test(postalCode.value)) {
      postalCode.classList.add("is-invalid");
      postalCode.nextElementSibling.classList.remove("d-none");
      hasError = true;
    }
    // Validate message
    const msg = document.getElementById("textarea_message");
    if (msg.value.trim() === "") {
      msg.classList.add("is-invalid");
      msg.nextElementSibling.classList.remove("d-none");
      hasError = true;
    }

    // Validate payment method
    const paymentMethods = document.getElementsByName("paymentMethod");
    let isPaymentMethodSelected = false;

    paymentMethods.forEach((method) => {
      if (method.checked) {
        isPaymentMethodSelected = true;
      }
    });

    if (!isPaymentMethodSelected) {
      const paymentContainer = document.querySelector(".container-select");
      paymentContainer
        .querySelector(".invalid-feedback")
        .classList.remove("d-none");
      hasError = true;
    } else {
      // Hide error message if payment method is selected
      const paymentContainer = document.querySelector(".container-select");
      paymentContainer
        .querySelector(".invalid-feedback")
        .classList.add("d-none");
    }

    // If there are errors, show the alert
    const alert = document.getElementById("alert");
    if (hasError) {
      alert.classList.remove("d-none");
      alert.scrollIntoView({ behavior: "smooth" });
    } else {
      alert.classList.add("d-none");
      // Here you can proceed with the form submission or further processing
      console.log("Form submitted successfully!");
    }
  });
