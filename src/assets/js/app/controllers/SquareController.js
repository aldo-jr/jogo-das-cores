class SquareController {

  constructor(vencedor) {

    let $ = document.querySelector.bind(document);

    this._listaSquares = new Bind(
      new ListaSquares(),
      new SquareView($('#squaresView')),
      'adiciona');

    this._vencedor = vencedor;
  }

  adiciona(vencedor) {

    try {
      this._listaSquares.adiciona(this._criaSquare(vencedor));
    } catch (erro) {
      console.log(erro);
    }
  }

  verifica(cor, elemento) {

    if (cor === this._vencedor) {
      alert("Venceu");
    } else {
      elemento.style.opacity = '0'
    }
  }

  _criaSquare(vencedor) {

    let cor = vencedor ? this._vencedor : new GerarCor().cor;
    return new Square(cor)
  }
}