// Initialize map with a default location
const map = L.map("map").setView([0, 0], 3);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

const updateResults = (data) => {
  document.getElementById("ipResult").innerText = data.ip || "-";
  document.getElementById("locationResult").innerText = data.city || "-";
  document.getElementById("regionResult").innerText = data.region_name || "-";
  document.getElementById("countryResult").innerText = data.country_name || "-";

  map.setView([data.latitude || 0, data.longitude || 0], 12);
  // Update map marker location
  const marker = L.marker([data.latitude || 0, data.longitude || 0]).addTo(map);
  marker.setLatLng([data.latitude || 0, data.longitude || 0]);
};

const fetchIpAddress = async () => {
  const inputField = document.getElementById("inputField");
  const ipAddress = inputField.value;

  try {
    const response = await fetch(
      `http://api.ipstack.com/${ipAddress}?access_key=5b9c3f3ea245eff560ba21d7c92ef657`
    );
    const data = await response.json();
    // console.log(data);
    updateResults(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

const inputField = document.getElementById("inputField");
inputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    fetchIpAddress();
  }
});
