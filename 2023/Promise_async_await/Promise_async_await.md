# Last Updated 2023.01.15 sun

# 생각해야 하는 것들

- 비동기 API를 사용하는 코드를 쉽게 작성하려면? Promise 클래스와 async/await 구문에 대해 잘 알아야 한다.
- 우선 자바스크립트가 단일스레드로 동작하기 때문에 될 수 있으면 동기 API를 사용하는 것은 지양해야한다.

  - 타입스크립트 또한 ES5 자바스크립트로 변환되어 실행되기 때문에 마찬가지이다.
    - 그렇기 떄문에 코드를 작성할 때 항상 비동기 방식으로 동작하는 API를 사용해 프로그램의 반응성을 생각해야한다.

- 예를 들어 fs모듈을 사용할 때, 파일을 읽을 등 물리적인 시간이 필요한 경우가 있다.
  - 동기 방식 : 모두 읽을 때 까지 프로그램의 동작을 멈춘다.
  - 비동기 방식 : 프로그램의 동작을 멈추지 않는 대신 결과를 콜백함수로 얻게 한다.
    - 파일을 읽어서 Buffer 타입으로 전달해주면, toString 메서드로 변환해야한다.

## Promise

- Promise는 비동기 API 사용에서 나타나는 콜백 지옥 형태의 코드를 어느정도 관리할 수 있는 코드 형태로 바꿔준다.
- Promise 객체에 then 메소드를 여러 번 호출하는 코드 형태를 `then-체인` 이라 한다.

### resolve

- then 메소드의 콜백함수 쪽에 전달
  - `Promise.resolve(값)` 형태로 호출하면 -> 항상 `'값'`은 then 메소드에서 얻을 수 있다.
  - then 메소드는 반환된 값이 Promise 타입이면, resolve(해소) 한 값을 반환한다.

### reject

- catch 메소드의 콜백함수 쪽에 전달
  - `Promise.reject(Error 타입 객체)`를 호출하면 -> `'Error 타입 객체'` 는 catch 메소드에서 얻을 수 있다.
  - catch 메소드는 만약 reject(거절) 당한 값일 때 값을 반환한다.

### finally

- 항상 마지막에 호출 된다

## async/await

- ESNext 자바스크립트와 타입스크립트는 Promise를 좀 더 쉬운 형태의 코드로 만들 수 있게 하는 구문이다

### async

- 두 가지 성질

  - 1. 일반 함수처럼 사용 가능
  - 2. Promise 객체로 사용 가능

- 예외처리
  - `throw new Error('error')`

### await

- await키워드는 async라는 이름의 함수 수정자(function modifier)가 있는 함수 몸통에서 사용 할 수 있다

- 피연산자(operand)의 값을 반환해준다.
  - 만약 피연산자가 Promise 객체라면, then메소드를 호출해 얻은 값을 반환해준다.
