// import React, { useState, useEffect } from "react";
// import { db } from "./firebase";
// import Post from "./Post";

// const Feed = () => {
//     // firebaseに作成した項目を受け取るための変数＝useState
//     // larabel引っ張って来る
    
//     const  [posts, setPosts] = useState([
//         {
//             id: "",
//             image: "",
//             text: "",
//             timestamp: null,
//         },
//     ]);

//     // useEffectの処理を書く
//     useEffect(() => {
//         const firebaseData = db
//           .collection("posts")
//           .orderBy("timestamp", "desc")
//           .onSnapshot((snapshot) =>
//             setPosts(
//               snapshot.docs.map((doc) => ({
//                 id: doc.id,
//                 image: doc.data().image,
//                 text: doc.data().text,
//                 timestamp: doc.data().timestamp,
//               }))
//             )
//           );
//         return () => {
//           firebaseData();
//         };
//       }, []);
//       console.log(posts);



//     return (
//       <div>
//         {/*  */}
//         {/*  */}
//       </div>
//     );
//   };
//   export default Feed;