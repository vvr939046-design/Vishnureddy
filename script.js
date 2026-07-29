// Smooth scroll animation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in sections on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});

// Typing effect
const text = "Data Analyst";
let i = 0;

function typing() {
  const title = document.querySelector(".hero-content h3");
  if (!title) return;

  title.innerHTML = "";

  function type() {
    if (i < text.length) {
      title.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 120);
    }
  }

  type();
}

window.onload = typing;
