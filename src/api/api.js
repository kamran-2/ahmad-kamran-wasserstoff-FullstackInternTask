import axios from "axios";

const API_KEY = "50j19knn4humhpidsoe7p7w1xn7r1kr871hfl9vh";

const currentWeather = async (lat, lon,measure) => {
  const options = {
    method: "GET",
    url: "https://ai-weather-by-meteosource.p.rapidapi.com/nearest_place",
    params: {
      lat: lat,
      lon: lon,
      language: "en",
      units:measure
    },
    headers: {
      "x-rapidapi-key": "8d51b2ac90mshf62c2da71bf57c2p1c5634jsn8d51bd702ab9",
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
      "x-rapidapi-key": "8d51b2ac90mshf62c2da71bf57c2p1c5634jsn8d51bd702ab9",
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
  const URL = `https://www.meteosource.com/api/v1/free/find_places_prefix?text=${myplace}&key=${API_KEY}`;

  try {
    const fetchPlace = await axios.get(URL);
    return fetchPlace.data[0];
  } catch (error) {
    console.error(error);
  }
};

export { getweather, searchPlaces, currentWeather };