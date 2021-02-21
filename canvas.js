var c = document.querySelector(".canvas");
var ctx = c.getContext("2d");

let draw = () => {
  let width = window.innerWidth;
  let height = window.innerHeight + 500;

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

  let grad = ctx.createRadialGradient(
    100,
    height - 500,
    2,
    220,
    height - 590,
    210
  );

  grad.addColorStop(0, "#f1e8cd");
  grad.addColorStop(1, "#f5f5f5");

  ctx.fillStyle = grad;
  ctx.fillRect(0, 400, 400, 800);
};

draw();

addEventListener("resize", () => {
  ctx.clearRect(0, 0, c.width, c.height);
  draw();
});
