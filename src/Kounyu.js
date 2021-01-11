import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Autorenew } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin:'auto',
  },
  bullet: {
    // display: 'inline-block',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div  style={{textAlign: 'center'}}>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}  gutterBottom>
          お受け取り店舗
        </Typography>
        <Typography>
          ご注文商品
        </Typography>
        <Typography className={classes.pos} >
          お支払い方法
        </Typography>
        <Typography variant="body2" component="p">
          ご注文内容の確認
          <br />
          {'特選ガトーショコラ  ¥3,000'}
        </Typography>
      </CardContent>
      {/* <CardActions> */}
        <Button size="small">注文を確定する</Button>
      {/* </CardActions> */}
    </Card>
    </div>
  );
}
