// ============================================
// DATOS PERSONALES - Brayan Fonseca
// ============================================
const MI_DATA = {
    nombre: "Brayan Fonseca",
    rol: "Desarrollador Web Junior",
    ubicacion: "Floridablanca, Colombia",
    email: "12brayanstiven@gmail.com",
    linkedin: "https://www.linkedin.com/in/brayan-fonseca-2a63803aa/",
    github: "https://github.com/BrayanFonseca2911",
    telefono: "+57 300 123 4567",
    añosExp: "1+",

    proyectos: [
        { id: "#001", nombre: "Flujo Reportes", desc: "Página web de reportes de emergencias con agente IA y chatbot de Telegram", tech: "n8n, JavaScript, Telegram" },
        { id: "#002", nombre: "CampusBuild", desc: "Aplicación para optimizar procesos y coordinación de equipos de trabajo en construcción", tech: "JavaScript, HTML, CSS" },
        { id: "#003", nombre: "Music Stream", desc: "Plataforma web tipo Spotify con listas de reproducción y paquetes premium", tech: "HTML, CSS" }
    ],

    skills: {
        "HTML5": "90%",
        "CSS3": "85%",
        "JavaScript": "75%",
        "n8n": "94%",
        "Python": "60%",
        "MySQL": "70%",
        "Git": "80%"
    },

    redes: {
        github: "https://github.com/BrayanFonseca2911",
        linkedin: "https://www.linkedin.com/in/brayan-fonseca-2a63803aa/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/"
    }
};

// ============================================
// EMAILJS - CREDENCIALES
// ============================================
const EMAILJS_PUBLIC_KEY = "JxuYZDm6c0HLWaGE4";
const EMAILJS_SERVICE_ID = "service_zv04mib";
const EMAILJS_TEMPLATE_ID = "template_igte4gr";

// Inicializar EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// ============================================
// EFECTO TYPING EN EL HERO
// ============================================
const textos = [
    "Desarrollador Web Junior",
    "Especialista en n8n",
    "Constructor de soluciones",
    "Apasionado por el código"
];

let textoIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedElement = document.querySelector('.typed-text');

function typeEffect() {
    const textoActual = textos[textoIndex];

    if (isDeleting) {
        typedElement.textContent = textoActual.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedElement.textContent = textoActual.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === textoActual.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textoIndex = (textoIndex + 1) % textos.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

typeEffect();

// ============================================
// MENÚ MÓVIL
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Cerrar menú al hacer click en un link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ============================================
// ANIMACIONES REVEAL AL HACER SCROLL
// ============================================
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

reveals.forEach(el => revealObserver.observe(el));

// ============================================
// ANIMACIÓN DE BARRAS DE SKILLS
// ============================================
const skillCards = document.querySelectorAll('.skill-card');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

skillCards.forEach(card => skillObserver.observe(card));

// ============================================
// NAVEGACIÓN LATERAL - DETECTAR SECCIÓN ACTIVA
// ============================================
const sections = document.querySelectorAll('.section, .hero');
const dots = document.querySelectorAll('.side-nav .dot');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            dots.forEach(dot => {
                dot.classList.remove('active');
                if (dot.dataset.section === id) {
                    dot.classList.add('active');
                }
            });
        }
    });
}, { threshold: 0.4 });

sections.forEach(section => sectionObserver.observe(section));

// ============================================
// CURSOR PERSONALIZADO
// ============================================
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    }, 80);
});

// Efecto hover en elementos interactivos
const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-card, .info-card, .contact-card');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => follower.classList.add('hover'));
    el.addEventListener('mouseleave', () => follower.classList.remove('hover'));
});

// ============================================
// TERMINAL INTERACTIVA - COMANDOS
// ============================================
const terminalBody = document.getElementById('terminalBody');
const terminalInput = document.getElementById('terminalInput');

