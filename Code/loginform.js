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

 
    const digitCount = (password.match(/\d/g) || []).length;
    const letterCount = (password.match(/[a-zA-Z]/g) || []).length;

    if (digitCount < 3 || letterCount <= 5) {
        alert('Password must contain at least 3 digits and more than 5 letters.');
        return false;
    }

    // If validation passes, redirect to index.html
    window.location.href = 'index.html';
}
  