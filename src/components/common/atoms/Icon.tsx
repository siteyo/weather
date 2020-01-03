import React, { FC } from 'react';

type IconProps = {
  size?: number;
};

const SprinkleIcon: FC<IconProps> = ({ size = 80 }) => (
  <img
    src={process.env.PUBLIC_URL + '/rainy_1.svg'}
    alt=""
    height={size}
    width={size}
  />
);

const DrizzleIcon: FC<IconProps> = ({ size = 80 }) => (
  <img
    src={process.env.PUBLIC_URL + '/rainy_2.svg'}
    alt=""
    height={size}
    width={size}
  />
);

const PourIcon: FC<IconProps> = ({ size = 80 }) => (
  <img
    src={process.env.PUBLIC_URL + '/rainy_3.svg'}
    alt=""
    height={size}
    width={size}
  />
);

const SunnyIcon: FC<IconProps> = ({ size = 80 }) => (
  <img
    src={process.env.PUBLIC_URL + '/sunny.svg'}
    alt=""
    height={size}
    width={size}
  />
);

export { SprinkleIcon, DrizzleIcon, PourIcon };
