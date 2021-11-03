import { useState, useEffect } from 'react'
import './App.css';
import { ChatHeader } from './components/chatheader'
import { MessageList } from './components/messageList'
import { ChatsList } from './components/chatsList'
import { SendForm } from './components/sendForm'
import Box from '@material-ui/core/Box';

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
    <div className="App">
      <Box 
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
        }}
      >
        <Box
          sx={{
          width: '28%',
          height: '100%',
          border: '1px solid grey',
        }}
        >
          <Box
            sx={{
              width: '100%',
              height: '5%',
              border: '1px solid grey',
              backgroundColor: '#f0f0f0',
            }}
          >Contacts</Box>
          <ChatsList list={allchats}/>
        </Box>
        <Box
          sx={{
            width: '70%',
            height: '100%',
          }}
        >
          <ChatHeader/>
          <MessageList list={messages} /> 
          <SendForm addMessage={addNewMessage}/>
        </Box>
      </Box>
    </div>
  );
}

export default App;
