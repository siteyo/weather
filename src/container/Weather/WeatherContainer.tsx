import React, { FC } from 'react';

import WeatherComponent from 'components/Weather/WeatherComponent';

const WeatherContainer: FC = () => {
  const onClick = () => {
    alert('Hello, WeatherContainer');
  };

  return <WeatherComponent onClick={onClick} />;
};

export default WeatherContainer;
