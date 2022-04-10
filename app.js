const menu = $("#navElementsContainer");
let menuHidden = true;
function drop() {
  if (menuHidden) {
    hideMenu(true);
  } else {
    showMenu(true);
  }
}

function hideMenu(animate) {
  if (animate) {
    menu.slideUp();
  } else {
    menu.hide()
  }
  menuHidden = false;
}

function showMenu(animate) {
  if (animate){
    menu.slideDown();
  } else {
    menu.show()  
  }
  menuHidden = true;
}

window.onresize = () => {
  if ($(window).outerWidth() > 900) {
    showMenu(false);
  } else {
    hideMenu(false);
  }
};

window.onresize();