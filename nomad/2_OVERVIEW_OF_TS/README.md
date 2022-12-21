# keyword
- 런타임 에러
  - 실행할 때 발생하는 에러를 런타임 에러라고 한다
- 그래서 런타임 에러를 마주치게 될 것이 실제 유저이기 때문에 최악의 상황이다
- 타입스크립트를 사용하면 코드가 실행되기 전에 에러가 발생 또는 경고를 해주기 때문에 코드의 버그를 많이 줄일 수 있다

# 2_0
- 타입스크립트 코드를 작성하면 자바스크립트로 변환된다 ( 컴파일 )
  - 변환하는 이유는 브라우저가 자바스크립트를 이해하기 때문이다
  - node.js 는 타입스크립트, 자바스크립트 모두 이해할 수 있다
- 타입스크립트가 제공하는 보호장치는 타입스크립트 코드가 자바스크립트로 변환되기 전에 발생한다
  - 타입스크립트가 먼저 코드를 확인한 다음에 변환 자바스크립트 안에서 실수가 일어나지 않게 디버깅 해준다
  - 하지만 이때 타입스크립트 코드에 에러가 있으면 자바스크립트로 컴파일 되지 않는다
  - 이렇게 보호장치가 런타임에 작동하지 않기 때문에 좋은 것 같다
    - 유저는 브라우저를 사용하기 때문에, 컴파일 된 일반 자바스크립트 코드를 사용한다
- 만약 성공적으로 자바스크립트로 컴파일이 되어 코드를 준다면, 타입스크립트 코드가 제대로 작동 했고, 데이터 타입에도 문제가 없다는 것을 의미하기 때문에 변횐된 자바스크립트 코드에 버그가 전혀 없다는 뜻 이다

# 2_1
- 타입스크립트의 타입 시스템
  - 데이터와 변수의 타입을 명시적으로 정의할 수 있다
    - `let b : boolean = true`
    - `let c : number[] = []`
      - `c.push(1)`
  - 자바스크립트처럼 변수만 생성하고 넘어가도 된다
    - `let a = "hello"`
    - 타입스크립트가 타입을 추론해준다

# 2_2
- 기본적인 타입스크립트 타입 외에 다른 타입들
  - player 객체에서 선택형 속성값 age 선언하는 방법
  ```typescript
  const player : {
    name: string,
    age?: number
  } = {
    name: "person1"
  }

  if(player.age && player.age < 10) {
    console.log("exist")
  }

  ```

- 더 적은 코드를 사용하고 싶은 경우
  ```typescript
  type Player = {
    name:string,
    age?:number
  }

  type Age = number;

  const person1 : Player = {
    name: "person1",
    age:12
  }

  const person2 : Player = {
    name: "person2"
  }
  ```

- object의 타입을 명시적으로 정해주는 법

  ```typescript
  type Age = number;
  type Name = string;

  type Player = {
    name: Name,
    age?: Age
  }

  function playerMaker(name:string) : Player {
    return {
      name,
    }
  }

  const person1 = playerMaker("nico")
  person1.age = 12
  ```

# 2_3

- readonly 속성(property)
  - 요소들을 읽기 전용으로 만들 수 있다

  ```typescript
  
  // as is
  type Age = number;
  type Name = string;
  type Player = {
    name: Name
    age?:Age
  }

  const playerMaker = (name:string) : Player => ({name})
  const person1 = playerMaker("Kim")
  person1.age = 26

  // to be
  type Age = number;
  type Name = string;
  type Player = {
    readonly name:Name
    age?:Age
  }

  const playerMaker = (name:string) : Player => ({name})
  // 화살표 함수이며, 인자값으로 string 타입의 name을 받는다. 그리고
  // return 값은 Player 타입의 객체를 반환하는데, age 속성값은 선택형이기 때문에 name만 객체에 담아서 리턴해도 상관없다
  
  const person2 = playerMaker("Min") 
  // playerMaker 화살표 함수에 "Min" 이라는 string 값을 인자값으로 넣으면서 함수를 호출
  
  person2.age = 25
  // age 속성은 없으면 생성?

  person2.name = "awdawd"
  // 여기서 readonly로 지정해놨기 때문에, 에러 발생
  ```

  - 예제2
  ```typescript
  const numbers : readonly number[] = [1, 2, 3, 4]
  numbers.push(1)
  // readonly 여서 에러 발생


  // tuple 튜플 
  const player : readonly [string, number, boolean] = ["nico", 12, false]
  ```

# 2_4
  - unknown
    - 변수값의 타입을 모를 때 사용
  - void
    - 아무것도 return 하지 않는 함수를 대상으로 사용
    - 따로 지정해줄 필요는 없다
  - never
    - 함수가 절대 return하지 않을 때 발생한다
  ```typescript
  let a:unknown;

  if(typeof a === 'number'){
    let b = a + 1
  }
  if(typeof a === 'string'){
    let b = a.toUpperCase();
  }

  // never
  function hello(name:string|number){
    if(typeof name === "string"){
      name
    } else if (typeof name === "number"){
      name
    } else {
      name
    }
  }

  ```