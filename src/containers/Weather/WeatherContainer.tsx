import React, { FC } from 'react';

import WeatherPresenter from 'components/Weather/WeatherPresenter';

const WeatherContainer: FC = ({ children }) => {
  const onClick = () => {
    alert('Hello, WeatherContainer');
  };

  return <WeatherPresenter onClick={onClick}>{children}</WeatherPresenter>;
};

export default WeatherContainer;
