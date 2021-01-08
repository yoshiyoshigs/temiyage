import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ButtonSizes2() {
  const classes = useStyles();

  return (
    <div style={{textAlign: 'center'}}>
        <h1>性別</h1>
      <div>        
        <Button variant="contained" size="large" color="primary" className={classes.margin} style={{width: '100px'}}>
            男性
        </Button>
        <Button variant="outlined" size="large" color="primary" className={classes.margin} style={{width: '100px'}}>
            女性
        </Button>
      </div>
    </div>
  );
}
