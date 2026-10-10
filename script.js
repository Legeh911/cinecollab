document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Active Navigation Link Highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Interactive Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const feedback = document.getElementById('formFeedback');
            feedback.style.display = 'block';
            feedback.style.color = '#e50914';
            feedback.style.fontWeight = 'bold';
            feedback.innerText = 'Thank you! Your message has been sent successfully.';
            contactForm.reset();
        });
    }

    // Interactive Project/Role Filter on Projects Page
    const filterSelect = document.getElementById('filterCategory');
    if (filterSelect) {
        filterSelect.addEventListener('change', (e) => {
            const selected = e.target.value;
            const items = document.querySelectorAll('.service-card');

            items.forEach(item => {
                if (selected === 'all' || item.dataset.category === selected) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});