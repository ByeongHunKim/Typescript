# 3_0 Call Signature

- call signature

  - 함수가 어떻게 호출되는지 설명해줌 ( 단축키 같은 것)
  - 파라미터의 타입은 무엇인지
  - 함수의 리턴 타입은 무엇인지

  ```typescript
  // 일반 함수
  function add(a: number, b: number): number {
    return a + b;
  }

  // 화살표 함수
  const add = (a: number, b: number) => a + b;

  // 함수의 call signature type을 만드는 방법
  type Add = (a: number, b: number) => number;

  const add: Add = (a, b) => a + b;

  // 오버로딩 방법으로 선언하는 call signature
  type Add = {
    (a: number, b: number): number;
  };

  const add: Add = (a, b) => a + b;
  ```

# 3_1 Overloading

- 오버로딩

  - `function overloading` or `method overloading` 이라고 부른다
  - 대부분 다른사람들이 만든 외부 라이브러리를 사용할텐데 이런 패키지나 라이브러리들에서 오버로딩을 많이 사용한다.
  - 오버로딩은 함수가 서로 다른 여러 개의 call signature를 가지고 있을 때 발생시킨다

  ```typescript
  Router.push({
    path: "/homepage",
    state:1
  })

  .push("/homepage")

  // Config라는 object 타입 생성
  type Config = {
    path: string,
    state: object
  }


  // Push라는 타입 생성
  type Push = {
    (path:string):void
    (config: Config):void
  }

  // push 구현
  const push:Push = (config) => {
    if(typeof config === "string") {console.log(config)}
    else {
      console.log(config.path, config.state)
    }
  ```

  - overloading에 대한 추가 코드 ( 다른 개수의 파라미터를 가진 경우 )
    - 나머지 파라미터도 타입 지정을 해줘야 한다.

  ```typescript
  type Add = {
    (a: number, b: number): number;
    (a: number, b: number, c: number): number;
  };

  // 이걸로 통해서 백엔드를 짤 때 파라미터로 hash 값이 넘어오지 않으면 출금신청 실패로 뺄 수 있다.
  const add: Add = (a, b, c?: number) => {
    if (c) return a + b + c;
    return a + b;
  };
  ```

# 3_2 Polymorphism

- 다형성 - 여러가지 다른 구조들

  - TS가 어떻게 다형성을 주는가? (generic)

  - 배열을 받고, 그 배열의 결과를 print 해주는 함수

- contrete type

  - 우리가 전부터 봐왔던 타입 ( number, string, boolean, void, unknown type)
  - TS에게 generic(타입의 placeholder) 타입을 받을거라고 알려주면

  ```typescript
  // call signature 선언

  type SuperPrint = {
    (arr: number[]): void;
  };

  const superPrint: SuperPrint = (arr) => {
    // 배열을 받아서, 해당 배열의 요소를 콘솔로 찍는 코드
    arr.forEach((i) => console.log(i));
  };

  // 문제는 위에 선언한 타입이 number인데, 다른 boolean, string 모두 직접 선언을 하기엔 비효율적이다.
  // 여기서 다형성을 활용하는 더 좋은 방법이 있다.
  // generic type을 통해 concrete type을 모두 선언할 필요가 없기 때문에, call signature의 개수를 줄일 수 있다.

  type SuperPrint1 = {
    <TypePlaceholder>(arr: TypePlaceholder[]): void;
  };

  const superPrint1: SuperPrint1 = (arr) => {
    arr.forEach((i) => console.log(i));
  };

  superPrint1([1, 2, 3, 4]);
  superPrint1([true, false, true]);
  superPrint1(["a", "b", "c"]);
  superPrint1([1, 2, true, false, "hello"]);

  // superPrint1의 리턴 타입을 바꾸고 싶은 경우

  type SuperPrint2 = {
    <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
  };

  const superPrint2: SuperPrint2 = (arr) => arr[0];

  const a = superPrint1([1, 2, 3, 4]);
  const b = superPrint1([true, false, true]);
  const c = superPrint1(["a", "b", "c"]);
  const d = superPrint1([1, 2, true, false, "hello"]);

  // a ~ b 모두 배열의 첫번째 index를 반환
  ```

# 3_3 Generics Recap

- 하나의 제네릭 타입을 추가하고 싶은 경우

  ```typescript
  type SuperPrint3 = <T, M>(a: T[], b: M) => T;

  const superPrint3: SuperPrint3 = (a) => a[0];

  const a = superPrint([1, 2, 3, 4], "x");
  ```

# 3_4 Conclusions

- typescript가 타입을 유추하도록 하는 것이 좋다
- 라이브러리나 코드를 디자인할 때 제네릭을 사용한다

  ```typescript
  type Player<E> = {
    name: string;
    extraInfo: E;
  };

  type person1Extra = {
    favFood: string;
  };

  type person1Player = Player<person1Extra>;

  const person1: Player<{ favFood: string }> = {
    name: "person1",
    extraInfo: {
      favFood: "ramem",
    },
  };
  ```

  ```typescript
  type arrNumbers = Array<number>;

  let a: A = [1, 2, 3, 4];

  function printAllNumbers(arr: number);

  function pruntAllnumbers2(arr: Array<number>);
  ```
