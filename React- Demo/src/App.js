import './App.css';
import ScrollIndicator from './components/ScrollIndictator'
import navbar from './components/Navbar'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'
import AboutUs from './components/pages/AboutUs'

function App() {
  return (
    <>
      <Router>
        
        <Navbar/>
        {/* <div style= {{position:'sticky', height:'120vh'}}> */}
        {/* <div className='headerComponents'> */}
        {/* </div> */}
        {/* <h1>I am your father</h1> */}
        {/* <div style= {{position:'sticky', height:'100vh'}}> */}
        {/* <ScrollIndicator/> */}
        {/* </div> */}
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
        <Switch>
          <Route path="/services" exact component={Services}/>
        </Switch>
        <Switch>
          <Route path="/sign-up" exact component={SignUp}/>
        </Switch>
        <Switch>
          <Route path="/about-us" exact component={AboutUs}/>
        </Switch>
        {/* <p >Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test </p> */}
        {/* </div> */}
      </Router>
        
    </>
  );
}

export default App;
