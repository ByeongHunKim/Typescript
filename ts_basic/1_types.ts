let a = "hello";

// b 변수가 bool 타입이어야 한다는 것을 ts에게 알려주는 방법
let b: boolean = true;

// : number[] 로 명시하지 않으면 해당 배열의 데이터 타입은 any[] 가 된다.
let c: number[] = [1, 2, 3];
c.push(1);

const player = {
  name: "nico",
};

// 불가능 name 속성값이 string이기 때문
player.name = 1;

//----------------------------------------------------------------------
