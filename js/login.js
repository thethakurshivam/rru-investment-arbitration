document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const errorDiv = document.querySelector('.error');
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const username = form.querySelector('input[name="username"]').value;
      const password = form.querySelector('input[name="password"]').value;
      try {
        const res = await fetch('/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });
        if (res.ok) {
          window.location.href = 'dashboard.html';
        } else {
          const data = await res.json();
          errorDiv.textContent = data.message || 'Login failed';
        }
      } catch (err) {
        errorDiv.textContent = 'Network error';
      }
    });
  }
});
