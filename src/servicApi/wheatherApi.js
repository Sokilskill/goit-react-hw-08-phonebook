import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const apiKey = process.env.REACT_APP_API_KEY;

export const getWeather = async query => {
  const { data } = await axios.get(baseUrl, {
    params: {
      q: query,
      units: 'metric',
      appid: apiKey,
    },
  });

  return data;
};
