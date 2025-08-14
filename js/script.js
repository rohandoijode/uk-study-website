document.addEventListener('DOMContentLoaded', function() {
    function showSection(id) {
        document.querySelectorAll('.container section').forEach(sec => sec.classList.add('hidden'));
        document.getElementById(id).classList.remove('hidden');
    }

    // Default view
    showSection('home');

    // Nav click events
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').replace('#', '');
            showSection(target);
        });
    });

    // Payment form
    document.getElementById('paymentForm').onsubmit = function(e) {
        e.preventDefault();
        document.getElementById('paymentMsg').innerHTML = '<span style="color:green">Payment successful! Thank you.</span>';
        this.reset();
    };

    // Contact form
    document.getElementById('contactForm').onsubmit = function(e) {
        e.preventDefault();
        document.getElementById('contactMsg').innerHTML = '<span style="color:green">Message sent! We will reply soon.</span>';
        this.reset();
    };
});
