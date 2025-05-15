// document.getElementById("loginForm").addEventListener("submit", async function(e) {
//   e.preventDefault();
  
//   const username = document.getElementById("username").value.trim();
//   const password = document.getElementById("password").value.trim();
//   const errorMessage = document.getElementById("error-message");

//   try {
//     const res = await fetch("http://localhost:3000/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password })
//     });

//     const data = await res.json();

//     if (res.ok) {
//       alert("Login successful!");
//       errorMessage.textContent = "";
//       // redirect or store token here
//     } else {
//       errorMessage.textContent = data.message;
//     }
//   } catch (err) {
//     errorMessage.textContent = "Server error. Try again later.";
//   }
// });


  document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Strong password validation: min 10 chars, upper, lower, number, symbol
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;

    if (!strongPasswordRegex.test(password)) {
      errorMessage.textContent = "Password must be at least 10 characters long and include uppercase, lowercase, number, and special character.";
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successful!");
        errorMessage.textContent = "";
        // Example: localStorage.setItem("token", data.token);
        // Redirect logic here
      } else {
        errorMessage.textContent = data.message;
      }
    } catch (err) {
      errorMessage.textContent = "Server error. Try again later.";
    }
  });

