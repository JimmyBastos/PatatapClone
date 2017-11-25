var poligons = [];
//Executa um envento quando uma tecla é pressionada
function onKeyDown(event) {
  // uso a letra pressionada como query para buscar um ojeto
  if (data[event.key]) {
    //reproduz o som usando a biblioteca howler
    data[event.key].sound.play();
    //cria um ponto aleatorio na tela
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = randomPoint * maxPoint;
    //desenhar uma forma geometrica nas cordenadas geradas
    var retangle = new Path.Rectangle({
      center: point,
      size: [500, 500],
      fillColor: data[event.key].color
    });
    //adiciona a forma em um array
    poligons.push(retangle);
  }
}
//Metodo execultado 60 vezes por segundo
function onFrame(event) {
  //Adicina animação a cada poligono presente no array
  poligons.forEach(function(poligon, i) {
    // modifica a cor
    poligon.fillColor.hue += 2;
    // modifica o tamanho
    poligon.scale(0.9);
    // rotaciona
    poligon.rotate(20);
    //verifica se o poligono não é mais visivel e remove do array
    if (poligon.area == 0) {
      poligon.remove();
      poligons.splice(i, 1);
    }
  });
}
