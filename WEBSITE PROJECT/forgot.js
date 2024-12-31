document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('forgotEmail').value;
    const securityAnswerInput = document.getElementById('securityAnswerInput').value;
    const newPassword = document.getElementById('newPassword').value;
    const resetMessageDiv = document.getElementById('resetMessage');

   
    const storedSecurityAnswer = localStorage.getItem(email + "_securityAnswer");

   
    if (storedSecurityAnswer && storedSecurityAnswer === securityAnswerInput) {
      
        localStorage.setItem(email + "_password", newPassword);
        resetMessageDiv.innerHTML = "<p style='color: green;'>Password reset successful!</p>";
    } else {
        resetMessageDiv.innerHTML = "<p style='color: red;'>Invalid email or security answer.</p>";
    }
});