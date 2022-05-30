// A proxy object can determine the behavior whenever we're interacting with the object, for example when we're getting a value, or setting a value.

// Generally speaking, a proxy means a stand-in for someone else. Instead of speaking to that person directly, you'll speak to the proxy person who will represent the person you were trying to reach. The same happens in JavaScript: instead of interacting with the target object directly, we'll interact with the Proxy object.

const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
};

//Instead of interacting with this object directly, we want to interact with a proxy object. In JavaScript, we can easily create a new proxy with by creating a new instance of Proxy.

// const personProxy = new Proxy(person, {})

// the {} parameter represents the handler. we can define specific behaviour based on the type of interaction. The most common ones are get and set:
// get: used to access a property
// set: used to modify a property

// adding the handlers below:
// a proxy can also be useful to add validation. A user shouldn't be able to change person's age to a string value or an empty name.

// export const personProxy = new Proxy(person, {
//   get: (obj, prop) => {
//     console.log(`The value of ${prop} is ${obj[prop]}`);
//   },
//   set: (obj, prop, value) => {
//     console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
//     obj[prop] = value;
//     return true;
//   },
// });

// VALIDATION
// you can also use proxies to define validation...

// export const personProxy = new Proxy(person, {
//     get: (obj, prop) => {
//       if (!obj[prop]) {
//         console.log("this property does not exist on object");
//       } else {
//         console.log(`The value of ${prop} is ${obj[prop]}`);
//       }
//     },
//     set: (obj, prop, value) => {
//       if (prop === "age" && typeof value !== "number") {
//         console.log(`Sorry, you can only pass numeric values for age.`);
//       } else if (prop === "name" && value.length < 2) {
//         console.log(`You need to provide a valid name.`);
//       } else {
//         console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
//         obj[prop] = value;
//       }
//       return true;
//     },
//  });

// REFLECT
// JavaScript provides a built-in object called Reflect, which makes it easier for us to manipulate the target object when working with proxies.
// Instead of accessing properties through obj[prop] or setting properties through obj[prop] = value, we can access or modify properties on the target object through Reflect.get() and Reflect.set().

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    Reflect.set(obj, prop, value);
  },
});

// PERFORMANCE
// Overusing the Proxy object or performing heavy operations on each handler method invocation can easily affect the performance of your application negatively. It's best to not use proxies for performance-critical code.

personProxy.name; // calls the get method in the proxy
personProxy.age = 43; // calls the set method in the proxy
