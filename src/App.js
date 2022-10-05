import React from "react";
import NavBarMenu from "./Components/NavBarMenu"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Write from "./Components/Write";

function App() {
  return (
    <>
    <Router>
       <NavBarMenu /> 
       <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/blogs'>
          <Blogs />
        </Route>
        <Route path='/write'>
          <Write />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
       </Switch>     
    </Router>
    
    </>
  );
}

export default App;
