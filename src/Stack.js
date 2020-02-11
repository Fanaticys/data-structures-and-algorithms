class Stack {
  constructor() {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  add(item) {
    this.stack.push(item);
  }

  remove() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.length - 1];
  }
}

const s = new Stack();

s.add('First');
s.add('Second');
s.add('Third');

s.remove();

console.log(s.peek());