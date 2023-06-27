import { Router , Routes ,Route } from '@solidjs/router'
import { Component } from "solid-js";
import Headers from '../components/Headers/Headers';
import HomePage from '../pages/HomePage/HomePage';
import One from '../pages/one/One';
import Two from '../pages/two/Two';

const MainRoute: Component<{}> = (props) => {
  
  return <Router>
    <Headers/>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/one' element={<One/>}/>
        <Route path='/two' element={<Two/>}/>
    </Routes>
  </Router>;
};

export default MainRoute;