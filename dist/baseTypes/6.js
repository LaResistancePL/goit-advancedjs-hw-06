/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
console.log("6.ts");
showMessage("Hello");
console.log("calc:", calc(2, 3));
console.log("______________________________________");
export {};
//# sourceMappingURL=6.js.map