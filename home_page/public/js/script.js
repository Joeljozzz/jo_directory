let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
  slider.classList.add("moveslider");
  formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
  slider.classList.remove("moveslider");
  formSection.classList.remove("form-section-move");
});

// Unified handler for form submission
document.querySelectorAll(".clkbtn").forEach((button) => {
  button.addEventListener("click", async () => {
    const isLogin = button.closest(".login-box") !== null; // Check which form is active
    const url = isLogin ? "/login" : "/signup";

    const formData = isLogin
      ? {
          email: document.querySelector(".login-box .email").value,
          password: document.querySelector(".login-box .password").value,
        }
      : {
          name: document.querySelector(".signup-box .name").value,
          email: document.querySelector(".signup-box .email").value,
          password: document.querySelector(".signup-box .password").value,
        };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message);

      if (response.ok && data.redirect) {
        window.location.href = data.redirect;
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  });
});
