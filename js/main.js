// Dynamic Greeting
const greeting = document.getElementById("dynamic-greeting");
const hour = new Date().getHours();
if (hour > 5 && hour < 12) greeting.textContent = "🌄 Good Morning!";
else if (hour >= 12 && hour < 18) greeting.textContent = "☀️ Good Day!";
else greeting.textContent = "🌙 Good Evening!";