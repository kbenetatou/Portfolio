export function setupDarkModeToggle() {
    const themeSwitch = document.getElementById('theme-switch');
    if (!themeSwitch) return;
  
    const enableDarkMode = () => {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'active');
    };
  
    const disableDarkMode = () => {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'inactive');
    };
  
    if (localStorage.getItem('dark-mode') === 'active') {
      enableDarkMode();
    }
  
    themeSwitch.addEventListener('click', () => {
      const mode = localStorage.getItem('dark-mode');
      mode !== 'active' ? enableDarkMode() : disableDarkMode();
    });
  }
  