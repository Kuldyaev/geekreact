import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import { Chats } from './components/chats'
import { Chat } from './components/chat'
import { Register } from './components/register'
import { Home } from './components/home'
import { Profile } from './components/profile'

function App() {
  const [messages, changeMessages] = useState([]);

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


  const addNewContact = (name) => {
    let nextNumber = 0;
    if(contacts.length>0){nextNumber = contacts[contacts.length - 1].id+1 } 
    changeContacts([...contacts,{name:name, id:nextNumber}])
  }

  const addNewMessage = (idContact, mess, answer) => {
    let nextNumber = 0;
    if(messages.length>0){nextNumber = messages[messages.length - 1].id+1 }  
    changeMessages([...messages,{id:nextNumber, contact:idContact, text:mess, answer:answer}]);
  }

  useEffect(()=>{
    if(messages.length===0){}
      else{
        const botEchoMessages = messages.filter(message => message.contact === 1);
        if(botEchoMessages.length===0){}
          else{ 
            if(botEchoMessages[botEchoMessages.length - 1].answer === false){
              let nextNumber = 0;
              if(messages.length>0){nextNumber = messages[messages.length - 1].id+1 }
              const timerId = setTimeout(()=>{changeMessages([...messages,{id:nextNumber, contact:1, text:"ChatBot", answer:true}])}, 2000);
              return () => {clearTimeout(timerId)}
            }
          }  
      };
  },[messages])




 
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path='/allchats' render={(props) => (<Chats {...props} list={contacts} addNewContact={addNewContact}/>)} />
          <Route exact path="/profile" component={Profile}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/chat/:id' render={(props) => (<Chat {...props} messages={messages} contacts={contacts} addNewMessage={addNewMessage}/>)} />   
          <Redirect  to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;