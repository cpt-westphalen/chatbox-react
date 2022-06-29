import { useState } from "react";

const messagesMock = [
    {username:'Pedroca', color: '#FFF0FF', text: 'message 1'},
    {username:'Predrin', color: '#ac6fac', text: 'loreeeeei ipsuoluuum nao sei oq'},
    {username:'Predrero', color: '#2c0b2c', text: '3'}
]

const useMessages = () => {
    const [messages, setMessages] = useState(messagesMock);
    const reversedMessages = messages.slice(0).reverse();
    const loggedUser = {username:'Pedroca', color: '#FFF0FF'};
    const makeMessage = (message) => {
        return {
            ...message,
            isFromUser: message.username === loggedUser.username
        }
    }

    const addMessage = (text) => {
        const message = {...loggedUser, text: text};
        setMessages([...messages, message]);
    }

    return {
        makeMessage,
        reversedMessages,
        addMessage
    }
}

export default useMessages;