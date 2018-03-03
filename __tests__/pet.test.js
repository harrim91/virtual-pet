const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet()).toBeInstanceOf(Object);
  });

  it('sets the name property', () => {
    const pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
  });

  it('has a initial age of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.age).toEqual(0);
  });

  it('has a initial hunger of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.hunger).toEqual(0);
  });

  it('has a initial fitness of 10', () => {
    const pet = new Pet('Fido');
    expect(pet.fitness).toEqual(10);
  });
});

describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.age).toEqual(1);
  });

  it('increments hunger by 5', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });

  it('decreases fitness by 3', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');
    pet.age = 30;
    expect(pet.growUp).toThrow('Your pet is no longer alive :(');
  });
});

describe('walk', () => {
  it('increases fitness by 4', () => {
    const pet = new Pet('Fido');
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });

  it('increases fitness to a maximum of 10', () => {
    const pet = new Pet('Fido');
    pet.fitness = 9;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');
    pet.age = 30;
    expect(pet.walk).toThrow('Your pet is no longer alive :(');
  });
});

describe('feed', () => {
  it('decreases hunger by 3', () => {
    const pet = new Pet('Fido');
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });

  it('decreases hunger to a minimum of 0', () => {
    const pet = new Pet('Fido');
    pet.hunger = 1;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');
    
    pet.age = 30;

    expect(pet.feed).toThrow('Your pet is no longer alive :(');
  });
});

describe('checkUp', () => {
  it('returns I need a walk if the fitness is lte 3', () => {
    const pet = new Pet('Fido');
    pet.fitness = 3;
    expect(pet.checkUp()).toEqual('I need a walk');
  });

  it('returns I am hungry if the fitness is gte 5', () => {
    const pet = new Pet('Fido');
    pet.hunger = 5;
    expect(pet.checkUp()).toEqual('I am hungry');
  });

  it('returns I am hungry AND I need a walk if the hunger is gte 5 and fitness lte 3', () => {
    const pet = new Pet('Fido');
    pet.hunger = 5;
    pet.fitness = 3;
    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
  });

  it('returns I feel great! by default', () => {
    const pet = new Pet('Fido');
    
    expect(pet.checkUp()).toEqual('I feel great!');
  });

  it('returns Fido is not alive if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(pet.checkUp()).toEqual('Your pet is no longer alive :(');
  });
});

describe('isAlive', () => {
  it('is true by default', () => {
    const pet = new Pet('Fido');

    expect(pet.isAlive).toBe(true);
  });

  it('is false if the age is gte 30', () => {
    const pet = new Pet('Fido');
    pet.age = 30;

    expect(pet.isAlive).toBe(false);
  });

  it('is false if the hunger is gte 10', () => {
    const pet = new Pet('Fido');
    pet.hunger = 10;

    expect(pet.isAlive).toBe(false);
  });

  it('is false if the fitness is lte 0', () => {
    const pet = new Pet('Fido');
    pet.fitness = 0;

    expect(pet.isAlive).toBe(false);
  });

  it('is true at the limits', () => {
    const pet = new Pet('Fido');
    pet.age = 29;
    pet.hunger = 9;
    pet.fitness = 1;

    expect(pet.isAlive).toBe(true);
  })
});