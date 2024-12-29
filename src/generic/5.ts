/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

console.log("5.ts");
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

let pair1: KeyValuePair<number, string> = { key: 1, value: "First" };
let pair2: KeyValuePair<string, boolean> = { key: "Second", value: true };
console.log("pair1:", pair1);
console.log("pair2:", pair2);

console.log("______________________________________");

export {};
