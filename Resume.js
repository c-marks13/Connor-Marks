window.onload = function() {navMenu()};

function navMenu() {

  //sets the display property of the dropdown menu to none right away
  var x = document.getElementById("DropDown");
  x.style.display = "none";
  
  //Get the button
  var nm = document.getElementById("Nav-Menu");
  //drop down menu will either open or close when the buttom is clicked
  nm.addEventListener("click", openMenu);

  //if the menu is open and one of the choices is clicked it will close the menu
  var ddContent = document.getElementsByClassName("dd-content");
  for(let i=0; i<ddContent.length; i++){
    ddContent[i].addEventListener("click", closeMenu);
  }

  //if the menu is open and the user scrolls it will close the menu
  window.onscroll = closeMenu;
  //if the menu is open and the user resizes the browser it will close the menu
  window.addEventListener('resize', closeMenu);
}

// When the user clicks on the button, scroll to the top of the document
function openMenu() {
  var x = document.getElementById("DropDown");

  //display block the drop down will appear
  //display none the drop down will not exists
  if(x.style.display == "none"){
    x.style.display = "block";
  }
  else{
    x.style.display = "none";
  }
}

//method that will change the dropdown method to display none
function closeMenu(){
  var x = document.getElementById("DropDown");
  x.style.display = "none";
}
