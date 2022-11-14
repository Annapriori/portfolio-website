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

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
    var icon=document.getElementsByClassName("fa-bars")[0];
    if(icon){
       icon.className = icon.className.replace("fa-bars", "fa-xmark");
    }
    else{
    icon=document.getElementsByClassName("fa-xmark")[0];
     icon.className = icon.className.replace("fa-xmark", "fa-bars");
    }
}
