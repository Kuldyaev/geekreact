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
import { chatsRef } from "./firebase";

function App() {
  const authed = useSelector(getIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAuthAction);
    let chatsDBlist = [];
    chatsRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        chatsDBlist.push(childSnapshot.key);
     });
     if(chatsDBlist.length===0){
      chatsRef.set({
        first: {name: 'ChatBot',  id: 'first', img: 1}, 
        second: {name: 'Vasiliy',  id: 'second', img: 2},
        therd: {name: 'Alisa',    id: 'third', img: 3},
        forth: {name: 'Siri',     id: 'fourth', img: 4}
      
      });
     }; 
    });
    
    
   



    
  });

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