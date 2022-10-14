
window.addEventListener('load', function() {
  new Glide('.glide', {
    type: 'carousel',
    startAt: 2,
    perView: 2.55,
    focusAt: 'center',
    keyboard: true,
    gap: 15,
    breakpoints: {
      500: {
        gap: 15,
        perView: 1.36,
      },
      769: {
        gap: 7,
        perView: 1.36,
      },
    }
  }).mount()
});

