function validateForm() {
    const form = document.querySelector('form');
    const email = form.querySelector('input[type="email"]');
    const password = form.querySelector('input[type="password"]');
    let isValid = true;

    if (!email.value.includes('@')) {
        isValid = false;
        alert('Please enter a valid email address');
    }

    if (password.value.length < 6) {
        isValid = false;
        alert('Password must be at least 6 characters long');
    }

    return isValid;
}

document.querySelector('form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});
