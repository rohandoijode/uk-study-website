function showSection(id) {
    document.querySelectorAll('.container section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}
// Default section
showSection('home');

// Payment form handler
document.getElementById('paymentForm').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('paymentMsg').innerHTML = '<span style="color:green">Payment successful! Thank you.</span>';
    this.reset();
};

// Contact form handler
document.getElementById('contactForm').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('contactMsg').innerHTML = '<span style="color:green">Message sent! We will reply soon.</span>';
    this.reset();
};
