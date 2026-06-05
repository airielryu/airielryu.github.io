document.addEventListener('DOMContentLoaded', () => {
    // Cyberpunk page transition glitch effect
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = this.href;
            if (this.hostname === window.location.hostname) {
                e.preventDefault();
                document.body.style.animation = "fadeGlitch 0.2s reverse";
                setTimeout(() => {
                    window.location.href = target;
                }, 200);
            }
        });
    });

    // Form Mock Submission
    const form = document.querySelector('.cyber-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('.cyber-btn');
            btn.textContent = "DATA_TRANSMITTED";
            btn.style.background = "var(--cyan)";
            btn.style.color = "#000";
            btn.style.borderColor = "var(--cyan)";
            setTimeout(() => {
                form.reset();
                btn.textContent = "TRANSMIT";
                btn.style = "";
            }, 3000);
        });
    }
});
