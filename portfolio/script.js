document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Page Transition Glitch Effect ---
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

    // --- 2. Form Mock Submission ---
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

    // --- 3. Slideshow Logic for Work Previews ---
    const slideshows = document.querySelectorAll('.slideshow-container');
    slideshows.forEach(slideshow => {
        const slides = slideshow.querySelectorAll('.slide');
        let currentIndex = 0;

        if (slides.length > 1) {
            setInterval(() => {
                slides[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % slides.length;
                slides[currentIndex].classList.add('active');
            }, 2500); // Change image every 2.5 seconds
        }
    });

    // --- 4. Modal Interactivity Database ---
    const projectData = {
        blender: {
            title: "BLENDER 3D WORKFLOWS",
            color: "text-pink",
            type: "gallery",
            media: ["images/photo_1_2026-06-05_22-57-11.jpg", "images/photo_2_2026-06-05_22-57-11.jpg", "images/photo_4_2026-06-05_22-57-11.jpg", "images/photo_6_2026-06-05_22-57-11.jpg"],
            desc: "A comprehensive showcase of 3D modeling, texturing, and rendering. Focus on hard-surface modeling and optimizing assets for real-time engine integration."
        },
        system: {
            title: "BACKEND INFRASTRUCTURE",
            color: "text-cyan",
            type: "gallery",
            media: ["images/photo_5_2026-06-05_22-57-11.jpg", "images/photo_2_2026-06-05_23-09-11.jpg", "images/photo_3_2026-06-05_23-09-11.jpg", "images/photo_1_2026-06-05_23-09-11.jpg"],
            desc: "System architecture and backend database management. Designed to handle secure data flow, user authentication, and seamless front-end communication."
        },
        game: {
            title: "VISUAL STUDIO GAME",
            color: "text-yellow",
            type: "video",
            media: "images/0605 (2).mp4",
            desc: "Custom game logic built entirely inside Visual Studio. Demonstrates physics calculations, collision detection, and raw C++ / C# application mechanics."
        }
    };

    // --- 5. Modal Controllers ---
    const modal = document.getElementById('project-modal');
    
    if (modal) {
        const triggers = document.querySelectorAll('.project-trigger');
        const btnClose = document.getElementById('close-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalMediaGallery = document.getElementById('modal-media-gallery');
        const modalDesc = document.getElementById('modal-desc');

        // Open Modal
        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const projectId = trigger.getAttribute('data-project');
                const data = projectData[projectId];

                // Set Title and Color
                modalTitle.textContent = data.title;
                modalTitle.setAttribute('data-text', data.title);
                modalTitle.className = `glitch-text ${data.color}`;

                // Set Description
                modalDesc.textContent = data.desc;

                // Set Media (Gallery vs Video)
                modalMediaGallery.innerHTML = ""; // Clear previous media

                if (data.type === "gallery") {
                    const grid = document.createElement('div');
                    grid.className = "modal-media-grid";
                    data.media.forEach(src => {
                        const img = document.createElement('img');
                        img.src = src;
                        grid.appendChild(img);
                    });
                    modalMediaGallery.appendChild(grid);
                } 
                else if (data.type === "video") {
                    const wrapper = document.createElement('div');
                    wrapper.className = "modal-video-wrapper";
                    const vid = document.createElement('video');
                    vid.src = data.media;
                    vid.controls = true;
                    vid.autoplay = true;
                    wrapper.appendChild(vid);
                    modalMediaGallery.appendChild(wrapper);
                }

                // Show Modal
                modal.classList.remove('hidden');
                document.body.style.overflow = "hidden"; // Prevent background scrolling
            });
        });

        // Close Modal
        const closeModal = () => {
            modal.classList.add('hidden');
            document.body.style.overflow = "auto";
            modalMediaGallery.innerHTML = ""; // Stop video playback by clearing DOM
        };

        btnClose.addEventListener('click', closeModal);
        
        // Close on clicking outside the box
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
});
