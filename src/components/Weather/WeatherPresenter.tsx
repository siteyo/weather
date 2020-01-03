import React, { FC } from 'react';

type WeatherComponentProps = {
  onClick: () => void;
};

const WeatherPresenter: FC<WeatherComponentProps> = ({ onClick, children }) => (
  <>
    <h1>Hello, WeatherComponent</h1>
    <button onClick={onClick}>{children}</button>
  </>
);

export default WeatherPresenter;
