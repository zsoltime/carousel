function Carousel(el) {
  const container = el.querySelector('.carousel__items');
  const controls = el.querySelector('.carousel__controls');
  const items = container.children;
  const numberOfItems = items.length;
  const angle = (2 * Math.PI) / numberOfItems;
  const itemWidth = parseFloat(getComputedStyle(items[0]).width);

  let currentItem = 0;

  function move(i) {
    container.style.transform = `rotateY(${i * -angle}rad)`;
  }

  function init(n, size) {
    const distance = size / (2 * Math.tan(Math.PI / n));
    container.style.transformOrigin = `50% 50% ${-distance}px`;

    Array.from(items).forEach((item, i) => {
      if (i !== 0) {
        item.style.transformOrigin = `50% 50% ${-distance}px`;
        item.style.transform = `rotateY(${i * angle}rad)`;
      }
    });

    move(currentItem);
  }

  function setupControls() {
    function onClick(e) {
      const { target } = e;

      if (target.tagName.toUpperCase() !== 'BUTTON') { return; }

      currentItem += target.classList.contains('btn--next') ? 1 : -1;

      move(currentItem);
    }

    controls.addEventListener('click', onClick, true);
  }

  init(numberOfItems, itemWidth);

  window.addEventListener('resize', () => {
    init(numberOfItems, itemWidth);
  });

  setupControls();
}

window.addEventListener('load', () => {
  document.querySelectorAll('.carousel')
    .forEach(Carousel);
});
