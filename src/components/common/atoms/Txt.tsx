import React, { FC } from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';

const useSmallStyles = makeStyles((theme: Theme) => ({
  text: {
    fontSize: '.8rem',
  },
}));

const useMidiumStyles = makeStyles((theme: Theme) => ({
  text: {
    fontSize: '1rem',
  },
}));

const useLargeStyles = makeStyles((theme: Theme) => ({
  text: {
    fontSize: '1.2rem',
  },
}));

const SmallTxt: FC = ({ children }) => {
  const classes = useSmallStyles();
  return (
    <>
      <p className={classes.text}>{children}</p>
    </>
  );
};

const MidiumTxt: FC = ({ children }) => {
  const classes = useMidiumStyles();
  return (
    <>
      <p className={classes.text}>{children}</p>
    </>
  );
};

const LargeTxt: FC = ({ children }) => {
  const classes = useLargeStyles();
  return (
    <>
      <p className={classes.text}>{children}</p>
    </>
  );
};

export { SmallTxt, MidiumTxt, LargeTxt };
export default MidiumTxt;
