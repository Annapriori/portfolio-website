console.log("Welcome to Anna Eivör's Portfolio")


function menuToggle(...args: []) {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
  var icon = document.getElementsByClassName("fa-bars")[0];
  if (icon) {
    icon.className = icon.className.replace("fa-bars", "fa-xmark");
  }
  else {
    icon = document.getElementsByClassName("fa-xmark")[0];
    icon.className = icon.className.replace("fa-xmark", "fa-bars");
  }
}

window.onload = () => {
  // (A) GET ALL IMAGES
  let all = document.getElementsByClassName("zoomE");

  // (B) CLICK TO GO FULLSCREEN
  if (all.length > 0) {
    for (let i of all) {
      i.onclick = () => {
        // (B1) EXIT FULLSCREEN
        if (document.fullscreenElement != null || document.webkitFullscreenElement != null) {
          if (document.exitFullscreen) { document.exitFullscreen(); }
          else { document.webkitCancelFullScreen(); }
        }

        // (B2) ENTER FULLSCREEN
        else {
          if (i.requestFullscreen) { i.requestFullscreen(); }
          else { i.webkitRequestFullScreen(); }
        }
      };
    }
  }
};
