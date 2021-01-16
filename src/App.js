// import { FormControl, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ToggleButtons1 from "./Youto2";
import ToggleButtons2 from "./Seibetsu2";
import ToggleButtons3 from "./Mitame2";
import ToggleButtons4 from "./Yosan2";
// import MediaCard1 from "./Syousai";
import SimpleCard1 from "./Kounyu";
import MediaCard2 from "./Kekkaichirann";
import  "./style.css";
// import axios from 'axios';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import About from './About';
// import Home from './Home';

import Items from "./items"
import Top from "./top"
import ItemDetail from "./itemDetail"
import CompleteBuy from "./completeBuy"

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


const App = () => {
  // 1.記述
  // const [data, setData] = useState([{ id: "", title: "", contents: "" }]);
  // const [inputValue, setInputValue] = useState("");
  // // eはeventの略
  // const handleInputchange = (e) => {
  //   console.log(e);
  //   setInputValue(e.target.value);
  // };
  // // 記述登録3
  // const addInputData = () => {
  //   db.collection("group").add({ title: inputValue});
  //   setInputValue("");
  // };
  
  // // 検索結果一覧処理
  // const style = {
  //   margin: "20px",
  //   background: "red"
  // };
  // const imgstl = {
  //   width: "100px",
  //   height: "100px"
  // };
  // const [data, setData] = useState([]) 
//   const fetchGetData = async () => {
//   fetch('http://brownbear68.sakura.ne.jp/items')
//   .then(response => response.json())
//   .then(data => {
//     setData(data)
//   });
// }
//   useEffect(() => {
//     fetchGetData()
// },[])
  return (
    <>
    <Router>
      <Switch>
        <Route path="/items" exact>
          <Items />
        </Route>
        <Route path="/item/completeBuy" exact>
          <CompleteBuy />
        </Route>
        <Route path="/item/:id" exact>
          <ItemDetail />
        </Route>
        <Route path="/" exact>
          <Top />
        </Route>
      </Switch>
    </Router>
    </>
  )
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Router>
//           <div>
//             <Navbar /><hr/>
//             <Route exact path='/' component={購入する}/>
//             <Route path='/About' render={ () => <About name={'Tom'}/> }/>
//           </div>
//         </Router>
//       </div>
//     );
//   }
// }



//   async function souvenir() {
//     const res = await fetch('http://brownbear68.sakura.ne.jp/items')
//     const data = await res.json();
//     return (
//           <li key={souvenir.id} style={style}>
//             <div>{souvenir.id}</div>
//             <div>{souvenir.item_name}</div>
//             <div>{souvenir.item_desc}</div>
//             <div>
//               <img
//                 style={imgstl}
//                 src={souvenir.item_image}
//                 alt={souvenir.item_name}
//               />
//             </div>
//           </li>
//         );
// }
//   souvenir()
//     .then(data => {
//         console.log(JSON.stringify(data));
//     })
  // const hoge = souvenirs.data.map((souvenir) => {
  //   return (
  //     <li key={souvenir.id} style={style}>
  //       <div>{souvenir.id}</div>
  //       <div>{souvenir.item_name}</div>
  //       <div>{souvenir.item_desc}</div>
  //       <div>
  //         <img
  //           style={imgstl}
  //           src={souvenir.item_image}
  //           alt={souvenir.item_name}
  //         />
  //       </div>
  //     </li>
  //   );
  // });
  // 2.記述
  // useEffect(() => {
  //   const firebaseData = db
  //   .collection("group")
  //   .orderBy("title", "asc")
  //   .onSnapshot((snapshot) => {
  //     setData(
  //       snapshot.docs.map((dbData) => ({
  //         id: dbData.id,
  //         title: dbData.data().title,
  //         contents: dbData.data().contents,
  //       }))
  //     );
  //   });
  //   return () => firebaseData();
  // },[]);
// axios.get(`http://brownbear68.sakura.ne.jp/items`)
//       .then(res => {
//         console.log(res.data)
//       })
  // return (
  //   <div>
  //     <h1 className="title">Temiyage</h1>
      
      
  //     <MediaCard2/> 
  //     {
  //       data && data.map(souvenir => (
  //           <li key={souvenir.id}>
  //             <div>{souvenir.id}</div>
  //             <div id='itemname'>{souvenir.item_name}</div>
  //             <div>{souvenir.item_desc}</div>
  //             <div>
  //               <img
  //                 src={souvenir.item_image}
  //                 alt={souvenir.item_name}
  //               />
  //             </div>
  //           </li>
  //       ))
  //     }
  //     <MediaCard1/>
  //     <SimpleCard1/>
      
  //   </div>

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
      // );};
export default App;