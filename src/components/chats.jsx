import { useState } from 'react'
import { Link } from 'react-router-dom';
import { ChatName } from '../components/chatname';
import styles from '../css/chats.module.css';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

export const Chats = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};
    const createNewContact = () => {
      console.log("NewContact");
      handleClose();
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
                    <h2>Укажите имя  Контакта</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan odio enim, non pharetra est ultrices et.
                    </p>
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