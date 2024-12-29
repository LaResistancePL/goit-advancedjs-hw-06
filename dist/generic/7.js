/*
  У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/
console.log("Task7:");
export var UserRole;
(function (UserRole) {
    UserRole["admin"] = "admin";
    UserRole["editor"] = "editor";
    UserRole["guest"] = "guest";
})(UserRole || (UserRole = {}));
const RoleDescription = {
    [UserRole.admin]: "Admin User",
    [UserRole.editor]: "Editor User",
    [UserRole.guest]: "Guest User",
};
function getRoleDescription(role) {
    return RoleDescription[role];
}
function displayRoleDescription(role) {
    console.log(`Role: ${role}, Description: ${getRoleDescription(role)}`);
}
displayRoleDescription(UserRole.admin);
console.log("______________________________________");
//# sourceMappingURL=7.js.map