import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Tokyo from "./img/東京駅.jpg";
import  "./style.css";
import { Link } from 'react-router-dom'



const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin:'auto',
  },
  media1: {
    height: 50,
    width:100,
    margin:'auto',
  },
  media2: {
    height: 100,
    width: 0,
  },
});



// export default function MediaCard2() {
//   const classes = useStyles();

//   const css = {color:"white", width:400, height:200,margin:'auto',};
  
//   return (
//     // <Card className={classes.root}>
//         // <CardMedia 
//         //   className={classes.media1}
//         // <div img="https://i.gzn.jp/img/2018/07/23/farewell-google-maps/00.jpg"></div>
//         //   title="tokyo"
//         // />
//         <div>
//         <img src={Tokyo} style={css}/><br/>
//        <Button id="btn" size="small" color="primary">
//           購入する
//         </Button>
//         </div>
//         // </Card>
//   );

     class Kekkaichirann extends React.Component {
        render(){
        return(
        <div>
          <Link to="">購入する</Link>
          <Link to="/About">About</Link>
        </div>
      )
    }
}

export default Kekkaichirann;