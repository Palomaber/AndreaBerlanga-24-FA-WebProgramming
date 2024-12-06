//inspirational text update
document.querySelector(".intro").innerHTML =
  "Instead of worrying about what you cannot control, shift your energy to what you can create. Focus on the things that bring you joy, that inspire you, and that make you feel alive. Surround yourself with people who uplift and support you, and who help you to grow and evolve. And never, ever give up on your dreams, no matter how impossible they may seem.";
//change image sources
document.querySelector("#firstImage").src = "images/musicSmall-500.jpg";
document.querySelector("#secondImage").src = "images/programmingSmall-500.jpg";
document.querySelector("#thirdImage").src = "images/disGolfSmall-500.jpg";
//change headings
const headings = document.querySelectorAll("h3");
headings[0].innerHTML = "A Heart of Music";
headings[1].innerHTML = "Looking Through the Inside";
headings[2].innerHTML = "Shooting for the Stars";
//change descriptions under images
document.querySelector("#firstText").innerHTML =
  "The workshop taught skills like playing instruments and writing songs, letting people explore music in a hands-on way. It created a space for everyone to connect and share their love of music.";
document.querySelector("#secondText").innerHTML =
  "As you code, your ideas take shape, turning into a website that is both useful and exciting. Every challenge you tackle brings you closer to creating something worth sharing.";
document.querySelector("#thirdText").innerHTML =
  "With each throw of the frisbee, you aim higher, as if reaching for the stars themselves. Every spin feels like chasing a dream across the open sky.";
//change header color functions
function Green() {
  document.querySelector(".headings").style.backgroundColor = "#ADC698";
}
document.querySelector("ColorChanging").addEventListener("click", Green);

function Blue() {
  document.querySelector(".headings").style.backgroundColor = "#6A8EAE";
}
document.querySelector("ColorChanged").addEventListener("click", Blue);

function Purple() {
  document.querySelector(".headings").style.backgroundColor = "#7D5C65";
}
document.querySelector("ColorChange").addEventListener("click", Purple);