import './Message.css'

const Message = ({message}) => {
    const classList = `chat-post ${message.isFromUser ? 'your-text' : ''}`
    return (
        <div className={classList} style={{borderColor: message.color}}>
            <h3>
                {message.username}
            </h3>
            <p style={{whiteSpace: 'break-spaces'}}>
                {message.text}
            </p>
        </div>
    )
}

export default Message;