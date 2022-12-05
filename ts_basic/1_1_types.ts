type Age = number;
type Name = string;
type Player = {
  name: Name;
  age?: Age;
};

const nico: Player = {
  name: "nice",
};

const lynn: Player = {
  name: "lynn",
  age: 12,
};
