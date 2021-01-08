import React from 'react';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function ToggleButtons4() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
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
    </div>
  );
}
