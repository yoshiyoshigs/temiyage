// import { FormControl, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { db } from "./firebase";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import AppleIcon from '@material-ui/icons/Apple';
// import TaskItem from "./TaskItem";
// import ButtonSizes2 from "./Seibetsu";
// import ButtonSizes3 from "./Mitame";
// import ButtonSizes4 from "./Yosan";
import ToggleButtons1 from "./Youto2";
import ToggleButtons2 from "./Seibetsu2";
import ToggleButtons3 from "./Mitame2";
import ToggleButtons4 from "./Yosan2";
import MediaCard1 from "./Syousai";
import SimpleCard1 from "./Kounyu";
// import Feed from "./Feed";
// import Post from "./Post";
import  "./style.css";
import axios from 'axios';

const App = () => {
  // 1.記述
  const [data, setData] = useState([{ id: "", title: "", contents: "" }]);
  const [inputValue, setInputValue] = useState("");
  // eはeventの略
  const handleInputchange = (e) => {
    console.log(e);
    setInputValue(e.target.value);
  };

  // 記述登録3
  const addInputData = () => {
    db.collection("group").add({ title: inputValue});
    setInputValue("");
  };

  // 2.記述
  useEffect(() => {
    const firebaseData = db
    .collection("group")
    .orderBy("title", "asc")
    .onSnapshot((snapshot) => {
      setData(
        snapshot.docs.map((dbData) => ({
          id: dbData.id,
          title: dbData.data().title,
          contents: dbData.data().contents,
        }))
      );
    });
    return () => firebaseData();
  },[]);



// axios.get(`http://brownbear68.sakura.ne.jp/items`)
//       .then(res => {
//         console.log(res.data)
//       })

  
  return (
    <div>
      <h1 className="title">Temiyage</h1>
      {/* <ButtonSizes/> */}
      {/* <ButtonSizes2/>
      <ButtonSizes3/>
      <ButtonSizes4/> */}
      <ToggleButtons1/>
      <ToggleButtons2/>
      <ToggleButtons3/>
      <ToggleButtons4/>
      <MediaCard1/>
      <SimpleCard1/>
      

      
    </div>
//     {/* 　登録の処理 */}
//     {/* <FormControl> */}
//       {/* inputタグ */}
//       {/* <TextField
//        label="登録追加"
//        value={inputValue}
//        onChange={handleInputchange}
//       /> */}
//     {/* </FormControl> */}
//     {/* 登録の処理　ボタン */}
//     {/* <button disabled={!inputValue} onClick={addInputData}>
//       <AppleIcon fontSize="large" />
//     </button> */}
    
// //  {/* dataっていう変数のなかに全てのデータが入っているのでmapを使って展開 */}
        // {data.map((dataItem) => (
        //   <div key={dataItem.id}>
        // <h1 >{dataItem.title}</h1>
        // <h2>{dataItem.contents}</h2>
        // <TaskItem id={dataItem.id} title={dataItem.title} />
        // </div>))}
      );};

export default App;