/*
  Ви маєте форму реєстрації користувачів.
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю.
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль,
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/
console.log("Task6:");
function createOrUpdateUser(initialValues) {
    const existingUser = {
        name: "Jan",
        surname: "Kowalski",
        email: "jan.kowalski@example.com",
        password: "securepassword",
    };
    const updatedUser = { ...existingUser, ...initialValues };
    console.log("Aktualizowany użytkownik:", updatedUser);
}
// Przykładowe wywołanie funkcji z częściowymi danymi
createOrUpdateUser({ email: "user@mail.com", password: "password123" });
console.log("______________________________________");
export {};
//# sourceMappingURL=6.js.map