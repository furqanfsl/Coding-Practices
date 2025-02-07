document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Please fill in all fields.';
    } else if (username !== 'admin' || password !== 'password') {
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    } else {
        document.getElementById('error-message').textContent = '';
        alert('Sign in successful!');
        // Here you can redirect the user to another page or perform other actions
    }
});
