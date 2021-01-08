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
  media: {
    height: 200,
    margin:'auto',
  },
});

export default function MediaCard1() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://c-temiyage.gnst.jp/img/item/d1/00001639/photo01.jpg?_=20190914203902"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            商品名
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            単価
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            商品説明
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          購入する
        </Button>
      </CardActions>
    </Card>
    
  );
}
