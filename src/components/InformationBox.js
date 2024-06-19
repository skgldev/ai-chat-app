import React from 'react';
import { Typography, Paper } from '@mui/material';

const InformationBox = () => {
  return (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="body2" gutterBottom>
        Welcome to AI Chat Application
      </Typography>
      <Typography variant="caption">
        This chat application allows you to interact with different AI models. 
        Select a model from the dropdown menu above and start chatting. 
        Use the "Clear Chat" button to reset the conversation.
      </Typography>
    </Paper>
  );
};

export default InformationBox;
