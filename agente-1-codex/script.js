// Navegación móvil, scroll suave y cierre automático del menú.
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".logo, .nav-menu a, .hero-actions a, .footer-logo");

function closeMobileMenu() {
  navToggle.classList.remove("is-active");
  navMenu.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Abrir menú");
}

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.classList.toggle("is-active", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || !targetId.startsWith("#")) {
      return;
    }

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMobileMenu();
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navMenu.classList.contains("is-open")) {
    closeMobileMenu();
  }
});

// Validación del formulario de contacto.
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setFieldError(field, message) {
  const formGroup = field.closest(".form-group");
  const errorMessage = formGroup.querySelector(".error-message");

  formGroup.classList.add("has-error");
  field.setAttribute("aria-invalid", "true");
  errorMessage.textContent = message;
}

function clearFieldError(field) {
  const formGroup = field.closest(".form-group");
  const errorMessage = formGroup.querySelector(".error-message");

  formGroup.classList.remove("has-error");
  field.removeAttribute("aria-invalid");
  errorMessage.textContent = "";
}

function validateField(field) {
  const value = field.value.trim();

  if (field.hasAttribute("required") && value === "") {
    setFieldError(field, "Este campo es obligatorio.");
    return false;
  }

  if (field.type === "email" && value !== "" && !emailPattern.test(value)) {
    setFieldError(field, "Ingresá un email válido.");
    return false;
  }

  clearFieldError(field);
  return true;
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "";

  const fields = Array.from(contactForm.querySelectorAll("input, textarea"));
  const validationResults = fields.map((field) => validateField(field));
  const isValid = validationResults.every(Boolean);

  if (!isValid) {
    formStatus.textContent = "Revisá los campos marcados antes de enviar.";
    return;
  }

  contactForm.reset();
  fields.forEach((field) => clearFieldError(field));
  formStatus.textContent = "Mensaje listo para enviar. Gracias por contactarte, te responderé pronto.";
});

contactForm.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("input", () => {
    validateField(field);
    formStatus.textContent = "";
  });
});

// Entrada suave de elementos al hacer scroll.
const animatedItems = document.querySelectorAll(".fade-item");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  animatedItems.forEach((item) => observer.observe(item));
} else {
  animatedItems.forEach((item) => item.classList.add("is-visible"));
}

// Año dinámico del footer.
document.querySelector("#current-year").textContent = new Date().getFullYear();
