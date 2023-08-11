const { AnimalShelter } = require("./stack-queue-animal-shelter.js");

describe("Animal Shelter", () => {
  test("enqueue", () => {
    let animalShelter = new AnimalShelter();
    let dog = { species: "dog", name: "scobby" };
    let cat = { species: "cat", name: "garfield" };
    animalShelter.enqueue(dog);
    animalShelter.enqueue(cat);
    expect(animalShelter.dog.storage[animalShelter.dog.head]).toEqual(dog);
    expect(animalShelter.cat.storage[animalShelter.cat.head]).toEqual(cat);
  });
  test("dequeue", () => {
    let animalShelter = new AnimalShelter();
    let dog = { species: "dog", name: "scobby" };
    let cat = { species: "cat", name: "garfield" };
    animalShelter.enqueue(dog);
    animalShelter.enqueue(cat);
    expect(animalShelter.dequeue("dog")).toEqual(dog);
    expect(animalShelter.dequeue("cat")).toEqual(cat);
  });
  test("return null if pref is not dog or cat", () => {
    let animalShelter = new AnimalShelter();
    let dog = { species: "dog", name: "scobby" };
    let cat = { species: "cat", name: "garfield" };
    animalShelter.enqueue(dog);
    animalShelter.enqueue(cat);
    expect(animalShelter.dequeue("bird")).toEqual(null);
  });
});
