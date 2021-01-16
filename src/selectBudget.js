import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {
  useHistory,
} from 'react-router-dom';

export default function ToggleButtons4() {
  const [alignment, setAlignment] = React.useState('left');
  const history = useHistory();

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);

    
  };

  const moveItems = () => {
    history.push("/items")
  };



  return (
    <div style={{textAlign: 'center'}}>
    <h1>予算</h1>
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment">
      <ToggleButton value="left" aria-label="left aligned">
        {/* <FormatAlignLeftIcon /> */}
        〜3,000円
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        {/* <FormatAlignRightIcon /> */}
        3,000円〜5,000円
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justify aligned">
        {/* <FormatAlignRightIcon /> */}
        5,000円〜
      </ToggleButton>
    </ToggleButtonGroup>
    {/* <br /><Button id="firstbutton" size="small">検索</Button> */}
    <br />
    <br />
    <button onClick={moveItems}>検索</button>
    </div>
  );
}
