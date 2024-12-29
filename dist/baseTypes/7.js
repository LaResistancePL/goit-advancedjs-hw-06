/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
console.log("t7.ts");
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Monday"] = 0] = "Monday";
    DayOfWeek[DayOfWeek["Tuesday"] = 1] = "Tuesday";
    DayOfWeek[DayOfWeek["Wednesday"] = 2] = "Wednesday";
    DayOfWeek[DayOfWeek["Thursday"] = 3] = "Thursday";
    DayOfWeek[DayOfWeek["Friday"] = 4] = "Friday";
    DayOfWeek[DayOfWeek["Saturday"] = 5] = "Saturday";
    DayOfWeek[DayOfWeek["Sunday"] = 6] = "Sunday";
})(DayOfWeek || (DayOfWeek = {}));
function isWeekend(day) {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}
const today = DayOfWeek.Monday;
console.log(`Is Monday a weekend? ${isWeekend(today)}`);
console.log("______________________________________");
//# sourceMappingURL=7.js.map