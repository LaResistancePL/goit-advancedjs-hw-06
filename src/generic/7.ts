/*
  У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/
console.log("Task7:");

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

function getRoleDescription(role: UserRole): string {
  return RoleDescription[role];
}

function displayRoleDescription(role: UserRole): void {
  console.log(`Role: ${role}, Description: ${getRoleDescription(role)}`);
}

displayRoleDescription(UserRole.admin);

export {};

console.log("______________________________________");
