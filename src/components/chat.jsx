import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { initMessagesTracking } from '../store/messages/actions'
import styles from '../css/chatheader.module.css'
import { Link, Redirect } from 'react-router-dom'; 
import { ChatHeader } from './chatheader'
import { MessageList } from './messageList'
import { ChatsList } from './chatsList'
import { SendForm } from './sendForm';
import { getChats } from '../store/chats/selectors';
import { getMessagesByChatId } from '../store/messages/selectors';
import Box from '@material-ui/core/Box';

export const Chat = (props) => {

 const chats = useSelector(getChats);
 const messages = useSelector(getMessagesByChatId(props.match.params.id));
 const dispatch = useDispatch();
 useEffect(() => {dispatch(initMessagesTracking(props.match.params.id))},[]);

 const infoBase = Object.keys(chats).filter(item => String(item) === props.match.params.id);
 if (infoBase.length<1){
    return <Redirect from='*' to='/shats' />
 }else{

    console.log(chats);
    console.log(messages);
    console.log(Object.keys(chats));
    console.log(infoBase);
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
              <ChatsList list={Object.values(chats)}/>
            </Box>
            <Box
              sx={{
                width: '70%',
                height: '100%',
              }}
            >
              <ChatHeader img={chats[props.match.params.id].img} name={chats[props.match.params.id].name}/>

              <SendForm id={props.match.params.id}/>
            </Box>
          </Box>
  }
}