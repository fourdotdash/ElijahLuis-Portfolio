let texto = document.getElementById("texto");
let LandingPic = document.getElementById("LandingPic");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  texto.style.marginTop = value * 2.5 + "px";
});
