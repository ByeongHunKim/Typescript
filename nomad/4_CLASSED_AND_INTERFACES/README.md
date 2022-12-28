# 4_0 Classes

- TS에서 어떻게 클래스를 만드는가?
- 많은 양의 반복되는 코드들을 쓰지 않도록 어떻게 막아주는가?
- 추상클래스란?

  - 다른 클래스가 상속받을 수 있는 클래스
  - 직접 새로운 인스턴스를 만들 수는 없다
    - TS가 추상 클래스의 인스턴스를 만들 수 없기 때문
    - 오직 다른 곳에서만 상속 받을 수 있는 클래스다

- private, public 이 property 뿐만 아니라 메서드(클래스 안에 존재하는 함수)에서도 작동한다.

  - 만약 getFullName() 앞에 privat을 붙이면, 아래 person1.getFullName()이 작동하지 않는다
  - 추가적으로 property를 private으로 만든다면, 상속받은 클래스에서도 사용할 수 없다(해당 property에 접근할 수 없다)
  - 다른 자식 클래스에서 사용되기를 원한다면, private의 사용은 지양해야한다 대신 protected 사용

  ```typescript
  abstract class User {
    constructor(
      private firstName: string,
      private lastName: string,
      private nickname: string
    ) {}
    getFullNamne() {
      return `${this.firstname} ${this.lastname}`;
    }
  }

  class Player extends User {}

  const person1 = new Player("hunsman", "las", "훈스맨");

  person1.firstName;
  person1.getFullName();
  ```
