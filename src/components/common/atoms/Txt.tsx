import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    width: '100%',
    maxWidth: 500,
  },
  smallTxt: {
    width: '100%',
    maxWidth: 500,
    fontSize: '.8rem',
  },
  midiumTxt: {
    width: '100%',
    maxWidth: 500,
    fontSize: '1rem',
  },
  largeTxt: {
    width: '100%',
    maxWidth: 500,
    fontSize: '1.2rem',
  },
}));

const TitleTxt: FC = props => {
  const classes = useStyles();
  return (
    <Typography className={classes.title} variant="h1" gutterBottom>
      {props.children}
    </Typography>
  );
};

const SmallTxt: FC = props => {
  const classes = useStyles();
  return (
    <Typography className={classes.smallTxt} variant="body1" gutterBottom>
      {props.children}
    </Typography>
  );
};

const MidiumTxt: FC = props => {
  const classes = useStyles();
  return (
    <Typography className={classes.midiumTxt} variant="body1" gutterBottom>
      {props.children}
    </Typography>
  );
};

const LargeTxt: FC = props => {
  const classes = useStyles();
  return (
    <Typography className={classes.largeTxt} variant="body1" gutterBottom>
      {props.children}
    </Typography>
  );
};

export { TitleTxt, SmallTxt, MidiumTxt, LargeTxt };
export default MidiumTxt;
