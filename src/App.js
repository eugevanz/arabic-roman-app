import Message from './components/message';
import InputField from './components/input_field';

import { toRoman, fromRoman } from './helpers/RomanNumerals';

import React, { useState, createContext } from 'react';

export const InputContext = createContext();

export default function App() {
  const [value, setValue] = useState('Results show here');
  const [error, setError] = useState('');

  function convertInput(params) {

    if (params.length < 1 || !params) {
      setValue('Results show here');
      setError('');
    } else {
      params = params.toUpperCase();
      
      // test for digits only
      if ((/\d/g).test(params)) {
        setError('');
        setValue(toRoman(params));
      }

      // test for letters only
      if ((/^[IVXLCDM]+$/i).test(params)) {
        setError('');
        let num = fromRoman(params);

        if (num < 0) {
          setError('Only use roman numerals');
          setValue('Results show here');
          params = '';
        } else {
          setValue(num);
        }
      }
      
    } 
  }

  return (
    <>
      <InputContext.Provider value={{value, error, convertInput}}>
        <section class="hero is-medium is-info">
          <div class="hero-body">
            <p class="title">Arabic Roman</p>
            <p class="subtitle">An ancient converter</p>
          </div>
        </section>
        <br/><br/>
        <p className="subtitle is-6">
            In Roman numerals, 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII.
            <br/><br/>
            Enter <b>Arabic</b> numerals below (eg. 1, 2, 3, 4, 5, 6, 7, 8, and 9) to convert to <b>Roman</b> numerals.
            <br/><br/>
            You can alternatively enter <b>Roman</b> numerals (eg. MMVIII) to convert to <b>Arabic</b>
        </p>
        <br/><br/>
        <Message/>
        <br/>
        <InputField/>
        <br/><br/><br/><br/>
      </InputContext.Provider>
    </>
  );
}
