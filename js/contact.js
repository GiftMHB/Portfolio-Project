const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent redirect

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.textContent = "✅ Thanks! Your message has been sent.";
      status.style.color = "green";
      status.style.display = "block";
      form.reset(); // clear the form
    } else {
      status.textContent = "⚠️ Oops! Something went wrong.";
      status.style.color = "red";
      status.style.display = "block";
    }
  } catch (error) {
    status.textContent = "⚠️ Could not send. Try again later.";
    status.style.color = "red";
    status.style.display = "block";
  }
});
