document.getElementById('sendbutton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const message = document.getElementById('message').value;
  
    // Basic form validation
    if (name && email && contactNumber && message) {
      alert('Message sent successfully!');
      window.location.href="../index.html"
      // Optional: Clear form fields
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('contactNumber').value = '';
      document.getElementById('message').value = '';
    } else {
      alert('Please fill in all fields.');
    }
  });
  