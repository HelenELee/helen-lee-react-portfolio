

function Form() {
  const handleOnBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    //const inputValue = target.value;

    if (inputType === 'email') {
      //setEmail(inputValue);
      alert('email');
    } else if (inputType === 'userName') {
      //setUserName(inputValue);
      alert('username');
    } else {
      //setMessage(inputValue);
      alert("message");
    }
    return;
  }

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
   /* if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    */
    
   

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    //setUserName('');
    //setMessage('');
//setEmail('');
  };



  return (
    <div>

      <form className="form">
        <label htmlFor="userName">Name:</label>
        <input
          id="userName"
          name="userName"
          //onChange={handleInputChange}
          type="text"
         // placeholder="username"
         //onBlur={handleOnBlur}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
         // onChange={handleInputChange}
          type="email"
         // placeholder="email"
          //onBlur={handleOnBlur}
        />
        <label htmlFor="message">Message:</label>
        <input
          //value={password}
          name="message"
         // onChange={handleInputChange}
          type="text"
         // placeholder="Enter your message"
         //onBlur={handleOnBlur}
        />
        <button type="button" >Submit</button>
      </form>
      {/*
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      */}
    </div>
  );
}

export default Form;
