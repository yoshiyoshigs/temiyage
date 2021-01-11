import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin:'auto',
    
  },
  media1: {
    height: 200,
    margin:'auto',
  },
  media2: {
    height: 100,
    width: 200,
    // margin:'left',
  },
});

export default function MediaCard2() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia 
          className={classes.media1}
          image="https://i.gzn.jp/img/2018/07/23/farewell-google-maps/00.jpg"
          title="tokyo"
        />
        <CardMedia 
          className={classes.media2}
          image="https://c-temiyage.gnst.jp/img/item/d1/00001639/photo01.jpg?_=20190914203902"
          title="tokyo"
        />
        
        <CardContent>
          <Typography gutterBottom component="p">
            商品名
          </Typography>
          <Typography component="p">
            単価
          </Typography>
        </CardContent>
      <CardActions>
        <Button id="btn" size="small" color="primary">
          購入する
        </Button>
      </CardActions>
     </Card>
    
  );
}
