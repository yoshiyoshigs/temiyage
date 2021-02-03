import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import  "./style.css";

export default function ToggleButtons2() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
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
    <h1>性別</h1>
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment">
      <ToggleButton className={classes.myButton} value="left" aria-label="left aligned">
        男性
      </ToggleButton>
      <ToggleButton className={classes.myButton} value="right" aria-label="right aligned">
        女性
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}
