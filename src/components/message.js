import React, { useContext } from 'react';
import { InputContext } from '../App';

export default function Message() {
    // Declare a new state variable
    const value = useContext(InputContext);

    return (
        <article className="message is-dark">
          <div className="message-body">{value.value}</div>
      </article>
    );
}