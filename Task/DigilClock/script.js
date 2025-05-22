setInterval(() => {
  let date = new Date();
  document.getElementById("date").innerHTML = date.getDate();
  document.getElementById("month").innerHTML = date.getMonth();
  document.getElementById("year").innerHTML = date.getFullYear();
  let hour = date.getHours();
  if (hour > 12) {
    hour -= 12;
  }
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = date.getMinutes();
  document.getElementById("seconds").innerHTML = date.getSeconds();
  const today = new Date().getDay();
  console.log(today);
  switch (today) {
    case 0:
      document.getElementById("sun").style.setProperty("--main-color", "red");
      break;
    case 1:
      document.getElementById("mon").style.setProperty("--main-color", "red");
      break;
    case 2:
      document.getElementById("tue").style.setProperty("--main-color", "red");
      break;
    case 3:
      document.getElementById("wed").style.setProperty("--main-color", "red");
      break;
    case 4:
      document.getElementById("thu").style.setProperty("--main-color", "red");
      break;
    case 5:
      document.getElementById("fri").style.setProperty("--main-color", "red");
      break;
    case 6:
      document.getElementById("sat").style.setProperty("--main-color", "red");
      break;
    default:
      console.log("Unknown day");
  }
  let noon = date.getHours();
  if (noon < 13) {
    document.getElementById("am").style.setProperty("--main-color", "red");
  } else {
    document.getElementById("pm").style.setProperty("--main-color", "red");
  }
}, 1000);
