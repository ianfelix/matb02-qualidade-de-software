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
