import React from 'react';
import {
  SprinkleIcon,
  DrizzleIcon,
  PourIcon,
  SunnyIcon,
} from 'components/common/atoms/Icon';

export default {
  title: 'Icon',
};

export const sprinkle = () => <SprinkleIcon />;
export const drizzle = () => <DrizzleIcon />;
export const pour = () => <PourIcon />;
export const sunny = () => <SunnyIcon />;
export const iconResize = () => <SprinkleIcon size={200} />;
