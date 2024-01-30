var legend_slide = new Splide('#legend_slide', {
  type: 'loop',
  focus: 'center',
  width: 'calc(252.03125vw / 3)',
  perPage: 7,
  perMove: 1,
  trimSpace: false,
  autoplay: true,
  height: '30vw',
  breakpoints: {
    1200: {
      perPage: 5,
      height: '40vw'
    },
    768: {
      perPage: 3,
      height: '80vw',
      width: '100%',
      gap: '10vw'
    }
  }
})

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

  legend_slide.mount()
  legen_style()

  legend_slide.on('move', function (destIndex) {
    legend_move(destIndex)
  })

  var feature_review_slide = new Splide('#feature_review_slide', {
    perPage: 3,
    focus: 'center',
    width: '64.0625vw',
    gap: '4vw',
    breakpoints: {
      1200: {
        perPage: 2,
        width: '100%'
      },
      768: {
        perPage: 2,
        width: '100%'
      }
    }
  })
  feature_review_slide.mount()
})

window.addEventListener('resize', function () {
  legen_style()
})

function legend_move (destIndex) {
  var screenWidth = window.innerWidth
  var num_item

  if (screenWidth > 1200) {
    num_item = 7
  } else if (screenWidth <= 1200 && screenWidth > 768) {
    num_item = 5
  } else if (screenWidth <= 768) {
    num_item = 3
  }

  var li_tag_list = document.querySelectorAll(
    '#legend_slide ul.splide__list > li'
  )

  var li_active_id = document.querySelector(
    '#legend_slide ul.splide__list > li.is-visible.is-active > div'
  ).id

  var i,
    len = li_tag_list.length,
    activeId = destIndex,
    slide_num = len - 4 * num_item
  for (i = 0; i < len; i++) {
    var element = li_tag_list[i].querySelector('.slide-item')
    element.className = 'slide-item'

    var elementId = parseInt(element.id.slice(-3))
    if ((elementId - activeId + slide_num) % slide_num == 1) {
      element.classList.add('active')
    }
    for (j = 0; j < (num_item - 1) / 2; j++) {
      if ((elementId - activeId + slide_num) % slide_num == j + 2) {
        element.classList.add('next-' + (j + 1))
      }
      if ((elementId - activeId + slide_num + j) % slide_num == 0) {
        element.classList.add('prev-' + (j + 1))
      }
    }
  }
}

function legen_style () {
  var screenWidth = window.innerWidth
  var num_item

  if (screenWidth > 1200) {
    num_item = 7
  } else if (screenWidth <= 1200 && screenWidth > 768) {
    num_item = 5
  } else if (screenWidth <= 768) {
    num_item = 3
  }
  var center = (num_item - 1) / 2

  var li_tag_list = document.querySelectorAll('#legend_slide .is-visible')

  var i,
    len = li_tag_list.length
  for (i = 0; i < len; i++) {
    var element = li_tag_list[i].querySelector('.slide-item')
    element.className = 'slide-item'
    if (i == center) element.classList.add('active')
    else if (i == center - 3) element.classList.add('prev-3')
    else if (i == center - 2) element.classList.add('prev-2')
    else if (i == center - 1) element.classList.add('prev-1')
    else if (i == center + 1) element.classList.add('next-1')
    else if (i == center + 2) element.classList.add('next-2')
    else if (i == center + 3) element.classList.add('next-3')
  }
}
