
//JS FUNCTIONALITY FOR THE HAMBURGER MENU //
const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')
const toggleBtnAnimation =  document.querySelector('.bounce_animation')

// THE ONCLICK FUNCTIONS //
function openDropdown(){
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'fa fa-close'
  : 'fa fa-bars'
  toggleBtnAnimation.classList.toggle('bounce__animation')
}

function removeDropdown(){
  if(dropDownMenu.classList.contains(`open`)){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    
    toggleBtnIcon.classList = isOpen
    ? 'fa fa-close'
    : 'fa fa-bars'
  }
  toggleBtnAnimation.classList.remove('bounce__animation')
}

const linkOne = document.querySelector(``)
