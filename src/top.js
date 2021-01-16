import React from "react";
import ToggleButtons1 from "./Youto2";
import ToggleButtons2 from "./Seibetsu2";
import ToggleButtons3 from "./Mitame2";
import ToggleButtons4 from "./Yosan2";

import {
    useHistory,
} from 'react-router-dom';

const Top = () => {
    const history = useHistory();

    const moveItems = () => {
        history.push("/items")
    }
    

    return (
        <>
           
      <ToggleButtons1/>
      <ToggleButtons2/>
      <ToggleButtons3/>
      <ToggleButtons4/>
        </>
    )
}

export default Top