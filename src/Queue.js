class Queue {
  constructor() {
    this.queue = [];
  }

  get length() {
    return this.queue.length;
  }

  add(item) {
    this.queue.push(item);
  }

  remove() {
    this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }
}

const q = new Queue();
q.add("First");
q.add("Second");
q.add("Third");

q.remove();
q.remove();

console.log(q.peek());

