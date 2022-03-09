class Retangulo{
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }


calcularArea(){
  return this.altura * this.largura
}
  area(){
    return this.calcularArea()
  }
}

let retangulo1 = new Retangulo(10,10);
console.log(retangulo1.area())


let retangulo2 = new Retangulo(30,60);
console.log(retangulo2.area())
