import { useSelector } from 'react-redux'

import styles from '../css/chatheader.module.css'
import { Link, Redirect } from 'react-router-dom'; 
import { ChatHeader } from './chatheader'
import { MessageList } from './messageList'
import { ChatsList } from './chatsList'
import { SendForm } from './sendForm'
import { getChats } from '../store/chats/selectors'
import { getMessagesByChatId } from '../store/messages/selectors'
import Box from '@material-ui/core/Box';

export const Chat = (props) => {

 const chats = useSelector(getChats);
 const messages = useSelector(getMessagesByChatId(Number(props.match.params.id)));
 const infoBase = chats.filter(item => item.id === Number(props.match.params.id));
 const info = infoBase[0];

 if (infoBase.length<1){
    return <Redirect from='*' to='/shats' />
  }else{

     const nextId = ( messages.length>0 ?messages[messages.length - 1].id+1  :0)

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
                <ChatsList list={chats}/>
              </Box>
              <Box
                sx={{
                  width: '70%',
                  height: '100%',
                }}
              >
                <ChatHeader id={info.id} name={info.name}/>
                <MessageList list={messages} name={info.name}  /> 
                <SendForm addMessage={props.addNewMessage} id={info.id} nextId={nextId} />
              </Box>
            </Box>
  }
}