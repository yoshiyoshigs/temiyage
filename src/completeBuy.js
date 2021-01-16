import React from "react";
import CompleteBuyImg from "./img/completeBuy.png"
import classes from "./completeBuy.module.css"
import { Grid, Button } from '@material-ui/core';


import {
    useHistory,
} from 'react-router-dom';

const CompleteBuy = () => {
    const history = useHistory();

    const moveTop = () => {
        history.push("/")
    }
    

    return (
        <>
            <div className={classes.container}>
                <Grid container spacing={3} xs={12} sm={8}>
                    <div className={classes.imageWrapper}>
                        <img className={classes.image} src={CompleteBuyImg} />
                    </div>
                    <Grid container justify="center">
                        <Grid>
                            <div className={classes.buttonWrapper}>
                                <Button variant="contained" color="secondary" onClick={moveTop}>topに戻る</Button> 
                             </div>  
                        </Grid>
                    </Grid>
                    
                </Grid>
            </div>
        </>
    )
}

export default CompleteBuy