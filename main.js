export class Stack {
  constructor() {
    this.elements = [];
    this.size = 0;
  }

  size() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(elem) {
    this.elements.push(elem);
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('EmptyStackException');
    }
    this.size--;
    return this.elements.pop();
  }
}

export class LeapYear {
  isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;

    return year % 4 === 0;
  }
}

export class ChocolateBars {
  static CANNOT_PACK_BAG = -1;

  calculate(small, big, total) {
    const maxBigBoxes = Math.floor(total / 5);
    const bigBoxesWeCanUse = Math.min(maxBigBoxes, big);
    total -= bigBoxesWeCanUse * 5;

    if (small < total) {
      return ChocolateBars.CANNOT_PACK_BAG;
    }
    return total;
  }
}

export class PlayerPoints {
  calcularPontosTotais(pontosAtuais, vidasRestantes) {
    if (pontosAtuais < 50) return pontosAtuais + 50;
    return vidasRestantes < 3 ? pontosAtuais + 30 : pontosAtuais * 3;
  }
}
