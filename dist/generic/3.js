/*
  У вас є функція merge, яка поєднує два об'єкти.
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/
console.log("3.ts");
function merge(objA, objB) {
    return { ...objA, ...objB };
}
const person = { name: "Alice", age: 30 };
const job = { role: "Developer", company: "TechCorp" };
const mergedObject = merge(person, job);
console.log(mergedObject);
console.log("______________________________________");
export {};
//# sourceMappingURL=3.js.map