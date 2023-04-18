import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = evt => {
    //setName(evt.target.value);

    const { target } = evt;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setName(inputValue);
    } else {
      //setMessage(inputValue);
      alert("message");
  }
}

  const isValidName = name !== "";
  const isValidEmail = email !== "";
  const [enteredName, setEnteredName] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState(false);

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
         // placeholder="username"
         onBlur={() => setEnteredName(true)}
         className="appearance-none rounded-none relative
         w-3/4 px-3 py-2 border border-gray-300
         placeholder-gray-500 text-gray-900 rounded
         focus:outline-none focus:ring-indigo-500
         focus:border-indigo-500 focus:z-10 sm:text-sm"
        />
        {enteredName ? (isValidName ? "✅" : "❌") : null}
        <label htmlFor="email" className="block">Email:</label>
        <input
          id="email"
          name="email"
          onChange={handleInputChange}
          type="email"
          value={email}
         // placeholder="email"
          onBlur={() => setEnteredEmail(true)}
          className="appearance-none rounded-none relative
          w-3/4 px-3 py-2 border border-gray-300
          placeholder-gray-500 text-gray-900 rounded
          focus:outline-none focus:ring-indigo-500
          focus:border-indigo-500 focus:z-10 sm:text-sm"
        />
        {enteredEmail ? (isValidEmail ? "✅" : "❌") : null}
        <label htmlFor="message" className="block">Message:</label>
        <input
          //value={password}
          name="message"
         // onChange={handleInputChange}
          type="text"
          placeholder="Enter your message"
         //onBlur={handleOnBlur}
         className="appearance-none rounded-none relative
         w-3/4 px-3 py-2 border border-gray-300
         placeholder-gray-500 text-gray-900 rounded
         focus:outline-none focus:ring-yellow-500
         focus:border-yellow-500 focus:z-10 sm:text-sm h-20"
        />
        <button type="button" className="group relative flex justify-center
                my-5 py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500">Submit</button>
      </form>
      
     
      
      
    </main>
    
  );
}

export default Form;
