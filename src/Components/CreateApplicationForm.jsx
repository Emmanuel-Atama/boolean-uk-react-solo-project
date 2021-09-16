import { useState } from "react";
export default function CreateApplicationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [phone, setPhone] = useState();

  console.log("Inside State: ", {
    firstName,
    lastName,
    street,
    city,
    postCode,
    phone
  });

  
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleStreet = (event) => {
    setStreet(event.target.value);
  };

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const handlePostCode = (event) => {
    setPostCode(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  return (
    <form className="form-stack light-shadow center contact-form">
      <label htmlFor="first-name-input">First Name:</label>
      <input
        onChange={handleFirstName}
        id="first-name-input"
        name="first-name-input"
        type="text"
        value={firstName}
      />
      <label htmlFor="last-name-input">Last Name:</label>
      <input
        onChange={handleLastName}
        id="last-name-input"
        name="last-name-input"
        type="text"
        value={lastName}
      />
      <label htmlFor="street-input">Street:</label>
      <input
        onChange={handleStreet}
        id="street-input"
        name="street-input"
        type="text"
        value={street}
      />
      <label htmlFor="city-input">City:</label>
      <input
        onChange={handleCity}
        id="city-input"
        name="city-input"
        type="text"
        value={city}
      />
      <label htmlFor="post-code-input">Post Code:</label>
      <input
        onChange={handlePostCode}
        id="post-code-input"
        name="post-code-input"
        type="text"
        value={postCode}
      />
      <label for="phone">Enter your phone number:</label>
      <input
        onChange={handlePhone}
        value={phone}
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        // required
      />
      <small> Format: 123-456-7890</small>
      <div>
        <button>Save</button>
        <button>Continue Application</button>
        <button>Cancel Application</button>
      </div>
    </form>
  );
}
