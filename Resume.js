window.onload = function() {navMenu()};

function navMenu() {
  //Get the button
  var nm = document.getElementById("Nav-Menu");

  var x = document.getElementById("DropDown");
  x.style.display = "none";

  nm.addEventListener("click", openMenu);

  var ddContent = document.getElementsByClassName("dd-content");
  for(let i=0; i<ddContent.length; i++){
    ddContent[i].addEventListener("click", closeMenu);
  }

  window.onscroll = closeMenu;
  window.addEventListener('resize', closeMenu);
}

// When the user clicks on the button, scroll to the top of the document
function openMenu() {
  var x = document.getElementById("DropDown");

  if(x.style.display == "none"){
    x.style.display = "block";
  }
  else{
    x.style.display = "none";
  }
}

function closeMenu(){
  var x = document.getElementById("DropDown");
  x.style.display = "none";
}
