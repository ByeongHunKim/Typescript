# 1_2 
- 타입스크립트는 자바스크립트를 기반으로 만들어진 언어다
- 자바스크립트가 가지고 있는 여러 문제를 해결하고 보완하기 위해 만들어진 언어다
- 타입스크립트를 사용하면 개발자를 실수로부터 보호해주고 더욱 생산적인 개발자가 될 수 있다

## question
- 자바스크립트의 문제가 무엇인가?
- 타입스크립트가 어떻게 이런 문제점들을 보완하고 해결하는가?
- 타입스크립트 프로젝트를 어떻게 설정하는가?

# 1_3
- 더 나은 개발 경험과 더 생산적인 개발을 원하며 버그도 줄이고 싶은 JS 개발자
- 타입(타입 안정성) 에 익숙한 개발자

## question
- 어떻게 하면 타입스크립트를 이용해서 다른 언어에서 지원하는 타입 안정성을 구현하는가?

# 1_4

- 자바스크립트에서 가능한 것
  - 자바스크립트는 개발자을 이해해주려고 한다 -> 에러를 보여주지 않으려고 한다.
  ```typescript
    // 예시1
    [ 1, 2, 3, 4] + false

    // output -> '1,2,3,4false'
    // 원래는 배열에 boolean을 더할 수 없기 때문이다

    // 예시2
    function divide(a, b) {
      return a / b
    }

    divide(2,3)
    // output -> 0.66666666..
    // 문제는  자바스크립트가 이 함수를 올바르게 사용하도록 강제하지 않기 때문에 파라미터로 다른값이 
    // 들어와도 에러를 보여주지 않는다는 점이다.

    divide("awdada")
    // output -> 
    
    // 예시3
    const person = { name: "hunsman"}

    person.hello()

    // 에러가 발생하긴 하지만, 컴퓨터에서 코드가 실행되고 나타나는 에러이다.
    // 원래는 해당 객체에 해당 속성값이 없으면 접근을 못한다는 에러를 발생시키며 코드를 실행시키지 않아야하기 때문

  ```


## question
- 타입스크립트가 존재하는 이유는 무엇인가?
  - 타입 안정성을 통해 타입스크립트의 장점을 이용할 수 있게 된다
  - 타입 안정성을 통해 엄청난 개발자 경험을 누릴 수 있게 된다
  - 타입 안정성을 통해 코드에 버그가 엄청 많이 줄어들게 된다
  - 타입 안정성을 통해 런타임 에러가 줄어들고 생산성도 늘어나게 된다
  - 결론적으로 타입스크립트게 제공하는 가장 큰 장점은 타입 안정성이다

- 사람들이 왜 자바스크립트를 버리고 타입스크립트로 넘어오는가?
  - 배열 + boolean 같은 코드를 작성할 수 없다
  - 타입스크립트에서 함수를 작성할 때 파라미터값이 두 개라고 알려주면, 입력값 하나만 보내는 걸 허용하지 않는다
  - 객체에 존재하지 않는 속성값을 호출하려고하면 런타임 에러가 발생할거라고 경고한다
  - 이렇게 보호장치가 있다






