import React from 'react';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { red } from '@material-ui/core/colors';
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
            {/* <FormatAlignLeftIcon /> */}
            お祝い
          </ToggleButton>
          <ToggleButton className={classes.myButton} value="center">
            {/* <FormatAlignCenterIcon /> */}
            接待
          </ToggleButton>
          <ToggleButton className={classes.myButton} value="right">
            {/* <FormatAlignRightIcon /> */}
            謝罪
          </ToggleButton>
          <ToggleButton className={classes.myButton} value="justify">
            {/* <FormatAlignJustifyIcon /> */}
            挨拶
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
    </div>
  );
}