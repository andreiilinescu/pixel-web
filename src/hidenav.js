var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").classList.remove("fade-in-image");
  } else {
    document.getElementById("navbar").classList.add("fade-in-image");
  }
  prevScrollpos = currentScrollPos;
}