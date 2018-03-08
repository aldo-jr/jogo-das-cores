class Square {

  constructor(cor) {

    this._cor = cor;
    Object.freeze(this);
  }

  get cor(){

    return this._cor;
  }
}