async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Fill all fields');
        return;
    }

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.error || 'Login failed');
            return;
        }

        alert('Login Successful');
        window.location.href = 'index.html';
    } catch (error) {
        alert('Server error. Please try again.');
        console.error(error);
    }
}

async function submitContact(event) {
    event.preventDefault();

    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    if (!name || !email || !message) {
        alert('Fill all fields');
        return;
    }

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.error || 'Submit failed');
            return;
        }

        alert('Message sent successfully');
        document.getElementById('contact-form').reset();
    } catch (error) {
        alert('Server error. Please try again.');
        console.error(error);
    }
}