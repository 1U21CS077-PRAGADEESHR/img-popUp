const pic = document.querySelectorAll(".pic");
const popup = document.getElementById("popup");
const img = document.getElementById("img");
const close = document.getElementById("close");

for (let i = 0; i < pic.length; i++) {
  pic[i].addEventListener('click', function() {
    popup.style.display = "flex";
    img.src = pic[i].src;

    // Increase image size on click (consider touch devices)
    img.style.transform = "scale(2)"; // Enlarge image significantly
  });
}

close.addEventListener('click', function() {
  popup.style.display = "none";
  img.style.transform = "scale(1)"; // Reset image size on close
});