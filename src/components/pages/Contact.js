import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid 
//and confetti function to shower confetti when submit button is clicked
import { validateEmail } from '../utils/helpers';
import { addConfetti } from '../utils/confetti.js';

//styles for the form fields - tailwind
const inputStyle=`appearance-none rounded-none 
relative w-3/4 px-3 py-2 border border-gray-300 
placeholder-gray-500 text-gray-900 rounded 
focus:outline-none focus:ring-indigo-500 
focus:border-indigo-500 focus:z-10 sm:text-sm`;

const buttonStyle=`group relative flex justify-center
my-5 py-2 px-4 border border-transparent text-sm font-medium
rounded-md text-white bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2
focus:ring-red-500`;

const buttonStyleDisabled=`group relative flex justify-center
my-5 py-2 px-4 border border-transparent text-sm font-medium
rounded-md text-white bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2
focus:ring-red-500`;

const messageStyle=inputStyle + ` h-24`;
//style for error messages
const errorMessage=`text-red-500`;

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = evt => {
    
    const { target } = evt;
    const inputType = target.name;
    const inputValue = target.value;

    //check input type and set correct state
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  }

  const handleSubmit = () => {
    setSubmitClicked(true); //can show apology message - submit not implemented yet
    addConfetti(); //shower confetti
  }
  //used for validation and showing error message
  const isValidName = name !== "";
  const isValidEmail = email !== "" && validateEmail(email);
  const isValidMessage = message !== "";
  const isValidButton = isValidName && isValidEmail && isValidMessage;

  const [enteredName, setEnteredName] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState(false);
  const [enteredMessage, setEnteredMessage] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);

  return (

    <main className="w-3/4 pt-20 m-auto">
      
        <form className="form">
        <label htmlFor="userName" className="block">Name:</label>
        <input
          id="userName"
          name="userName"
          value={name}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your name"
         onBlur={() => setEnteredName(true)}
         className={inputStyle}
        />
        {enteredName ? (isValidName ? "" : <p className={errorMessage}>❌ Please enter your name.</p>) : null}
        <label htmlFor="email" className="block">Email:</label>
        <input
          id="email"
          name="email"
          onChange={handleInputChange}
          type="email"
          value={email}
          placeholder="Enter a valid email address"
          onBlur={() => setEnteredEmail(true)}
          className={inputStyle}
        />
        {enteredEmail ? (isValidEmail ? "" : <p className={errorMessage}>❌ Please enter a valid email address.</p>) : null}
        <label htmlFor="message" className="block">Message:</label>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your message"
          onBlur={() => setEnteredMessage(true)}
          className={messageStyle}
        /> 
        {enteredMessage ? (isValidMessage ? "" : <p className={errorMessage}>❌ Please enter your message.</p>) : null}
        <button type="button" disabled={!isValidButton} className={isValidButton ? buttonStyle : buttonStyleDisabled} onClick={handleSubmit}>Submit</button>
        {/*Show error message on submit*/}
        <p id="apologies" className={!submitClicked ? "hidden" : "apology"}>Apologies this part of my portfolio is not working yet! To contact me please email me at <a href="mailto:helenelee3@outlook.com" className="underline">helenelee3@outlook.com</a></p>
      </form>
      
     
      
      
    </main>
    
  );
}

export default Form;
