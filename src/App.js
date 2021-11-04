import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import { Chats } from './components/chats'
import { Chat } from './components/chat'
import { Register } from './components/register'
import { Home } from './components/home'
import { Profile } from './components/profile'

function App() {
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

  const [contacts, changeContacts] = useState([
    {
      name: 'ChatBot',
      id: 1,
    },
    {
      name: "Vasiliy",
      id: 2,
    },
    {
      name: "Alisa",
      id: 3,
    },
    {
      name: "Siri",
      id: 4,
    }
  ]);

  const addNewMessage = (id, mess, author) => {
    const newAllChats = allchats;
    const currentEl = newAllChats[newAllChats.findIndex(item => item.id === Number(id))];
    let nextNumber = 0;
    if(currentEl.messages.length>0){nextNumber = currentEl.messages[currentEl.messages.length - 1].id+1 }  
    newAllChats[newAllChats.findIndex(item => item.id === Number(id))].messages.push({id:nextNumber, author: author, text: mess});
    console.log(newAllChats);
    changeAllChats(newAllChats);
    console.log(allchats);
  }

  useEffect(()=>{
    if(allchats[0].messages.length===0){}
      else{
        if(allchats[0].messages[allchats[0].messages.length - 1].author !== "ChatBot"){
          const timerId = setTimeout(()=>{alert("Test")}, 2000);
          return () => {clearTimeout(timerId)}
        }
      };
  },[allchats])



  
 
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path='/allchats' render={(props) => (<Chats {...props} list={contacts} />)} />
          <Route exact path="/profile" component={Profile}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/chat/:id' render={(props) => (<Chat {...props} allchats={allchats} addNewMessage={addNewMessage}/>)} />   
          <Redirect  to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;