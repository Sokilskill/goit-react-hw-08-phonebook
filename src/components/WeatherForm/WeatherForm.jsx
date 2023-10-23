import { useState } from 'react';
import { Box, Flex, Heading, Input, Text } from '@chakra-ui/react';
import { getWeather } from 'servicApi/wheatherApi';

function WeatherForm() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({
    data: {},
    error: false,
  });

  const toDate = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]}, ${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    }`;
    return date;
  };

  const search = async event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setQuery('');
      setWeather({ ...weather });

      const fetch = async () => {
        try {
          const { data } = await getWeather(query);
          setWeather({ data: data, error: false });
        } catch (error) {
          setWeather({ ...weather, data: {}, error: true });
          setQuery('');
          console.log(error.message);
        }
      };
      fetch();
    }
  };

  return (
    <Flex direction="column" gap="20px">
      <Heading as="h2">
        Weather <span> 🌤 </span>
      </Heading>
      <Box>
        <Input
          border=" 2px solid #ccc"
          borderRadius="20px"
          bg="white"
          padding="12px 20px 12px 20px"
          maxW={300}
          autoFocus
          type="text"
          fontSize="16px"
          placeholder="Search City.."
          name="query"
          value={query}
          onChange={event => setQuery(event.target.value)}
          onKeyDown={search}
        ></Input>
      </Box>

      {weather.error && (
        <span>
          <span style={{ fontSize: '26px' }}> Sorry, City not found</span>
        </span>
      )}

      {weather && weather.data && weather.data.main && (
        <div>
          <h2>
            {weather.data.name}, <span>{weather.data.sys.country}</span>
          </h2>
          <Box>
            <span>{toDate()}</span>
          </Box>
          <Box>
            <img
              src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
              alt={weather.data.weather[0].description}
            />
            {Math.round(weather.data.main.temp)}
            <span> &deg;C </span>
          </Box>
          <Box>
            <Text>{weather.data.weather[0].description.toUpperCase()}</Text>
            <Text>Wind Speed: {weather.data.wind.speed}m/s</Text>
          </Box>
        </div>
      )}
    </Flex>
  );
}

export default WeatherForm;
