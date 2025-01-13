function validateForm() {
    const username = document.getElementById('user').value.trim();
    const password = document.getElementById('pass').value.trim();

    if (username === '') {
      alert('Please fill in the username.');
      return false;
    }

    if (password === '') {
      alert('Please fill in the password.');
      return false;
    }

    const hasDigit = /\d/;
    if (!hasDigit.test(password)) {
      alert('Password must contain at least one digit.');
      return false;
    }

    // If validation passes, redirect to index.html
    window.location.href = 'index.html';
  }