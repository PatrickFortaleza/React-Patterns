// The prototype pattern is a useful way to share properties among many objects of the same type.

class Dog {
  // When using ES6 classes, all properties that are defined on the class itself, bark in this case, are automatically added to the prototype.
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Woof!`;
  }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");

// We can see the prototype directly through accessing the prototype property on a constructor, or through the __proto__ property on any instance.

console.log(Dog.prototype);
// constructor: ƒ Dog(name) bark: ƒ bark()
console.log(dog1.__proto__);
// constructor: ƒ Dog(name) bark: ƒ bark()

// Since all instances have access to the prototype, it's easy to add properties to the prototype even after creating the instances.

Dog.prototype.play = () => console.log("Playing now!");
dog1.play();

//Let's create another type of dog, a super dog! This dog should inherit everything from a normal Dog, but it should also be able to fly. We can create a super dog by extending the Dog class and adding a fly method.

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    return "Flying!";
  }
}

const superDog1 = new SuperDog("Daisy");
dog1.bark();
dog1.fly();

// We have access to the bark method, as we extended the Dog class. The value of __proto__ on the prototype of SuperDog points to the Dog.prototype object!

// It gets clear why it's called a prototype chain: when we try to access a property that's not directly available on the object, JavaScript recursively walks down all the objects that __proto__ points to, until it finds the property!

const dog = {
  bark() {
    return `Woof!`;
  },
};

const pet1 = Object.create(dog);
// The Object.create method lets us create a new object, to which we can explicitly pass the value of its prototype.
