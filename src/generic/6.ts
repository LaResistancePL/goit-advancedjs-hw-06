/*
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

console.log("Task6:");

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  const existingUser: User = {
    name: "Jan",
    surname: "Kowalski",
    email: "jan.kowalski@example.com",
    password: "securepassword",
  };

  const updatedUser: User = { ...existingUser, ...initialValues };
  console.log("Aktualizowany użytkownik:", updatedUser);
}

// Przykładowe wywołanie funkcji z częściowymi danymi
createOrUpdateUser({ email: "user@mail.com", password: "password123" });

console.log("______________________________________");

export {};
