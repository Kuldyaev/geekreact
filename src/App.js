import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import { Chats } from './components/chats'
import { Chat } from './components/chat'
import { Register } from './components/register'
import { Home } from './components/home'
import { Profile } from './components/profile'
import { Login } from './components/login'
import { SingUp } from './components/singup'
import { getIsAuth } from './store/user/selectors'
import { ForAPI } from './components/forAPI'
import { PrivateRoute, PublicRoute } from './hoc/specRoutes'
import { initAuthAction } from './store/user/actions'

function App() {
  const authed = useSelector(getIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {dispatch(initAuthAction)});

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <PrivateRoute authenticated={authed} exact path="/allchats">
            <Chats/>
          </PrivateRoute>
          <PrivateRoute authenticated={authed} exact path="/profile">
            <Profile/>
          </PrivateRoute>
          <Route exact path='/testAPI' component={ForAPI}/>
          <PublicRoute authenticated={authed} path="/login">
            <Login/>
          </PublicRoute>
          <PublicRoute authenticated={authed} path="/signup">
            <SingUp/>
          </PublicRoute>


          <PrivateRoute authenticated={authed} exact path="//chat/:id">
            <Chats/>
          </PrivateRoute>

          <Route exact path='/register' component={Register}/>
          <Route exact path='/chat/:id' render={(props) => (<Chat {...props} />)} />   
          <Redirect  to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;