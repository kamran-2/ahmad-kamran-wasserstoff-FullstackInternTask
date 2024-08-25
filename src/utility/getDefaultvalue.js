import { currentWeather } from "../api/api"; // Import the function to fetch current weather data

// Function to get the user's current location
async function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    // Check if geolocation is available in the browser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        // Success callback: resolve with latitude and longitude
        (position) => {
          const lat = position.coords.latitude; // Get latitude
          const lon = position.coords.longitude; // Get longitude
          resolve({ lat, lon }); // Resolve the promise with coordinates
        },
        // Error callback: handle the error and reject the promise
        (error) => {
          showError(error); // Display error message
          reject(error); // Reject the promise with the error
        }
      );
    } else {
      // Geolocation is not supported
      alert("Geolocation is not supported by this browser.");
      reject(new Error("Geolocation not supported")); // Reject the promise
    }
  });
}

// Function to display an error message based on the geolocation error code
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

// Function to get the default location and fetch weather data for it
async function getDefaultLocation() {
  try {
    const coordinates = await getCurrentLocation(); // Get current location
    const weatherData = await currentWeather(coordinates.lat, coordinates.lon); // Fetch weather data using coordinates
    return weatherData; // Return the weather data
  } catch (error) {
    console.error("Error getting location:", error); // Log any errors
    return null; // Return null in case of error
  }
}

export { getDefaultLocation }; // Export the function for use in other modules
