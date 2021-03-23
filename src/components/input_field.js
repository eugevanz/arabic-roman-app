import React, { useContext } from 'react';
import { InputContext } from '../App';

export default function InputField() {
    // Declare a new link to your context
    const value = useContext(InputContext);

    // Display the error Message
    // and use user input as params for converting
    return (
        <div className="field">
          <div className="field-body">
                <div className="field">
                <p className={`help ${value.isError ? 'is-danger' : 'is-link'}`}>{value.userError}</p>
                <p className="control">
                    <input id="input_field" className="input" type="email" placeholder="It can be either Arabic or Roman" onChange={event => value.convertInput(event.target.value)}></input>
                </p>
                </div>
          </div>
      </div>
    );
}