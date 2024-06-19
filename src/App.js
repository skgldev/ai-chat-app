import React, { useState } from 'react';
import Chat from './components/Chat';
import Header from './components/Header';
import InformationBox from './components/InformationBox'; // Import the InformationBox component
import { CssBaseline, Container, Box } from '@mui/material';
import './index.css';

function App() {
  const [selectedModel, setSelectedModel] = useState('mistralai/Mixtral-8x7B-Instruct-v0.1');
  const [messages, setMessages] = useState([]);

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <Header
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        handleClearChat={handleClearChat}
      />
      <Container style={{ flex: 1, marginTop: 10 }}>

        <Box style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <InformationBox />
          <Chat messages={messages} setMessages={setMessages} selectedModel={selectedModel} />
        </Box>
      </Container>
    </div>
  );
}

export default App;
