import React from 'react';
import { useTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  TitleTxt,
  SmallTxt,
  MidiumTxt,
  LargeTxt,
} from 'components/common/atoms/Txt';

export default {
  title: 'Txt',
};

export const titleTxt = () => <TitleTxt>Title Text</TitleTxt>;
export const smallTxt = () => <SmallTxt>Small Text</SmallTxt>;
export const midiumTxt = () => <MidiumTxt>Midium Text</MidiumTxt>;
export const largeTxt = () => <LargeTxt>Large Text</LargeTxt>;
