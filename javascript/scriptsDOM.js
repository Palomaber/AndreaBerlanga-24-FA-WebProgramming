//inspirational text update
document.querySelector(".intro").innerHTML =
  "Instead of worrying about what you cannot control, shift your energy to what you can create. Focus on the things that bring you joy, that inspire you, and that make you feel alive. Surround yourself with people who uplift and support you, and who help you to grow and evolve. And never, ever give up on your dreams, no matter how impossible they may seem.";
//change image sources
document.querySelector("#firstImage").src = "images/RedFlower.png";
document.querySelector("#secondImage").src = "images/BlueFlower.png";
document.querySelector("#thirdImage").src = "images/PurpleFlower.png";
//change headings
const headings = document.querySelectorAll("h3");
headings[0].innerHTML = "Love";
headings[1].innerHTML = "The Blues";
headings[2].innerHTML = "Purple Rain";
//change descriptions under images
document.querySelector("#firstText").innerHTML =
  "In the language of flowers, red is the color of love, passion, and unspoken feelings. Like this red bloom, love grows deeper with each passing day, vibrant and full of life.";
document.querySelector("#secondText").innerHTML =
  "A gentle reminder that even in moments of sadness, beauty can still bloom in the quietest corners. The blues may linger, but like this flower, there's always hope for a brighter tomorrow.";
document.querySelector("#thirdText").innerHTML =
  "Purple rain falls like a quiet symphony, leaving behind a trail of mystery and grace. The gentle hues of purple remind us that even in the rain, there is a calm, quiet beauty to be found.";
//change header color functions
function Red() {
  document.querySelector(".headings").style.backgroundColor = "#FF858D";
}
document.querySelector("#ColorChanging").addEventListener("click", Red);

function Blue() {
  document.querySelector(".headings").style.backgroundColor = "#6A8EAE";
}
document.querySelector("#ColorChanged").addEventListener("click", Blue);

function Purple() {
  document.querySelector(".headings").style.backgroundColor = "#7D5C65";
}
document.querySelector("#ColorChange").addEventListener("click", Purple);
