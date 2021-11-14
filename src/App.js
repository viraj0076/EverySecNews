//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News1 from './components/News1';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Speech from './components/Speech';


const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const[progress, setProgress] = useState(0)
 
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <speech heading="hello"/>
          <LoadingBar
            height={3}
            color='#f11946'
             progress={progress}

          />
          <Switch>
            <Route exact path="/"><News1 setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" /></Route>
            <Route exact path="/general"><News1 setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general"/></Route>
            <Route exact path="/business"><News1 setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" /></Route>
            <Route exact path="/health"><News1 setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" /></Route>
            <Route exact path="/science"><News1 setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" /></Route>
            <Route exact path="/sports"><News1 setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News1 setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" /></Route>
            <Route exact path="/entertainment"><News1 setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
            <Route exact path="/speech"><Speech/></Route>
          </Switch>

        </Router>

      </div>  
    </>
  )
}
export default App;



