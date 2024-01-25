document.addEventListener('DOMContentLoaded', function () {
  var hero_slider = new Splide('#hero_slider', {
    type: 'loop',
    focus: 'left',

    perPage: 3,
    gap: '1rem',
    perMove: 1,
    height: '100%',
    breakpoints: {
      1200: { perPage: 2, gap: '1rem' },
      768: {
        perPage: 1,
        padding: '2rem'
      }
    }
  })
  hero_slider.mount()
})
