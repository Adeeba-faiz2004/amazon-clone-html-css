// Small interactions for the static demo.
const backToTop = document.querySelector('.foot-panel1');
if (backToTop) {
  backToTop.setAttribute('role', 'button');
  backToTop.setAttribute('tabindex', '0');
  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  backToTop.addEventListener('click', goTop);
  backToTop.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      goTop();
    }
  });
}
