import { useState, useEffect } from 'react'
import './App.css';
import { ChatHeader } from './components/chatheader'
import { MessageList } from './components/messageList'
import { SendForm } from './components/sendForm'

function App() {
  const [messages, changeMessagesList] = useState([

    ]);

  const addNewMessage = (mess) => {
    let nextNumber = 0;
    if(messages.length>0){nextNumber = messages[messages.length - 1].id+1 }  
    changeMessagesList([...messages, {id:nextNumber, author:"Anonim", text: mess}])
  }

  useEffect(()=>{
    if(messages.length===0){changeMessagesList([...messages, {id: 0, author:"ChatBot", text: "Hey, what's up?"}])}
      else{
        if(messages[messages.length - 1].author !== "ChatBot"){
          setTimeout(()=>{changeMessagesList([...messages, {id:messages[messages.length - 1].id+1, author:"ChatBot", text: "Really? Very interesting!"}])}, 2000);
        }
      }
    },[messages])
 
  return (
    <div className="App">
      <ChatHeader/>
      <MessageList list={messages} /> 
      <SendForm addMessage={addNewMessage}/>
    </div>
  );
}

export default App;
