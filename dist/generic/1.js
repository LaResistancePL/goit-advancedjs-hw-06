/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа.
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/
function getPromise() {
    return new Promise((resolve) => {
        resolve(["Text", 50]);
    });
}
console.log("GENERICS__________________");
console.log("Task1:");
getPromise().then((data) => {
    console.log(data);
});
console.log("______________________________________");
export {};
//# sourceMappingURL=1.js.map