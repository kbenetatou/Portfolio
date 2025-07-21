export function setupScrollFadeIns() {
    const sections = document.querySelectorAll('.fade-in-section, .projects');
  
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => observer.observe(section));
  }
  


