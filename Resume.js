window.onload = function() {navMenu()};

function navMenu() {
  //Get the button
  var nm = document.getElementById("Nav-Menu");
  var x = document.getElementById("DropDown");
  x.style.display = "none";
  nm.addEventListener("click", openMenu);
}

// When the user clicks on the button, scroll to the top of the document
function openMenu() {
  console.log(1);
  var x = document.getElementById("DropDown");

  if(x.style.display == "none"){
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}
