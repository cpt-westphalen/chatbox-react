import './Chatbox.css'
import InputMessage from './InputMessage';
import Message from './Message';
import useMessages from './useMessages';


const Chatbox = () => {
    const {reversedMessages, makeMessage, addMessage} = useMessages();

    return (
    <div className='container'>
        <div className='chat-log'>
            {reversedMessages.map((message, index) => 
                <Message key={index} message={makeMessage(message)}></Message>
            )}
        </div>
        <InputMessage addMessage={addMessage}/>
    </div>
    )
}

export default Chatbox;