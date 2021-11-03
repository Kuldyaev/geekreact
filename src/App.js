import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import { Chats } from './components/chats'
import { Chat } from './components/chat'
import { Register } from './components/register'
import { Home } from './components/home'
import { Profile } from './components/profile'

function App() {
  const [messages, changeMessagesList] = useState([

    ]);

  const [allchats, changeAllChats] = useState([
    {
      name: 'ChatBot',
      id: 1,
      messages:[]
    },
    {
      name: "Vasiliy",
      id: 2,
      messages:[]
    },
    {
      name: "Alisa",
      id: 3,
      messages:[]
    },
    {
      name: "Siri",
      id: 4,
      messages:[]
    }
    ]);

  const addNewMessage = (mess) => {
    let nextNumber = 0;
    if(messages.length>0){nextNumber = messages[messages.length - 1].id+1 }  
    changeMessagesList([...messages, {id:nextNumber, author:"Anonim", text: mess}])
  }

  useEffect(()=>{
    if(messages.length===0){}
      else{
        if(messages[messages.length - 1].author !== "ChatBot"){
          const timerId = setTimeout(()=>{changeMessagesList([...messages, {id:messages[messages.length - 1].id+1, author:"ChatBot", text: "Really? Very interesting!"}])}, 2000);

          return () => {clearTimeout(timerId)}

        }
      };
      
    },[messages])
 
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path='/allchats' render={(props) => (<Chats {...props} list={allchats} />)} />
          <Route exact path="/profile" component={Profile}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/chat/:id' component={Chat} />   
          <Redirect  to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
