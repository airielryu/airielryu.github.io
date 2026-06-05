document.addEventListener('DOMContentLoaded', () => {
    
    // Scroll Reveal with Scale effect
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            hamburger.children[0].classList.toggle('rotate-down');
            hamburger.children[1].classList.toggle('hide');
            hamburger.children[2].classList.toggle('rotate-up');
        });
    }

    // Smooth Page Transitions
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            const target = this.href;
            if (
                this.hostname === window.location.hostname && 
                this.getAttribute('target') !== '_blank' && 
                !this.getAttribute('href').startsWith('mailto:') &&
                !this.getAttribute('href').startsWith('#')
            ) {
                e.preventDefault(); 
                document.body.classList.add('page-exit');
                setTimeout(() => window.location.href = target, 400); 
            }
        });
    });

    // Creative Modal Logic
    const modal = document.getElementById('project-modal');
    if (modal) {
        const closeBtn = document.querySelector('.close-btn');
        const modalTitle = document.getElementById('modal-title');
        const modalTech = document.getElementById('modal-tech');
        const modalDesc = document.getElementById('modal-desc');

        document.querySelectorAll('.work-card').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault(); 
                modalTitle.innerText = this.getAttribute('data-title');
                modalTech.innerText = this.getAttribute('data-tech');
                modalDesc.innerText = this.getAttribute('data-desc');
                modal.style.display = 'flex'; 
            });
        });

        closeBtn.addEventListener('click', () => modal.style.display = 'none');
        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
    }
});
