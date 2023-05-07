var banner = document.getElementById("banner");
var images = banner.getElementsByTagName("img");
var index = 0;

setInterval(function() {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
}, 3000);

var button = banner.getElementsByTagName("button")[0];
var heading = banner.getElementsByTagName("h1")[0];
var paragraph = banner.getElementsByTagName("p")[0];

button.addEventListener("click", function() {
  heading.innerHTML = "¡Ofertas especiales para ti!";
  paragraph.innerHTML = "Aprovecha nuestras promociones exclusivas y obtén grandes descuentos.";
  button.innerHTML = "Ver promociones ";
  setTimeout(function() {
  window.location.href = "../Paginas/tabla de flyshoes.html";
}, 5000); // retraso de 5 segundos (5000 milisegundos)

});

banner.addEventListener("mouseover", function() {
  banner.style.backgroundColor = "#008CBA";
  heading.style.color = "#fff";
  paragraph.style.color = "#fff";
  button.style.backgroundColor = "#fff";
  button.style.color = "#008CBA";
});

banner.addEventListener("mouseout", function() {
  banner.style.backgroundColor = "transparent";
  heading.style.color = "#fff";
  paragraph.style.color = "#fff";
  button.style.backgroundColor = "#008CBA";
  button.style.color = "#fff";
});
