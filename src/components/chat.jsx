import styles from '../css/chatheader.module.css'
import { Link, Redirect } from 'react-router-dom'; 
import { ChatHeader } from './chatheader'
import { MessageList } from './messageList'
import { ChatsList } from './chatsList'
import { SendForm } from './sendForm'
import Box from '@material-ui/core/Box';

export const Chat = (props) => {

 const infoBase = props.contacts.filter(item => item.id === Number(props.match.params.id));
 const info = infoBase[0];
 const chatmessages = props.messages.filter(message => message.contact === Number(props.match.params.id))

  if (infoBase.length<1){
    return <Redirect from='*' to='/shats' />
  }else{

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
                <Link to={'/allchats'} className = {styles.contactsLink}>Contacts</Link>
                <ChatsList list={props.contacts}/>
              </Box>
              <Box
                sx={{
                  width: '70%',
                  height: '100%',
                }}
              >
                <ChatHeader id={info.id} name={info.name}/>
                <MessageList list={chatmessages} name={info.name}/> 
                <SendForm addMessage={props.addNewMessage} id={info.id}/>
              </Box>
            </Box>
  }
}