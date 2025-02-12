function displayMessage() {
    alert('Thank you for your message!');
}

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    displayMessage();
});