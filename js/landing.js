document.addEventListener('DOMContentLoaded', function () {
  var hero_slider = new Splide('#hero_slider', {
    type: 'loop',
    perPage: 3,
    gap: '1rem',
    drag: 'free',
    perMove: 1,

    autoplay: true,
    breakpoints: {
      1200: { perPage: 2, gap: '1rem' },
      768: {
        perPage: 1,
        padding: '5rem'
      }
    }
  })
  hero_slider.mount()
})
