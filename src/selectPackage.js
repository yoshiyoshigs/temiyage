import React from 'react';
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
            シンプル
          </ToggleButton>
          <ToggleButton value="center">
            かわいい
          </ToggleButton>
          <ToggleButton value="right">
            高級感
          </ToggleButton>
          <ToggleButton value="justify">
            わびさび
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
    </div>
  );
}