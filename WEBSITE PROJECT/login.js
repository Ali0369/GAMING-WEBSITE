document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

   
    const storedPassword = localStorage.getItem(email + "_password");

  
    if (storedPassword && storedPassword === password) {
        messageDiv.innerHTML = "<p style='color: green;'>Login successful!</p>";
        window.location.href = "home.html"; 
    } else {
        messageDiv.innerHTML = "<p style='color: red;'>Invalid email or password. Please register.</p>";
    }
});