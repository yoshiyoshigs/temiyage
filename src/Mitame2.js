import React from 'react';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function ToggleButtons1() {
  const [alignment, setAlignment] = React.useState('left');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div style={{textAlign: 'center'}}>
      <h1>パッケージ</h1>
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <ToggleButtonGroup size="large" value={alignment} exclusive onChange={handleChange}>
          <ToggleButton value="left">
            {/* <FormatAlignLeftIcon /> */}
            シンプル
          </ToggleButton>
          <ToggleButton value="center">
            {/* <FormatAlignCenterIcon /> */}
            かわいい
          </ToggleButton>
          <ToggleButton value="right">
            {/* <FormatAlignRightIcon /> */}
            高級感
          </ToggleButton>
          <ToggleButton value="justify">
            {/* <FormatAlignJustifyIcon /> */}
            わびさび
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
    </div>
  );
}