const COMANDOS = {
    help: () => {
        return `
<span class="term-accent">╔══════════════════════════════════════╗</span>
<span class="term-accent">║</span>  COMANDOS DISPONIBLES:              <span class="term-accent">║</span>
<span class="term-accent">╠══════════════════════════════════════╣</span>
<span class="term-accent">║</span> <span class="cmd-highlight">help</span>     - Muestra esta ayuda       <span class="term-accent">║</span>
<span class="term-accent">║</span> <span class="cmd-highlight">about</span>    - Sobre mí                 <span class="term-accent">║</span>
<span class="term-accent">║</span> <span class="cmd-highlight">skills</span>   - Mis habilidades          <span class="term-accent">║</span>
<span class="term-accent">║</span> <span class="cmd-highlight">projects</span> - Ver proyectos            <span class="term-accent">║</span>
<span class="term-accent">║</span> <span class="cmd-highlight">contact</span>  - Datos de contacto        <span class="term-accent">║</span>
<span class="term-accent">║</span> <span class="cmd-highlight">social</span>   - Mis redes sociales       <span class="term-accent">║</span>
<span class="term-accent">║</span> <span class="cmd-highlight">whoami</span>   - ¿Quién soy?              <span class="term-accent">║</span>
<span class="term-accent">║</span> <span class="cmd-highlight">clear</span>    - Limpiar terminal         <span class="term-accent">║</span>
<span class="term-accent">║</span> <span class="cmd-highlight">date</span>     - Fecha actual             <span class="term-accent">║</span>
<span class="term-accent">║</span> <span class="cmd-highlight">email</span>    - Enviarme un email        <span class="term-accent">║</span>
<span class="term-accent">╚══════════════════════════════════════╝</span>`;
    },

    about: () => {
        return `
<span class="term-accent">┌─ SOBRE MÍ ─────────────────────────┐</span>
<span class="term-accent">│</span> Nombre:     <span class="cmd-highlight">${MI_DATA.nombre}</span>
<span class="term-accent">│</span> Rol:        <span class="cmd-highlight">${MI_DATA.rol}</span>
<span class="term-accent">│</span> Ubicación:  <span class="cmd-highlight">${MI_DATA.ubicacion}</span>
<span class="term-accent">│</span> Experiencia:<span class="cmd-highlight"> ${MI_DATA.añosExp} años</span>
<span class="term-accent">│</span>
<span class="term-accent">│</span> Desarrollador junior enfocado en
<span class="term-accent">│</span> construir experiencias digitales
<span class="term-accent">│</span> rápidas, escalables y robustas.
<span class="term-accent">└────────────────────────────────────</span>`;
    },

    skills: () => {
        let lista = `<span class="term-accent">┌─ MIS SKILLS ───────────────────────┐</span>\n`;
        for (const [skill, nivel] of Object.entries(MI_DATA.skills)) {
            const barra = '█'.repeat(Math.round(parseInt(nivel) / 10)) + '░'.repeat(10 - Math.round(parseInt(nivel) / 10));
            lista += `<span class="term-accent">│</span> <span class="cmd-highlight">${skill.padEnd(12)}</span> ${barra} ${nivel}\n`;
        }
        lista += `<span class="term-accent">└────────────────────────────────────┘</span>`;
        return lista;
    },

    projects: () => {
        let lista = `<span class="term-accent">┌─ MIS PROYECTOS ────────────────────┐</span>\n`;
        MI_DATA.proyectos.forEach(p => {
            lista += `<span class="term-accent">│</span> <span class="cmd-highlight">${p.id}</span> ${p.nombre}\n`;
            lista += `<span class="term-accent">│</span>    ${p.desc}\n`;
            lista += `<span class="term-accent">│</span>    Tech: ${p.tech}\n<span class="term-accent">│</span>\n`;
        });
        lista += `<span class="term-accent">────────────────────────────────────┘</span>`;
        return lista;
    },

    contact: () => {
        return `
<span class="term-accent">┌─ CONTACTO ─────────────────────────┐</span>
<span class="term-accent">│</span> 📧 Email:    <span class="cmd-highlight">${MI_DATA.email}</span>
<span class="term-accent">│</span> 💼 LinkedIn: <span class="cmd-highlight">${MI_DATA.linkedin}</span>
<span class="term-accent">│</span> 💻 GitHub:   <span class="cmd-highlight">${MI_DATA.github}</span>
<span class="term-accent">└────────────────────────────────────┘</span>`;
    },

    social: () => {
        return `
<span class="term-accent">┌─ REDES SOCIALES ───────────────────┐</span>
<span class="term-accent">│</span> GitHub:    <span class="cmd-highlight">${MI_DATA.redes.github}</span>
<span class="term-accent">│</span> LinkedIn:  <span class="cmd-highlight">${MI_DATA.redes.linkedin}</span>
<span class="term-accent">│</span> Twitter:   <span class="cmd-highlight">${MI_DATA.redes.twitter}</span>
<span class="term-accent">│</span> Instagram: <span class="cmd-highlight">${MI_DATA.redes.instagram}</span>
<span class="term-accent">└────────────────────────────────────┘</span>`;
    },

    whoami: () => {
        return `<span class="cmd-highlight">visitor</span>@portfolio — Soy <span class="term-accent">${MI_DATA.nombre}</span>, ${MI_DATA.rol}. Escribe <span class="cmd-highlight">help</span> para ver los comandos.`;
    },

    date: () => {
        const fecha = new Date();
        return `<span class="term-accent">${fecha.toLocaleString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })}</span>`;
    },

    email: () => {
        window.location.href = `mailto:${MI_DATA.email}?subject=Hola desde tu portfolio`;
        return `Abriendo cliente de email para <span class="cmd-highlight">${MI_DATA.email}</span>...`;
    },

    clear: () => {
        terminalBody.innerHTML = '';
        return null;
    }
};

