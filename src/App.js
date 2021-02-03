import React from "react";
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
export default App;