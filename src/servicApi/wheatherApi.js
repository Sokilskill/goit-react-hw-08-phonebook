import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

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
