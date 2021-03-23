import Message from './components/message';
import InputField from './components/input_field';
// RomanNumerals helper
import { toRoman, fromRoman } from './helpers/RomanNumerals';

import React, { useState, createContext } from 'react';
// Create the app context here
export const InputContext = createContext();

// Note: error displaying needs work
export default function App() {
  const [value, setValue] = useState('Results show here.');
  const [userError, setUserError] = useState('Convert almost any number you can think of.');
  const [isError, setIsError] = useState(false);

  function convertInput(params) {
    // There's no user input
    if (params.length < 1 || !params) {
      setValue('Results show here.');
      setUserError('Convert almost any number you can think of.');
      setIsError(false);
    } else {
      params = params.toUpperCase();
      
      // test for digits only
      if ((/\d/g).test(params)) {
        setUserError("You want to convert to Roman numerals.");
        setIsError(false);
        setValue(toRoman(params));

        if (value.length < 1) {
          setIsError(true);
          setUserError("You cant mix the two.");
        }
      }

      // test for these letters only
      if ((/^[IVXLCDM]+$/i).test(params)) {
        setUserError('You want to convert to Arabic numerals, from Roman.');
        setIsError(false);
        let num = fromRoman(params);

        if (num < 0) {
          setUserError('Only use Roman numerals.');
          setValue('Results show here.');
          setIsError(true);
          params = '';
        } else {
          setValue(num);

          if (value.length < 1) {
            setIsError(true);
            setUserError("You cant mix the two.");
          }
        }
      }
      
    } 
  }
  // Allow the children access to the context
  return (
    <>
      <InputContext.Provider value={{value, userError, isError, convertInput}}>
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
