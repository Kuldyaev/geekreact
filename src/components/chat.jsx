import styles from '../css/chatheader.module.css'
import { ChatHeader } from './chatheader'
import { MessageList } from './messageList'
import { ChatsList } from './chatsList'
import { SendForm } from './sendForm'
import Box from '@material-ui/core/Box';

export const Chat = (props) => {
  console.log(props);

  return <Box 
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
              <ChatsList list={props.allchats}/>
            </Box>
            <Box
              sx={{
                width: '70%',
                height: '100%',
              }}
            >
              <ChatHeader/>
              <MessageList list={props.messages} /> 
              <SendForm addMessage={props.addNewMessage}/>
            </Box>
          </Box>
}