export class Time {
  constructor(nome, escudo){
    this.nome = nome;
    this.escudo = escudo;

    this.pontos = 0;
    this.jogos = 0;
    this.gm = 0;
    this.gs = 0;
  }

  get saldo(){
    return this.gm - this.gs;
  }

  atualizar(gm, gs, pontos){
    gm = +gm;
    gs = +gs;
    pontos = +pontos
    this.gm = this.gm + gm;
    this.gs = this.gs + gs;
    this.pontos = this.pontos + pontos;
    this.jogos++;
  }
}
