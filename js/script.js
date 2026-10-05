document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Lightbox Functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');

    galleryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const imgSrc = item.getAttribute('data-image');
            lightboxImg.src = imgSrc;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightboxImg.src = ''; // Clear source after transition
        }, 300);
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    closeBtn.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Handle ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    // Form Submission (Prevent default and show alert for demo)
    const form = document.querySelector('.lead-form');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = form.querySelector('#nome').value.trim();
        const email = form.querySelector('#email').value.trim();
        const telefone = form.querySelector('#telefone').value.trim();

        const mensagem = `Olá! Tenho interesse no imóvel em Búzios.

Nome: ${nome}
E-mail: ${email}
Telefone/WhatsApp: ${telefone}`;

        if (typeof gtag === 'function') {
            gtag('event', 'conversion', {
                'send_to': 'AW-18472925320/GwEPCJ7Q84sdEIjxyehE'
            });
        }

        const whatsappUrl =
            `https://wa.me/5522999981984?text=${encodeURIComponent(mensagem)}`;

        window.open(whatsappUrl, '_blank');
    });
}
});
