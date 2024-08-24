import axios from "axios";

const API_KEY = "50j19knn4humhpidsoe7p7w1xn7r1kr871hfl9vh";

const currentWeather = async(lat,lon) =>{
  const options = {
  method: 'GET',
  url: 'https://ai-weather-by-meteosource.p.rapidapi.com/nearest_place',
  params: {
    lat: lat,
    lon: lon,
    language: 'en'
  },
  headers: {
    'x-rapidapi-key': '7241db01c0mshdda74c591a25a35p1216fajsnd814324a8fdb',
    'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	return response.data;
} catch (error) {
	console.error(error);
}

}



const getweather=async(endpoint,place)=>{
const options = {
  method: "GET",
  url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
  params: {
    place_id:place,
    timezone: "auto",
    language: "en",
    units: "auto",
  },
  headers: {
    "x-rapidapi-key": "7241db01c0mshdda74c591a25a35p1216fajsnd814324a8fdb",
    "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  return response.data;
} catch (error) {
  console.error(error);
}
}



 const  searchPlaces= async(text)=> {
  const options = {
    method: "GET",
    url: "https://ai-weather-by-meteosource.p.rapidapi.com/find_places",
    params: {
      text:text,
      language: "en",
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
}

export { getweather, searchPlaces ,currentWeather};