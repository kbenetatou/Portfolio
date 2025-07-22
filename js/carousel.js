export function setupCarouselScroll() {
  const container = document.getElementById('toppicks');
  const rightArrow = document.querySelector('.nright');
  const wrapper = container?.parentElement;

  if (!container || !rightArrow || !wrapper) return;

  const scrollAmount = 500;

  rightArrow.addEventListener('click', () => {
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  const checkScrollEnd = () => {
    const scrollRight = container.scrollLeft + container.clientWidth;
    const scrollWidth = container.scrollWidth;

    const atEnd = scrollRight >= scrollWidth - 1;

    wrapper.classList.toggle('no-fade', atEnd);
    rightArrow.style.display = atEnd ? 'none' : 'block';
  };

  container.addEventListener('scroll', checkScrollEnd);
  checkScrollEnd();
}
