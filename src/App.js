import './App.css';
import { MessageList } from './components/messageList'
import { SendForm } from './components/sendForm'

function App() {
  return (
    <div className="App">
      <MessageList/> 
      <SendForm/>
    </div>
  );
}

export default App;
