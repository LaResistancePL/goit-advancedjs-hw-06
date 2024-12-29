/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType.
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/
console.log("2.ts");
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
const topObject = {
    name: "Alice",
    color: "Blue",
};
const bottomObject = {
    position: 1,
    weight: 60,
};
const result = compare(topObject, bottomObject);
console.log(result);
console.log("______________________________________");
export {};
//# sourceMappingURL=2.js.map