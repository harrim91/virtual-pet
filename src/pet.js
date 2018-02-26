const DEATH_MESSAGE = 'Your pet is no longer alive :(';
const MINIMUM_AGE = 0;
const MAXIMUM_AGE = 30;
const MINIMUM_FITNESS = 0;
const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const MAXIMUM_HUNGER = 10;

function Pet(name) {
  this.name = name;
  this.age = MINIMUM_AGE;
  this.hunger = MINIMUM_HUNGER;
  this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype = {
  get isAlive() {
    return this.age < MAXIMUM_AGE
      && this.hunger < MAXIMUM_HUNGER
      && this.fitness > MINIMUM_FITNESS;
  }
}

Pet.prototype.growUp = function () {
  if (!this.isAlive) {
    throw new Error(DEATH_MESSAGE);
  }

  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
}

Pet.prototype.walk = function() {
  if (!this.isAlive) {
    throw new Error(DEATH_MESSAGE);
  }

  if (this.fitness + 4 <= MAXIMUM_FITNESS) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};

Pet.prototype.feed = function() {
  if (!this.isAlive) {
    throw new Error(DEATH_MESSAGE);
  }

  if (this.hunger - 3 >= MINIMUM_HUNGER) {
    this.hunger -= 3;
  } else {
    this.hunger = MINIMUM_HUNGER;
  }
};

Pet.prototype.checkUp = function() {
  if (!this.isAlive) {
    return DEATH_MESSAGE;
  }

  if (this.hunger >= 5 && this.fitness <= 3) {
    return 'I am hungry AND I need a walk';
  }

  if (this.hunger >= 5) {
    return 'I am hungry';
  }

  if (this.fitness <= 3) {
    return 'I need a walk';
  }

  return 'I feel great!';
}

module.exports = Pet;