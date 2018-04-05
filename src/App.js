import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import sendRequest from './apiai/main';
import logo from './chatbot.png';
import './App.css';

class App extends Component {
  componentDidMount(){
    addResponseMessage("Hi!, how can I help you?");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming ${newMessage}`);
    sendRequest(newMessage, response => {
      addResponseMessage(response);
    })
  }

  render() {
    return (
      <div className='App'>
          <h1>Welcome to Support Chatbot</h1>
          <h3>Click on blue icon on bottom right corner to start chatting!</h3>
        <Widget 
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          subtitle='Welcome to projectwerk support chatbot'
        />
      </div>
    );
  }
}

export default App;
