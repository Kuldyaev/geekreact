import { useState } from 'react'
import { Link } from 'react-router-dom';
import { ChatName } from '../components/chatname';
import styles from '../css/chats.module.css';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

export const Chats = (props) => {
  const [open, setOpen] = useState(false);
  const [newcontact, changeNewContact] = useState('');
  const handleOpen = () => {setOpen(true)};
  const handleClose = () => {setOpen(false)};
  const createNewContact = () => {
    if(newcontact.length>0){props.addNewContact(newcontact)}
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
                <div className = {styles.profileHeaderTitle}>CHATS</div>
              </div>
              <Button className={styles.profileHeaderRight} onClick={handleOpen}>+</Button>
            </div>
            <Modal open={open} onClose={handleClose}>
                <div className={styles.modalWindow}>
                  <div className={styles.modalForm}>
                    <h2 className={styles.modalTitle}>Укажите имя  Контакта</h2>
                    <form className = {styles.inputForm}>
                      <input type="text" className={styles.newContactTextArea} onChange={handleChange} id="newcontact" autoFocus ref={input => input && input.focus()}/> 
                    </form>
                    <div className={styles.modalButtonArea}>
                      <Button onClick={createNewContact}>Создать</Button>
                      <Button onClick={handleClose}>Отмена</Button>
                    </div>
                  </div>  
                </div>
            </Modal>
            <div className = {styles.profileBody}>
              <div className = {styles.chatList}>
                 { props.list.map((message)=>(
                    <ChatName
                          contact = {message.name}
                          id= {message.id}
                          key= {message.id} />
                  ))}
             </div>
            </div>
         </div>
}