import { currentWeather } from "../api/api";

async function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          resolve({ lat, lon });
        },
        (error) => {
          showError(error);
          reject(error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      reject(new Error("Geolocation not supported"));
    }
  });
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}

async function getDefaultLocation() {
  try {
    const coordinates = await getCurrentLocation();
    const weatherData = await currentWeather(coordinates.lat, coordinates.lon);
    return weatherData;
  } catch (error) {
    console.error("Error getting location:", error);
    return null;
  }
}

export { getDefaultLocation };
