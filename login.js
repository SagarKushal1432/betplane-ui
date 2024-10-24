document.getElementById('toggle').addEventListener('click', function() {
    document.getElementById('form-container').style.transform = 'rotateY(180deg)';
});

document.getElementById('toggle-back').addEventListener('click', function() {
    document.getElementById('form-container').style.transform = 'rotateY(0deg)';
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const message = document.getElementById('login-message');

    if (username === '' || password === '') {
        message.textContent = 'Please fill in all fields.';
        return;
    }

    // Simulate a login process
    if (username === 'admin' && password === 'password') {
        message.textContent = 'Login successful!';
        message.style.color = '#28a745'; // Green for success
	    	window.location.href = 'home.html';
    } else {
        message.textContent = 'Invalid username or password.';
        message.style.color = '#dc3545'; // Red for error
    }
});

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const email = document.getElementById('register-email').value;
    const message = document.getElementById('register-message');

    if (username === '' || password === '' || email === '') {
        message.textContent = 'Please fill in all fields.';
        return;
    }

    // Simulate a registration process
    message.textContent = 'Registration successful!';
    message.style.color = '#28a745'; // Green for success
});
