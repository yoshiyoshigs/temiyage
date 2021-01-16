import React, { useState, useEffect } from "react";
import Tokyo from "./img/東京駅.jpg";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import classes from "./items.module.css"

import {
    useHistory,
} from 'react-router-dom';

// const useStyles = makeStyles({
//     image: {
//         width: "100px",
//         height: "100px"
//     }
//   });

const Items = () => {
    const history = useHistory();
    // const classes = useStyles();
    const [data, setData] = useState([{ id: "", title: "", contents: "" }]);

    const fetchGetData = async () => {
        fetch('http://brownbear68.sakura.ne.jp/items')
        .then(response => response.json())
        .then(data => {
          setData(data)
        });
      }
    
    useEffect(() => {
        fetchGetData()
    },[])

    const moveTop = () => {
        history.push("/")
    }

    const moveItemDetail = (item) => {
        history.push({
            pathname: `/item/${item.id}`,
            state: { data: item }
        })
    }


    return (
        <>
            <div className={classes.container}>
            <Grid container spacing={3} xs={12} sm={8}>
                <div className={classes.topButtonWrapper}>
                    <button onClick={moveTop}>検索に戻る</button>
                </div>
                <div className={classes.mapImageWrapper}>
                    <img className={classes.mapImage} src={Tokyo} />
                </div>
                <div>
                    {
                    data && data.map(souvenir => (

                        <div className={classes.itemWrapper} onClick={() => {moveItemDetail(souvenir)}}>
                            <Grid container spacing={3}>
                                    <Grid item xs={12} sm={4}>
                                        <img className={classes.image}
                                        src={souvenir.item_image}
                                        alt={souvenir.item_name}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <div className={classes.itemName}>{souvenir.item_name}</div>
                                        <div className={classes.itemDescription}>{souvenir.item_desc}</div>
                                    </Grid>
                            </Grid>
                        </div>
                        ))
                    }
                </div>
            </Grid> 
            </div>
        </>
    )
}

export default Items