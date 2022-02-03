// variables for media queries to get the size of the screen.
let queryMobile = window.matchMedia("(max-width: 1281px)");
let sideNav = document.getElementById("mySidenav");
// when the user click on "=" nav bar check and apply.
document.getElementById("open").addEventListener("click", function (){
// if the size that applied matches then edit the width of the "SideNav"'s div style.
if (queryMobile.matches) {
    sideNav.style.width = "100%";
    $('body').addClass('stop-scrolling');
}else{
    // when the vars don't match the screen size then just give the "SideNav"'s div style 505px as width.
 sideNav.style.width = "505px";
 $('body').addClass('stop-scrolling');
}
});
// when the user click on "x" when the sideNav open just give the "SideNav"'s div style 0px as width .
document.getElementById("close").addEventListener("click", function closeNav() {
      sideNav.style.width = "0";
      $('body').removeClass('stop-scrolling');
  });
