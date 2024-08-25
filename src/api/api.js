import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY

const currentWeather = async (lat, lon,measure) => {
  const options = {
    method: "GET",
    url: "https://ai-weather-by-meteosource.p.rapidapi.com/nearest_place",
    params: {
      lat: lat,
      lon: lon,
      language: "en",
      units: measure,
    },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getweather = async (endpoint, place,measure) => {
  const options = {
    method: "GET",
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    params: {
      place_id: place,
      timezone: "auto",
      language: "en",
      units: measure,
    },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Wheather error");
  }
};



const searchPlaces = async (myplace) => {
  const Location = '';
  if(myplace){
    Location = myplace
  }
  else{
    Location = "London"
  }
  const options = {
    method: "GET",
    url: "https://ai-weather-by-meteosource.p.rapidapi.com/find_places_prefix",
    params: {
      text: Location,
      language: "en",
    },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};

export { getweather, searchPlaces, currentWeather };