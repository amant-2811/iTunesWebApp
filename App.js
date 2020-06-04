import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ItunesApp from './itunesApp';


function App() {
  return (
<Router>
      <div>
        <Link
            to="/itunesapp"
        >
          Go To iTunesWebApp
        </Link>
          <hr/>
        <Switch>
            <Route path="/itunesapp">
                <ItunesApp />
            </Route>
        </Switch>
    </div>
</Router>
  );
}



export default App;
