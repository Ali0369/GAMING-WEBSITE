document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
   
    const securityAnswer = document.getElementById('securityAnswer').value;
    const messageDiv = document.getElementById('registerMessage');

   
    if (password !== confirmPassword) {
        messageDiv.innerHTML = "<p style='color: red;'>Passwords do not match!</p>";
        return;
    }

   
    localStorage.setItem(email + "_password", password);
   
    localStorage.setItem(email + "_securityAnswer", securityAnswer);

    messageDiv.innerHTML = "<p style='color: green;'>Registration successful!</p>";
});