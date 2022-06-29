import { useRef, useState } from 'react';
import './InputMessage.css';


const InputMessage = ({addMessage}) => {
    const [input, setInput] = useState('');
    const isValidMessage = input && input.trim();
    const textAreaRef = useRef(null);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const sendMessage = () => {
        addMessage(input);
        textAreaRef.current.value = '';
        setInput(null);
    };

    const handleEnterKey = (k) => {
        if (k.key === 'Enter') {
            k.preventDefault();
            if(isValidMessage) sendMessage();
        }
    }

    return (
    <div className='input'>
        <textarea 
            ref={textAreaRef} 
            placeholder="Digite uma mensagem..." 
            maxLength="500" 
            autoComplete="off" 
            className='message-input' 
            onChange={handleChange} 
            onKeyDown={handleEnterKey} />
		<button className="send-button" onClick={sendMessage} disabled={!isValidMessage}/>
    </div>
    )
}

export default InputMessage;