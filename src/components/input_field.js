import React, { useContext } from 'react';
import { InputContext } from '../App';

export default function InputField() {
    // Declare a new state variable
    const value = useContext(InputContext);

    return (
        <div className="field">
          <div className="field-body">
                <div className="field">
                <p className={`help ${value.isError ? 'is-danger' : 'is-success'}`}>{value.userError}</p>
                <p className="control">
                    <input id="input_field" className="input" type="email" placeholder="It can be either Arabic or Roman" onChange={event => value.convertInput(event.target.value)}></input>
                </p>
                </div>
          </div>
      </div>
    );
}