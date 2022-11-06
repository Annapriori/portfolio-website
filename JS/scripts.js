console.log ("Welcome to Anna Eivör's Portfolio")


function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
    //I want my logo also dessapear when menu opens. I wanted to add here smth like logo=none, but it didnt work.
  } else {
    x.className = 'navtoggle';
  }
}
