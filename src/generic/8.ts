/*
  У вас є тип Form, який містить інформацію про форму, включаючи поле errors. 
  Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.
*/
console.log("Task8:");

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};


type Params = Omit<Form, "errors">;

// Prusage
function createOrUpdateUser(params: Params) {
  console.log("Tworzenie/Aktualizacja użytkownika z danymi:", params);
}

// example
createOrUpdateUser({
  email: "user@mail.com",
  firstName: "Jan",
  lastName: "Kowalski",
  phone: "123-456-7890",
});

export {};

console.log("______________________________________");
