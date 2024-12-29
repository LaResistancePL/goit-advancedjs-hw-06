/*
  У вас є тип Form, який містить інформацію про форму, включаючи поле errors.
  Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.
*/
console.log("Task8:");
// Przykładowa funkcja używająca typu Params
function createOrUpdateUser(params) {
    console.log("Tworzenie/Aktualizacja użytkownika z danymi:", params);
}
// Poprawne wywołanie funkcji z pełnymi danymi (bez 'errors')
createOrUpdateUser({
    email: "user@mail.com",
    firstName: "Jan",
    lastName: "Kowalski",
    phone: "123-456-7890",
});
console.log("______________________________________");
export {};
//# sourceMappingURL=8.js.map