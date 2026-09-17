document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('nova-ready');

  if (window.salla?.event) {
    window.salla.event.on('cart::item.added', () => {
      document.body.classList.add('nova-cart-updated');
      window.setTimeout(() => document.body.classList.remove('nova-cart-updated'), 900);
    });
  }
});
