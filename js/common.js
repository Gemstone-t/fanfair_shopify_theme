$('#drop').on('change', function () {
  if (this.checked) {
    $('#show-list').hide()
    $('#hide-list').show()
  } else {
    $('#show-list').show()
    $('#hide-list').hide()
  }
})

function adjustStyles () {
  screenWidth = window.innerWidth
  //   console.log(screenWidth)
  if (screenWidth >= 1024 && screenWidth < 1320) {
    $('#menu_about').html('About <i class="bi bi-chevron-down bi-bold"></i>')
    $('#menu_info').html('Info <i class="bi bi-chevron-down bi-bold"></i>')
  } else {
    $('#menu_about').html(
      'About Beaver Summer Camp <i class="bi bi-chevron-down bi-bold"></i>'
    )
    $('#menu_info').html(
      'Info for Families <i class="bi bi-chevron-down bi-bold"></i>'
    )
  }
}

adjustStyles()

window.addEventListener('resize', adjustStyles)

newLocal = $('.search-bar')[0].addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    console.log($('#chk-search')[0].checked)
    $('#chk-search')[0].checked = !$('#chk-search')[0].checked
  }
})

const nav_menu = document.querySelectorAll('.menu > li')

nav_menu.forEach(function (item, index) {
  item.addEventListener('mouseover', function (e) {
    var subitem = item.getElementsByClassName('nav-link')
    subitem[0].focus()
  })
})
