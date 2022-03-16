import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/HelloWorld";
import Index from "./components/Labs";
import Tuiter from "./components/Tuiter";
import './components/Tuiter/index.css';


import {BrowserRouter, Route} from "react-router-dom";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/Tuiter/HomeScreen/HomeScreen";
function App() {
  return (
      <BrowserRouter>
      <div className="container">

          <Route path="/hello" exact={true}>
              <HelloWorld/>
          </Route>
          <Route path={["/", "/labs"]} exact={true}>
              <Index/>
          </Route>
          <Route path="/tuiter" exact={true}>
              <Tuiter/>
          </Route>
          <Route path="/tuiter/home" component={HomeScreen}/>
          <Route path="/tuiter/explore" component={ExploreScreen}/>

      </div>
      </BrowserRouter>
  );
}

export default App;
