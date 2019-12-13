import React, { FC } from 'react';

interface WeatherComponentProps {
  onClick: () => void;
}

const WeatherComponent: FC<WeatherComponentProps> = ({ onClick }) => (
  <>
    <h1>Hello, WeatherComponent</h1>
    <button onClick={onClick}>on click</button>
  </>
);

export default WeatherComponent;
