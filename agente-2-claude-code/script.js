/* =============================================
   VITCOP STUDIO — script.js
   ============================================= */

/* --- Año actual en el footer --- */
document.getElementById('footerYear').textContent = new Date().getFullYear();

/* =============================================
   HEADER: clase "scrolled" al desplazarse
   ============================================= */
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* =============================================
   MENÚ HAMBURGUESA
   ============================================= */
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

function openMenu() {
  navMenu.classList.add('is-open');
  navToggle.classList.add('is-open');
  navToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden'; // evitar scroll de fondo
}

function closeMenu() {
  navMenu.classList.remove('is-open');
  navToggle.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

navToggle.addEventListener('click', () => {
  navMenu.classList.contains('is-open') ? closeMenu() : openMenu();
});

// Cerrar al hacer clic en un enlace del menú
navMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Cerrar al hacer clic fuera del header
document.addEventListener('click', (e) => {
  if (!header.contains(e.target)) closeMenu();
});

// Cerrar con tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

/* =============================================
   SCROLL SUAVE A ANCLAS
   ============================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    const target   = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    // Desplazamiento manual para compensar el header fijo
    const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10) || 72;
    const top = target.getBoundingClientRect().top + window.scrollY - headerH;

    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* =============================================
   FADE-IN AL HACER SCROLL (IntersectionObserver)
   ============================================= */
const fadeElements = document.querySelectorAll('.fade-in');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeElements.forEach(el => observer.observe(el));
} else {
  // Fallback: mostrar todos directamente si no hay soporte
  fadeElements.forEach(el => el.classList.add('is-visible'));
}

/* =============================================
   FORMULARIO DE CONTACTO — VALIDACIÓN
   ============================================= */
const contactForm = document.getElementById('contactForm');
const formSuccess  = document.getElementById('formSuccess');

// Reglas de validación por campo
const validations = {
  name: {
    el:       document.getElementById('name'),
    errorEl:  document.getElementById('nameError'),
    validate: (v) => {
      if (!v.trim()) return 'El nombre es obligatorio.';
      if (v.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres.';
      return '';
    }
  },
  email: {
    el:       document.getElementById('email'),
    errorEl:  document.getElementById('emailError'),
    validate: (v) => {
      if (!v.trim()) return 'El email es obligatorio.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())) return 'Ingresá un email válido (ej: nombre@dominio.com).';
      return '';
    }
  },
  message: {
    el:       document.getElementById('message'),
    errorEl:  document.getElementById('messageError'),
    validate: (v) => {
      if (!v.trim()) return 'El mensaje es obligatorio.';
      if (v.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres.';
      return '';
    }
  }
};

// Valida un campo y aplica/quita clases de error
function validateField(key) {
  const { el, errorEl, validate } = validations[key];
  const msg = validate(el.value);
  errorEl.textContent = msg;
  el.classList.toggle('error', !!msg);
  return !msg;
}

// Validación al perder el foco (blur)
Object.keys(validations).forEach(key => {
  const { el } = validations[key];
  el.addEventListener('blur', () => validateField(key));
  // Revalida en tiempo real solo si ya hay error (feedback inmediato)
  el.addEventListener('input', () => {
    if (el.classList.contains('error')) validateField(key);
  });
});

// Envío del formulario
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validar todos los campos requeridos
  const allValid = Object.keys(validations).every(key => validateField(key));
  if (!allValid) {
    // Enfocar primer campo con error
    const firstError = Object.values(validations).find(f => f.el.classList.contains('error'));
    if (firstError) firstError.el.focus();
    return;
  }

  // Simular envío con estado de carga
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;

  submitBtn.textContent = 'Enviando…';
  submitBtn.disabled = true;
  formSuccess.setAttribute('hidden', '');

  setTimeout(() => {
    // Mostrar mensaje de éxito
    formSuccess.removeAttribute('hidden');
    contactForm.reset();

    // Limpiar estados de error
    Object.values(validations).forEach(({ el, errorEl }) => {
      el.classList.remove('error');
      errorEl.textContent = '';
    });

    // Restaurar botón
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;

    // Desplazar suavemente al mensaje de éxito
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Ocultar mensaje después de 8 segundos
    setTimeout(() => {
      formSuccess.setAttribute('hidden', '');
    }, 8000);
  }, 900);
});
