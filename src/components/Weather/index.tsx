import React, { FC } from 'react';

import WeatherContainer from 'containers/Weather/WeatherContainer';

const Weather: FC = ({ children }) => (
  <WeatherContainer>{children}</WeatherContainer>
);

export default Weather;
