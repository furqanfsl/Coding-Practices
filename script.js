document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const submitBtn = document.getElementById('submit-btn');
    const errorMessage = document.getElementById('error-message');

    // Disable button and show spinner
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    // Simulate a network request with a delay
    setTimeout(() => {
        // Get input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation
        if (username === '' || password === '') {
            errorMessage.textContent = 'Please fill in all fields.';
            errorMessage.style.display = 'block';
        } else if (username !== 'admin' || password !== 'password') {
            errorMessage.textContent = 'Invalid username or password.';
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            alert('Sign in successful!');
            // Here you can redirect the user to another page or perform other actions
        }

        // Re-enable button and hide spinner
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }, 1500); // Simulate a 1.5-second delay
});