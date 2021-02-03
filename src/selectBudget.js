import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import  "./style.css";

export default function ToggleButtons4() {
  const [alignment, setAlignment] = React.useState('left');
  const history = useHistory();
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const moveItems = () => {
    history.push("/items")
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
    <h1>予算</h1>
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment">
      <ToggleButton className={classes.myButton} value="left" aria-label="left aligned">
        〜3,000円
      </ToggleButton>
      <ToggleButton className={classes.myButton} value="right" aria-label="right aligned">
        3,000円〜5,000円
      </ToggleButton>
      <ToggleButton className={classes.myButton} value="justify" aria-label="justify aligned">
        5,000円〜
      </ToggleButton>
    </ToggleButtonGroup>
    <br />
    <br />
    <button onClick={moveItems}>検索</button>
    </div>
  );
}
