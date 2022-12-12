// ts의 타입 계층도에서 object 타입은 인터페이스와 클래스의 상위 타입이다.

// object 타입으로 선언된 변수는 number, boolean, string type 의 값을 가질 수 없다.
// 하지만, 속성 이름이 다른 댁체를 모두 자유롬게 담을 수 있다.

// ts는 객체 타입을 정의할 수 있게 하는 "interface" 라는 키워드를 제공한다.

interface name {
  속성이름[?]: 속성타입[...]
}

interface person {
  name: string
  age: number
}

let person1: person = {name: 'hunsman', age: 26}

// 다른 변수에 name 또는 age 속성이 없거나 위에서 선언한 인터페이스 안에 없는 속성으로 변수를 선언하면 에러가 발생한다.
// 만약 선택 속성으로 선언하고 싶다면? -> etc? : boolean 이렇게 속성 이름 옆에 물음표? 를 붙여주면 된다.