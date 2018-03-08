class GerarCor {
  constructor() {

    this._cor = `${this._getRandoNumber(0, 255)},${this._getRandoNumber(0, 255)},${this._getRandoNumber(0, 255)}`;
  }

  get cor(){

    return this._cor
  }

  _getRandoNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
}