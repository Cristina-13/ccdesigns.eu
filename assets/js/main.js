// Gestión del Menú Móvil
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const navMenuWrapper = document.querySelector('.nav-menu-wrapper');
const menuLinks = document.querySelectorAll('.nav-menu-wrapper a');

if (mobileMenuBtn && navMenuWrapper) {
    const openMenu = () => {
        navMenuWrapper.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        navMenuWrapper.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    mobileMenuBtn.addEventListener('click', openMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
    
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// Lógica de Navegación Activa Inteligente
const navLinks = document.querySelectorAll('.nav-group li a');
const sections = document.querySelectorAll('section[id]');
const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');

const clearActiveStates = () => {
    navLinks.forEach(link => link.classList.remove('active-nav'));
};

if (isHomePage && sections.length > 0) {
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        clearActiveStates();
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (current && href.includes('#' + current)) {
                link.classList.add('active-nav');
            }
        });
    });
} else {

    clearActiveStates();
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        if (currentPath.includes(linkPath.replace('../', '')) && !linkPath.includes('#')) {
            link.classList.add('active-nav');
        }
    });
}



// Validación para el formulario de contacto
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const privacyCheckbox = document.querySelector('input[name="privacy_accepted"]');
        
        if (privacyCheckbox && !privacyCheckbox.checked) {
            e.preventDefault(); 
            alert('Debes aceptar la política de privacidad para continuar.');
        }
    });
}

//Categorias blog
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.filter-item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            items.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });


// Gestión del Banner de Cookies - CC Designs
document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");

    
    const cookieDecision = localStorage.getItem("cookie-decision");

    
    if (!cookieDecision) {
        if (cookieBanner) {
            cookieBanner.style.display = "block";
        }
    }

    
    if (acceptBtn) {
        acceptBtn.addEventListener("click", function() {
            localStorage.setItem("cookie-decision", "accepted");
            cookieBanner.style.display = "none";
            console.log("Cookies aceptadas por el usuario.");
        });
    }

    
    if (rejectBtn) {
        rejectBtn.addEventListener("click", function() {
            localStorage.setItem("cookie-decision", "rejected");
            cookieBanner.style.display = "none";
            console.log("Cookies rechazadas por el usuario.");
        });
    }
});


// Gestión del Modal de Imagen (Sin título y con bloqueo de scroll)
const modal = document.getElementById("project-modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.querySelector(".modal-close");

if (modal) {
    document.querySelectorAll('.project-image img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
            
            // Bloquear scroll de forma efectiva
            document.documentElement.style.overflow = 'hidden'; // Bloquea en la raíz
            document.body.style.overflow = 'hidden';           // Bloquea en el cuerpo
        });
    });

    const hideModal = () => {
        modal.style.display = "none";
        // Restaurar scroll
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
    };

    if (closeModal) closeModal.onclick = hideModal;
    
    modal.onclick = (e) => {
        if (e.target === modal) hideModal();
    };
}