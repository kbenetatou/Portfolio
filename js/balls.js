export function setupBallAnimationEnd() {
    const balls = document.querySelectorAll('.bouncingball');
    balls.forEach(ball => {
      ball.addEventListener('animationend', () => {
        setTimeout(() => {
          ball.classList.add('text-visible');
          ball.style.pointerEvents = 'auto';
        }, 500);
      });
    });
  }
  