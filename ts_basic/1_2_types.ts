type Age = number;
type Name = string;
type Player = {
  name: Name;
  age?: Age;
};

function playerMaker(name: string): Player {
  return {
    name,
  };
}

const playerName = playerMaker("person1");
playerName.age = 12;
