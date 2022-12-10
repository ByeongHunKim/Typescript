//before 
function makePerson(name, age) {}

//before일 때
makePerson(32, "jack") // 을 했을 때 에러가 발생하면 원인을 찾기가 어려움


// after 
function makePerson(name: string, age: number) {}

// 또한 Typescript는 Javascript와 달리 오류의 원인을 알려주기 때문에 대규모 프로젝트를 진행할 때 
// TS를 더 선호하게 되었다.


// 만약 선언된 타입과 다른 타입의 값으로 변경을 시도하면 오류가 발생된다.
// 타입 주석
let example1 : number = 1

let example2 : boolean = true // or false

let example3 : string = 'hello'

let example4 : object = {}


// 타입 추론
let example1 = 1 // example1 타입을 number로 판단

let example2 = true // example2 타입을 boolean으로 판단

let example3 = 'hello' // example3 타입을 string으로 판단

let example4 = {} // example4 타입을 object로 판단

// any 타입

let example: any = 0

example = 'hello;

example = true

example = {}

//이렇게 재할당 가능 

// undefined 타입
let example1: undefined = undefined

example1 = 1 // Type '1' is not assignable to type 'undefined' 오류 발생

// undefined 타입으로 선언되었기 때문에 오직 undefined 값만 가질 수 있다.


// 최상위 타입 : any
// 최하위 타입 : undefined

// 템플릿

let example1: undefined = undefined

example1 = 1 // Type '1' is not assignable to type 'undefined' 오류 발생

// undefined 타입으로 선언되었기 때문에 오직 undefined 값만 가질 수 있다.


// 최상위 타입 : any
// 최하위 타입 : undefined