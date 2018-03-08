class ListaSquares {

  constructor(){

    this._squares = [];
  }

  adiciona(square) {

    this._squares.push(square);
  }

  get squares() {

    return [].concat(this._squares);
  }
}