# chapter 1

## lib.es5.d.ts
```typescript
interface Array<T> {
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
}
```

- forEach method 가 `callbackfn` 과 `thisArg` 라는 두 인수를 받을 수 있다는 표시 