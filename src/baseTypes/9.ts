/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

type Details = {
  createAt: Date;
  updateAt: Date;
};

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: Details;
};

const page1Type: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

console.log("Task9:");
console.log(page1Type);
console.log("______________________________________");

export {};
