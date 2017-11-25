function generateHexColor() {
  hexadecimal = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
  cor = "#";
  for (i = 0; i < 6; i++) {
    index = Math.floor((Math.random() * hexadecimal.length - 1) + 1);
    cor += hexadecimal[index];
  }
  return cor;
}

function generateRgbColor() {
  var R = Math.floor((Math.random() * 255) + 1);
  var G = Math.floor((Math.random() * 255) + 1);
  var B = Math.floor((Math.random() * 255) + 1);
  var rgb = 'rgb(' + R + ',' + G + ',' + B + ')';
  console.log(rgb);
  return rgb;
}
