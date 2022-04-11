let imageSets = {
  index: ["alaplap.jpg", "billentyüzet.jpg", "code.jpg"],
};

function preloadImage(url) {
  var img = new Image();
  img.src = url;
}

let getUrl = window.location;
let url = getUrl.protocol + "//" + getUrl.host + "/images/"
for (const [key, value] of Object.entries(imageSets)) {
  for (let i = 0; i < value.length; i++) {
    preloadImage(url + value[i])
  }
}

$(document).ready(() => {
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
      menu.hide();
    }
    menuHidden = false;
  }

  function showMenu(animate) {
    if (animate) {
      menu.slideDown();
    } else {
      menu.show();
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

  let disappearHeight = window.innerHeight / 3;
  window.onscroll = () => {
    console.log(1 - (1 / disappearHeight) * $(window).scrollTop());
    $(".image").css(
      "opacity",
      1 - (1 / disappearHeight) * $(window).scrollTop()
    );
  };

  let currentIndex = 0;
  function toggleImage() {
    $(".image").css(
      "background-image",
      'url("./images/' + imageSets["index"][currentIndex] + '")'
    );
    currentIndex >= imageSets["index"].length - 1
      ? (currentIndex = 0)
      : currentIndex++;
  }

  let intervalId = setInterval(toggleImage, 5000);

  toggleImage();
});
