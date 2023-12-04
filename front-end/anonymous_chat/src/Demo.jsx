import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://127.0.0.1:4001';

function App() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        setSocket(socket);

        socket.on('chat messages', (msgs) => {
            setMessages(msgs);
        });

        socket.on('chat message', (msg) => {
            setMessages((messages) => [...messages, msg]);
        });

        return () => socket.disconnect();
    }, []);

    const sendMessage = () => {
        socket.emit('chat message', message);
        setMessage('');
    };

    return (
        <div>
            {messages.map((msg, index) => (
                <p key={index}>{msg}</p>
            ))}
            <input value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default App;
