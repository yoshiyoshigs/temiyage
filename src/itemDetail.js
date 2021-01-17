import React, { useState, useEffect } from "react";
import Tokyo from "./img/東京駅.jpg";
import { Grid, Button } from '@material-ui/core';
import classes from "./itemDetail.module.css"

import {
    useHistory,
    useLocation
} from 'react-router-dom';

const ItemDetail = () => {
    const history = useHistory();
    const location = useLocation();
    const item = location.state.data
    console.log(item)
    

    const moveTop = () => {
        history.push("/")
    }

    const moveCompleteBuy  = () => {
        console.log("completeBuy")
        history.push("/item/completeBuy")
    }

    const css = {color:"white", width:400, height:200,margin:'auto',};


    return (
        <>
            <div className={classes.container}>
                <Grid container spacing={3} xs={12} sm={8}>
                    <div className={classes.imageWrapper}>
                        <img className={classes.image} src={item.item_image} />
                    </div>
                    <div className={classes.nameWrapper}>
                        <div>{item.item_name}</div>
                    </div>
                    <div className={classes.descriptionWrapper}>
                        <div>{item.item_desc}</div>
                    </div>
                    <div className={classes.priceWrapper}>
                        <div>価格: {item.price}円</div>
                    </div>
                    <div className={classes.priceWrapper}>
                        <div>{item.store_name}</div>
                    </div>
                    <div className={classes.buttonWrapper}>
                        <Button variant="contained" color="secondary" onClick={moveCompleteBuy}>購入する</Button> 
                    </div>  
                </Grid> 
            </div>
            
        </>
    )
}

export default ItemDetail