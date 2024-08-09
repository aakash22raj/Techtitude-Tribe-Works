document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault();

    // Get the email input value
    var emailInput = document.getElementById('email').value;

    // Basic email format validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (!emailPattern.test(emailInput)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulated domain check for Google and Microsoft
    var validDomains = ['gmail.com', 'hotmail.com'];
    var emailDomain = emailInput.split('@')[1];
    
    if (!validDomains.includes(emailDomain)) {
        alert('The email does not have an account on Google or Microsoft.');
        return;
    }
    
    // Show the modal
    var modal = document.getElementById("successModal");
    modal.style.display = "flex";

    // Clear the form fields
    document.getElementById('contactForm').reset();
    
    // Close the modal when the user clicks the close button
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // Close the modal when the user clicks anywhere outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};

