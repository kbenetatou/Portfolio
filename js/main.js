import { setupInitialFade } from './fade.js';
import { setupNavigation } from './navigation.js';
import { setupDarkModeToggle } from './theme.js';
import { setupScrollFadeIns } from './scrollFade.js';
import { setupBallAnimationEnd } from './balls.js';
import { setupCarouselScroll } from './carousel.js';

document.addEventListener('DOMContentLoaded', () => {
  setupInitialFade();
  setupNavigation();
  setupDarkModeToggle();
  setupScrollFadeIns();
  setupBallAnimationEnd();
  setupCarouselScroll();
});
