var c = document.querySelector(".canvas");
var ctx = c.getContext("2d");

let draw = () => {
  let width = window.innerWidth;
  let height = window.innerHeight;

  c.setAttribute("width", width);
  c.setAttribute("height", height);

  ctx.fillStyle = "#f5f5f5";
  ctx.fillRect(0, 0, width, height);

  let gradtwo = ctx.createRadialGradient(
    width - 480,
    150,
    2,
    width - 490,
    160,
    240
  );

  gradtwo.addColorStop(0, "#cecece");
  gradtwo.addColorStop(1, "#f5f5f5");

  ctx.fillStyle = gradtwo;
  ctx.fillRect(width - 900, 000, 1000, 900);
};

draw();

addEventListener("resize", () => {
  ctx.clearRect(0, 0, c.width, c.height);
  draw();
});
