// this is a Singleton example using a regular object instead of a Class...

let count = 0;

const counter = {
  increment() {
    return ++count;
  },

  decrement() {
    return --count;
  },
};

Object.freeze(counter);
export { counter };
