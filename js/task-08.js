const form = document.querySelector("form.login-form");

form.addEventListener("submit", handleLogin);

function handleLogin(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);

  event.currentTarget.reset();

}