function procesarComando(cmd) {
    const comando = cmd.trim().toLowerCase();

    const lineHTML = `
        <div class="terminal-line">
            <span class="prompt">visitor@portfolio:~$</span>
            <span class="command">${cmd}</span>
        </div>
    `;
    terminalBody.insertAdjacentHTML('beforeend', lineHTML);

    if (COMANDOS[comando]) {
        const resultado = COMANDOS[comando]();
        if (resultado !== null) {
            terminalBody.insertAdjacentHTML('beforeend',
                `<div class="terminal-output">${resultado}</div>`
            );
        }
    } else {
        terminalBody.insertAdjacentHTML('beforeend',
            `<div class="terminal-output">
                <span style="color: var(--danger);">❌ Comando no reconocido:</span> "${cmd}"<br>
                Escribe <span class="cmd-highlight">help</span> para ver los comandos disponibles.
            </div>`
        );
    }

    terminalBody.scrollTop = terminalBody.scrollHeight;
}

terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = terminalInput.value;
        if (cmd.trim()) {
            procesarComando(cmd);
            terminalInput.value = '';
        }
    }
});

document.querySelector('.terminal').addEventListener('click', () => {
    terminalInput.focus();
});

// ============================================
// EFECTO MATRIX RAIN
// ============================================
const matrixCanvas = document.getElementById('matrix');
const matrixCtx = matrixCanvas.getContext('2d');

function resizeMatrix() {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
}
resizeMatrix();
window.addEventListener('resize', resizeMatrix);

const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF';
const fontSize = 14;
let columns = Math.floor(matrixCanvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {
    matrixCtx.fillStyle = 'rgba(5, 5, 9, 0.05)';
    matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

    matrixCtx.fillStyle = '#00ff88';
    matrixCtx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        matrixCtx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

// ============================================
// EFECTO PARTÍCULAS
// ============================================
const particlesCanvas = document.getElementById('particles');
const pCtx = particlesCanvas.getContext('2d');

function resizeParticles() {
    particlesCanvas.width = window.innerWidth;
    particlesCanvas.height = window.innerHeight;
}
resizeParticles();
window.addEventListener('resize', resizeParticles);

const particles = [];
const numParticles = 50;

for (let i = 0; i < numParticles; i++) {
    particles.push({
        x: Math.random() * particlesCanvas.width,
        y: Math.random() * particlesCanvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
    });
}

function drawParticles() {
    pCtx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);

    particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > particlesCanvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > particlesCanvas.height) p.vy *= -1;

        pCtx.fillStyle = 'rgba(0, 255, 136, 0.5)';
        pCtx.beginPath();
        pCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        pCtx.fill();

        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
                pCtx.strokeStyle = `rgba(0, 255, 136, ${0.2 * (1 - dist / 120)})`;
                pCtx.lineWidth = 0.5;
                pCtx.beginPath();
                pCtx.moveTo(p.x, p.y);
                pCtx.lineTo(p2.x, p2.y);
                pCtx.stroke();
            }
        }
    });

    requestAnimationFrame(drawParticles);
}

