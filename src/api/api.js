import axios from "axios"; // Import axios for making HTTP requests

// API key for the weather API (loaded from environment variables)
const API_KEY = import.meta.env.VITE_API_KEY;

// Function to fetch current weather based on latitude, longitude, and measurement unit
const currentWeather = async (lat, lon, measure) => {
  // Options for the HTTP request
  const options = {
    method: "GET",
    url: "https://ai-weather-by-meteosource.p.rapidapi.com/nearest_place", // API endpoint for nearest place weather
    params: {
      lat: lat, // Latitude
      lon: lon, // Longitude
      language: "en", // Language for the response
      units: measure, // Measurement units (e.g., 'metric' for Celsius)
    },
    headers: {
      "x-rapidapi-key": API_KEY, // API key for authorization
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com", // Host for the API
    },
  };

  try {
    const response = await axios.request(options); // Make the API request
    return response.data; // Return the weather data
  } catch (error) {
    console.error(error); // Log any errors
  }
};

// Function to fetch weather data from a specified endpoint for a place
const getweather = async (endpoint, place, measure) => {
  // Options for the HTTP request
  const options = {
    method: "GET",
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`, // API endpoint based on the provided endpoint
    params: {
      place_id: place, // Place ID for the location
      timezone: "auto", // Automatically determine the timezone
      language: "en", // Language for the response
      units: measure, // Measurement units (e.g., 'metric' for Celsius)
    },
    headers: {
      "x-rapidapi-key": API_KEY, // API key for authorization
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com", // Host for the API
    },
  };

  try {
    const response = await axios.request(options); // Make the API request
    return response.data; // Return the weather data
  } catch (error) {
    console.error("Weather error"); // Log any errors
  }
};

// Function to search for places based on a provided query
const searchPlaces = async (myplace) => {
  let Location = ""; // Initialize location variable
  if (myplace) {
    Location = myplace; // Use provided place if available
  } else {
    Location = "London"; // Default to London if no place provided
  }

  // Options for the HTTP request
  const options = {
    method: "GET",
    url: "https://ai-weather-by-meteosource.p.rapidapi.com/find_places_prefix", // API endpoint for searching places
    params: {
      text: Location, // Search query
      language: "en", // Language for the response
    },
    headers: {
      "x-rapidapi-key": API_KEY, // API key for authorization
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com", // Host for the API
    },
  };

  try {
    const response = await axios.request(options); // Make the API request
    return response.data[0]; // Return the first result from the response
  } catch (error) {
    console.error(error); // Log any errors
  }
};

export { getweather, searchPlaces, currentWeather }; // Export functions for use in other modules
