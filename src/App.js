import { HashRouter, Route } from "react-router-dom";
import Navigation from "./Components/Navigation"
import Home from "./Components/Home"
import Shout from "./Components/Shout"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import SignUp from "./Components/SignUp"

function App() {
  return (
    <HashRouter>
    <Navigation />
    <Route path='/' exact={true} component={Home} />
    <Route path='/shout-add' exact={true} component={Shout} />
    <Route path='/profile' exact={true} component={Profile} />
    <Route path='/login' exact={true} component={Login} />
    <Route path='/sign-up' exact={true} component={SignUp} />
  </HashRouter>
  );
}

export default App;
