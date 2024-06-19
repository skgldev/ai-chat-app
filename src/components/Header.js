import React from 'react';
import { AppBar, Toolbar, Typography, Select, MenuItem, Button } from '@mui/material';

const Header = ({ selectedModel, setSelectedModel, handleClearChat }) => {
  const models = [
    'mistralai/Mixtral-8x7B-Instruct-v0.1',
    'mistralai/Mixtral-8x22B-Instruct-v0.1',
    'mistralai/Mistral-7B-Instruct-v0.1',
    'mistralai/Mistral-7B-Instruct-v0.2',
    'mistralai/Mistral-7B-Instruct-v0.3',
    'meta-llama/Llama-2-13b-chat-hf',
    'meta-llama/Llama-2-70b-chat-hf',
    'meta-llama/Llama-3-8b-chat-hf',
    'meta-llama/Llama-3-70b-chat-hf',
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          AI Chat Application
        </Typography>
        <Select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          style={{ marginRight: 20, color: 'white' }}
        >
          {models.map((model) => (
            <MenuItem key={model} value={model}>
              {model}
            </MenuItem>
          ))}
        </Select>
        <Button color="inherit" onClick={handleClearChat}>
          Clear Chat
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
