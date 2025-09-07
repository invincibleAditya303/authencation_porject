import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginForm from "./components/LoginForm";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/register' component={RegisterForm} />
      <Route exact path='/login' component={LoginForm} />
      <ProtectedRoute exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>
) 

export default App;
