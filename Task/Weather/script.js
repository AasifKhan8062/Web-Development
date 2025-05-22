async function getData(city) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=7b54b1ae6f7142fb9af70529250705&q=${city}&aqi=yes`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}
async function search() {
  try {
    const City = document.getElementById("city").value.trim();
    if (!City) {
      alert("Please enter a city name.");
      return;
    }
    const Name = document.getElementById("name");
    const Region = document.getElementById("region");
    const Country = document.getElementById("country");
    const Tz_id = document.getElementById("tz_id");
    const Localtime = document.getElementById("localtime");
    const Temp = document.getElementById("temp");

    const data = await getData(City);
    if (City && data.location) {
      Name.innerHTML = data.location.name;
      Region.innerText = data.location.region;
      Country.innerText = data.location.country;
      Tz_id.innerText = data.location.tz_id;
      Localtime.innerText = data.location.localtime;
      Temp.innerHTML = data.current.temp_c;
    } else {
      alert("No data found for this city.");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Failed to fetch weather data. Please try again.");
  } finally {
    console.log("Code Run SuccessFully");
  }
}
