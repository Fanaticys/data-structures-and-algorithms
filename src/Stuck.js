class Stuck {
  constructor() {
    this.stuck = [];
  }

  get length() {
    return this.stuck.length;
  }

  add(item) {
    this.stuck.push(item);
  }

  remove() {
    this.stuck.pop();
  }

  peek() {
    return this.stuck[this.length - 1];
  }
}

const s = new Stuck();

s.add('First');
s.add('Second');
s.add('Third');

s.remove();

console.log(s.peek());