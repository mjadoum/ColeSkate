 // when the user click on "=" nav bar check and apply.
document.getElementById("open").addEventListener("click", openNav);
// when the user click on "x" when the sideNav open just give the "SideNav"'s div style 0px as width .
document.getElementById("close").addEventListener("click", closeNav);

// variables for media queries to get the size of the screen.
let queryMobile = window.matchMedia("(max-width: 767px)");
let queryTablet = window.matchMedia("(max-width: 821px)");
let queryLtablet = window.matchMedia("(max-width: 1281px)");
let sideNav = document.getElementById("mySidenav");

function openNav(){
// if the size that applied matches then edit the width of the "SideNav"'s div style.
if (queryMobile.matches) {
    sideNav.style.width = "100%";
    $('body').addClass('stop-scrolling');
} else if (queryTablet.matches) {
   sideNav.style.width = "100%";
   $('body').addClass('stop-scrolling');
} else if (queryLtablet.matches) {
    sideNav.style.width = "100%";
    $('body').addClass('stop-scrolling');
}else{
    // when the vars don't match the screen size then just give the "SideNav"'s div style 505px as width.
 sideNav.style.width = "505px";
 $('body').addClass('stop-scrolling');
}
}
// when the user click on "x" when the sideNav open just give the "SideNav"'s div style 0px as width .
  function closeNav() {
      sideNav.style.width = "0";
      $('body').removeClass('stop-scrolling');

  }




