import Together from 'together-ai';

// Initialize the Together AI client
const together = new Together({
  apiKey: "API_KEY" // process.env.REACT_APP_TOGETHER_API_KEY, // Ensure this environment variable is set
});

/**
 * Send a conversation history to the Together AI chat model and get the response.
 * @param {Array} conversation - The conversation history.
 * @param {string} model - The model to use.
 * @returns {Promise<string>} - The AI model's response.
 */
export const sendConversationToAI = async (conversation, model) => {
    try {
      const response = await together.chat.completions.create({
        model: model,
        messages: conversation,
      });
      return response.choices[0].message.content;
    } catch (error) {
      console.error('Error communicating with Together AI:', error);
      throw error;
    }
  };