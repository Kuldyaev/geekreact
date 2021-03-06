import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { ChatName } from '../components/chatname';
import styles from '../css/chats.module.css';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { nanoid } from 'nanoid';
import { initChatsTracking} from '../store/chats/actions';
import { getChats } from '../store/chats/selectors';
import { chatsRef } from "../firebase";


export const Chats = (props) => {


  useEffect(() => {dispatch(initChatsTracking())},[]);


  const chats = useSelector(getChats);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [newcontact, changeNewContact] = useState('');
  const handleOpen = () => {setOpen(true)};
  const handleClose = () => {setOpen(false)};

  const createNewContact = () => {
    let nextChatId = '';
    const nextChatIdIsUnique = Object.keys(chats).filter(chat => chat.id === nextChatId);
    do {
      nextChatId = nanoid(16);
    } while (nextChatIdIsUnique.length > 0);

    if(newcontact.length>0){
      chatsRef.child(nextChatId).set({name: newcontact,  id: nextChatId, img: 0})
    }
    changeNewContact('');
    document.getElementById('newcontact').value = '';
    handleClose();
  }

  const handleChange = (event) => {
   changeNewContact(event.target.value);
  }

  return <div className = {styles.profilepage}>
            <div className = {styles.profileHeader}>
              <Link to={'/'} className = {styles.homepageLink}>&#8592;HomePage</Link>
              <div className = {styles.profileHeaderContent}>
                <div className = {styles.profileHeaderImg}></div>
                <div className = {styles.profileHeaderTitle}> CHATS</div>
              </div>
              <Button className={styles.profileHeaderRight} onClick={handleOpen}>+</Button>
            </div>
            <Modal open={open} onClose={handleClose}>
                <div className={styles.modalWindow}>
                  <div className={styles.modalForm}>
                    <h2 className={styles.modalTitle}>?????????????? ??????  ????????????????</h2>
                    <form className = {styles.inputForm}>
                      <input type="text" className={styles.newContactTextArea} onChange={handleChange} id="newcontact" autoFocus ref={input => input && input.focus()}/> 
                    </form>
                    <div className={styles.modalButtonArea}>
                      <Button onClick={createNewContact}>??????????????</Button>
                      <Button onClick={handleClose}>????????????</Button>
                    </div>
                  </div>  
                </div>
            </Modal>
            <div className = {styles.profileBody}>
              <div className = {styles.chatList}>
                 { Object.entries(chats).map(([key, chat])=>(
                    <ChatName
                          contact = {chat.name}
                          id= {chat.id}
                          key= {key} 
                          img = {chat.img}/>
                  ))}
             </div>
            </div>
         </div>
}