import React from 'react';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import  "./style.css";

export default function ToggleButtons1() {
  const [alignment, setAlignment] = React.useState('left');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const useStyles = makeStyles({
    myButton: {
      color: '#000000',
      '&:hover': {backgroundColor: '#ffecd2',},
      '&.MuiToggleButton-root.Mui-selected':{ backgroundColor: '#f6d365'}
    },
});
  const classes = useStyles();

  return (
    <div style={{textAlign: 'center'}}>
      <h1>用途</h1>
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <ToggleButtonGroup  size="large" value={alignment} exclusive onChange={handleChange}>
          <ToggleButton className={classes.myButton} value="left">
            ご挨拶
          </ToggleButton>
          <ToggleButton className={classes.myButton} value="center">
            お祝い
          </ToggleButton>
          <ToggleButton className={classes.myButton} value="center">
            パーティ
          </ToggleButton>
          <ToggleButton className={classes.myButton} value="right">
            お見舞い
          </ToggleButton>
          <ToggleButton className={classes.myButton} value="justify">
            お詫び
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
    </div>
  );
}