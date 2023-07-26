var lienzo1 = document.getElementById("canvas1");
var papel1 = lienzo1.getContext("2d");
var imagen1 = new Image();

var pos_x = 0;
var pos_y = 0;

imagen1.src =
  "https://plazamercado.shop/wp-content/uploads/2020/11/Rosas-Rosadas-1.jpg";

imagen1.addEventListener("load", dibujar);

function dibujar() {
  papel1.drawImage(imagen1, 0, 0);
}
setInterval(mover_rosas, 30);

function mover_rosas() {
  pos_x = pos_x + 5;
  if (pos_x == 500) {
    pos_x = 0;
  }
  papel1.clearRect(0, 0, 500, 500);
  papel1.drawImage(imagen1, pos_y, pos_x);
}
