import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Message } from './components/message'


ReactDOM.render(
  <React.StrictMode>
    <Message
      author = {"Anonim"}
      text = {"Как пройти в библиотеку?"}    />
      <Message
      author = {"Vladimir"}
      text = {"Это в 2 часа ночи?"}    />
      <Message
      author = {"Anonim"}
      text = {'Да. Сегодня акция "Ночь в музее"'}    />
      <Message
      author = {"Vladimir"}
      text = {"Тогда вам два квартала прямо и один налево."}    />
  </React.StrictMode>,
  document.getElementById('root')
);

