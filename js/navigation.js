export function setupNavigation() {
    const openNav = document.getElementById('openNav');
    const closeNav = document.getElementById('closeNav');
    const navLinks = document.getElementById('nav-links');
  
    if (!openNav || !closeNav || !navLinks) return;
  
    openNav.addEventListener('click', () => {
      navLinks.style.width = '300px';
    });
  
    closeNav.addEventListener('click', () => {
      navLinks.style.width = '0';
      navLinks.style.border = 'none';
    });
  
    const handleResize = () => {
      if (window.innerWidth > 768) {
        navLinks.style.width = '';
        navLinks.style.border = '';
        closeNav.classList.remove('active');
      } else {
        closeNav.classList.add('active');
      }
    };
  
    window.addEventListener('resize', handleResize);
    handleResize(); // initial
  }
  