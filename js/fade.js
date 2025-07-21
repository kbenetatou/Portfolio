export function fadeIn(element, duration = 500, callback) {
    if (!element) return;
    let opacity = 0;
    const interval = 16;
    const increment = interval / duration;
  
    element.style.opacity = 0;
    element.style.display = 'block';
  
    const fade = setInterval(() => {
      opacity += increment;
      if (opacity >= 1) {
        opacity = 1;
        clearInterval(fade);
        if (callback) callback();
      }
      element.style.opacity = opacity;
    }, interval);
  }
  
  export function setupInitialFade() {
    const first = document.getElementById('fade');
    const second = document.getElementById('balls');
  
    setTimeout(() => fadeIn(first, 450), 450);
  
    setTimeout(() => {
      fadeIn(second, 1000, () => {
        const balls = second?.querySelectorAll('.bouncingball') || [];
        balls.forEach(ball => {
          ball.style.animationPlayState = 'running';
        });
      });
    }, 1000);
  }
  