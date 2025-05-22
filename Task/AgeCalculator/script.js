function calculator() {
  let dateOfBirth = new Date(document.getElementById("dateOfBirth").value);
  let currentDate = new Date(document.getElementById("currentDate").value);
  let birthYear = dateOfBirth.getFullYear();
  let currentYear = currentDate.getFullYear();
  let birthMonth = dateOfBirth.getMonth();
  let currentMonth = currentDate.getMonth();
  let birthDate = dateOfBirth.getDate();
  let currentDay = currentDate.getDate();

  let year = currentYear - birthYear;
  let month = currentMonth - birthMonth;
  let day = currentDay - birthDate;

  if (day < 0) {
    month--;
    let previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    day += previousMonth.getDate();
  }

  if (month < 0) {
    year--;
    month += 12;
  }
  document.getElementById("sendPage").innerHTML =
    "Year :- " + year + " Month :- " + month + " Day :- " + day;
}
