import React from 'react';

import './style.css';

export const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form action="" className="form">
      <input
        type="text"
        className="input"
        placeholder="Digite aqui..."
        value={message}
        onChange={event => setMessage(event.target.value)}
        onKeyPress={event =>
          event.key === 'Enter' ? sendMessage(event) : null
        }
      />
      <button className="sendButton" onClick={event => sendMessage(event)}>
        Enviar
      </button>
    </form>
  );
};
