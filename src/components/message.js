import React, { useContext } from 'react';
import { InputContext } from '../App';

export default function Message() {
    // Declare a new link to your context
    const value = useContext(InputContext);

    // Conversion results display here
    return (
        <article className="message is-dark">
          <div className="message-body">{value.value}</div>
      </article>
    );
}