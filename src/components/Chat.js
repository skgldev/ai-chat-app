import React, { useState } from 'react';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { sendConversationToAI } from '../aiService';


const Chat = ({ messages, setMessages, selectedModel }) => {
  const [input, setInput] = useState('');

  const handleSendMessage = async (message) => {
    const userMessage = { direction: 'outgoing', content: message, role: 'user', timestamp: new Date().toLocaleTimeString() };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const conversation = [...messages, userMessage].map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));
      const aiResponse = await sendConversationToAI(conversation, selectedModel);
      const assistantMessage = { direction: 'incoming', content: aiResponse, role: 'assistant', timestamp: new Date().toLocaleTimeString() };
      setMessages((prevMessages) => [
        ...prevMessages,
        assistantMessage,
      ]);
    } catch (error) {
      const errorMessage = { direction: 'incoming', content: 'Error: Could not retrieve response.', role: 'assistant', timestamp: new Date().toLocaleTimeString() };
      setMessages((prevMessages) => [
        ...prevMessages,
        errorMessage,
      ]);
    }
  };

  return (
    <MainContainer>
      <ChatContainer>
        <MessageList>
          {messages.map((msg, index) => (
            <Message key={index} model={{ direction: msg.direction, message: msg.content }}>
              <div style={{ fontSize: '0.75em', color: 'gray' }}>
                {msg.role} - {msg.timestamp}
              </div>
            </Message>
          ))}
        </MessageList>
        <MessageInput
          placeholder="Type message here..."
          value={input}
          onChange={(val) => setInput(val)}
          onSend={(message) => handleSendMessage(message)}
        />
      </ChatContainer>
    </MainContainer>
  );
};

export default Chat;