drawParticles();

// ============================================
// FORMULARIO DE CONTACTO CON EMAILJS
// ============================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const boton = contactForm.querySelector('button[type="submit"]');
    const textoOriginal = boton.innerHTML;
    boton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Enviando...</span>';
    boton.disabled = true;

    const templateParams = {
        from_name: document.getElementById('nombre').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('asunto').value,
        message: document.getElementById('mensaje').value,
        to_email: MI_DATA.email
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(() => {
            boton.innerHTML = '<i class="fas fa-check"></i> <span>¡Enviado!</span>';
            contactForm.reset();

            setTimeout(() => {
                boton.innerHTML = textoOriginal;
                boton.disabled = false;
            }, 3000);
        })
        .catch((error) => {
            console.error('Error:', error);
            boton.innerHTML = '<i class="fas fa-times"></i> <span>Error, intentar de nuevo</span>';

            setTimeout(() => {
                boton.innerHTML = textoOriginal;
                boton.disabled = false;
            }, 3000);
        });
});

// ============================================
// REDIMENSIONAR AL CAMBIAR TAMAÑO DE VENTANA
// ============================================
window.addEventListener('resize', () => {
    columns = Math.floor(matrixCanvas.width / fontSize);
    drops = Array(columns).fill(1);
});

// ============================================
// MISIÓN, VISIÓN Y HOJA DE VIDA (nuevo)
// Lee los datos de window.MI_PORTAFOLIO definido
// en el <head> de index.html
// ============================================
(function () {
    const cfg = window.MI_PORTAFOLIO || {};

    // 1. Inyectar Misión y Visión escritas "a mano" en la config
    const misionEl = document.getElementById('texto-mision');
    const visionEl = document.getElementById('texto-vision');
    if (misionEl && cfg.mision) misionEl.textContent = cfg.mision;
    if (visionEl && cfg.vision) visionEl.textContent = cfg.vision;

    // 2. Lógica del CV: abrir modal con UN CLICK + enlace de descarga
    const cvUrl = cfg.hojaDeVida || '';
    const btnVerCV = document.getElementById('btnVerCV');
    const btnDescargar = document.getElementById('btnDescargarCV');
    const cvModal = document.getElementById('cvModal');
    const cvFrame = document.getElementById('cvFrame');
    const cvCerrar = document.getElementById('cvModalClose');
    const cvBackdrop = document.getElementById('cvModalBackdrop');

    if (btnDescargar && cvUrl) btnDescargar.href = cvUrl;

    function abrirCV() {
        if (!cvModal || !cvFrame) return;
        if (!cvUrl) {
            alert('Aún no has agregado tu hoja de vida. Edita "hojaDeVida" en window.MI_PORTAFOLIO dentro del <head> de index.html y coloca la ruta de tu PDF (ej: "cv/mi_cv.pdf") o un enlace (ej: Google Drive).');
            return;
        }
        cvFrame.src = cvUrl;      // el navegador muestra el PDF dentro del modal
        cvModal.classList.add('open');
        cvModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function cerrarCV() {
        if (!cvModal) return;
        cvModal.classList.remove('open');
        cvModal.setAttribute('aria-hidden', 'true');
        cvFrame.src = 'about:blank';
        document.body.style.overflow = '';
    }

    if (btnVerCV) btnVerCV.addEventListener('click', abrirCV);
    if (cvCerrar) cvCerrar.addEventListener('click', cerrarCV);
    if (cvBackdrop) cvBackdrop.addEventListener('click', cerrarCV);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cvModal && cvModal.classList.contains('open')) cerrarCV();
    });
})();