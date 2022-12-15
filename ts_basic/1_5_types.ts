type Age = number;
type Name = string;
type Player = {
  readonly name: Name;
  age?: Age;
};

const playerMaker = (name: string): Player => ({ name });
const person1 = playerMaker('person1');

person1.age = 26;

//------------------------------------------------------

// readonly 일 때는 값을 변경할 수 없다.
const numbers: readonly number[] = [1, 2, 3, 4];

numbers.push(1);

// readonly 가 없을 땐 정상적으로 값을 변경할 수 있다.
