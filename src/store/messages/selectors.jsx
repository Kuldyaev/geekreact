export const getMessages = (state) => state.messages;
export const getMessagesByChatId = (chatId) => (state) => state.messages[chatId];
