// Singletons are classes which can be instantiated once, and can be accessed globally. This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.

let counter = 0;
let instance;

class Counter {
  // constructor is a key word when used in a javascript class...
  // this gets called whenever a new class is instantiated in the code.
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  // returns the value of the instance
  getInstance() {
    return this;
  }

  // returns the current value of the counter variable
  getCount() {
    return counter;
  }

  // increment method that increments counter
  increment() {
    return ++counter;
  }

  // decrement method that decreases counter
  decrement() {
    return --counter;
  }
}

// A "Singleton" should only be able to get instantiated once. Currently, we can create multiple instances of the Counter class by:

/**
 *  const counter1 = new Counter();
 *  const counter2 = new Counter();
 *
 */

// We can ensure that we only create one instance by specifying some logic in the constructor of the class.

/**
 *  const counter1 = new Counter();
 *  const counter2 = new Counter(); // this throws an error due to constructor logic.
 *
 */

// To ensuire that the code that consumes and references the class cannot modify it, we can use Object.freeze method.

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;

// DISADVANTAGES
/**
 * - Singletons are actually considered an anti-pattern, and can (or.. should) be avoided in JavaScript
 *  - However, the class implementation shown in the examples above is actually overkill. Since we can directly create objects in JavaScript, we can simply use a regular object to achieve the exact same result. Let's cover some of the disadvantages of using Singletons!
 */
