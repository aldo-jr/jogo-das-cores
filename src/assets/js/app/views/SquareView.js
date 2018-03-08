class SquareView extends View {

  constructor(elemento) {

    super(elemento);
  }

  template(model) {

    return model.squares.map(n =>
      `<div 
        class="square" 
        style="background: rgb(${n.cor});" 
        onclick="squareController.verifica('${n.cor}', this)" 
      ></div>`)
      .join('')
  }
}