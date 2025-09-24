// Dynamic Greeting
const greeting = document.getElementById("dynamic-greeting");
const hour = new Date().getHours();
if (hour < 12 && hour >= 5) greeting.textContent = "☀️ Good Morning!";
else if (hour < 18) greeting.textContent = "🌤️ Good Afternoon!";
else greeting.textContent = "🌙 Good Evening!";