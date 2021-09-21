import { useEffect, useState } from "react";

export default function EditContactForm (props) {

    const { contactEdit, contacts, setContacts } = props;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("")
    const [houseNumber, setHouseNumber] = useState("")
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [postCode, setPostCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0)

    // console.log("Inside EditContact State: ", {
    //     firstName,
    //     lastName,
    //     email,
    //     houseNumber,
    //     street,
    //     city,
    //     postCode,
    //     phoneNumber,
    //   })
    
      useEffect(() => {
        if (contactEdit) {
            setFirstName(contactEdit.firstName);
            setLastName(contactEdit.lastName);
            setEmail(contactEdit.email)
            setHouseNumber(contactEdit.houseNumber)
            setStreet(contactEdit.street)
            setCity(contactEdit.city)
            setPostCode(contactEdit.postCode)
            setPhoneNumber(contactEdit.phoneNumber)
        }
      }, [contactEdit])

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
      };
    
      const handleLastName = (event) => {
        setLastName(event.target.value);
      };
      const handleEmail = (event) => {
        setEmail(event.target.value);
      };
      const handleHouseNumber = (event) => {
        setHouseNumber(event.target.value);
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
        setPhoneNumber(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
    
      const contactToUpdate = {
        firstName,
        lastName,
        email,
        houseNumber,
        street,
        city,
        postCode,
        phoneNumber, 
      }  
      const fetchContactToUpdate = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactToUpdate),
      }

const url = `http://localhost:3030/contacts/${contactEdit.id}`;

      fetch(url, fetchContactToUpdate)
      .then(res => res.json())
      .then(updatedContact => {
        // console.log("Contact POST request: ", updatedContact)
        const  updatedContacts = contacts.map(contact => {
            if (contact.id === updatedContact.id) {
                return {
                    ...updatedContact
                }
                } else {
                    return contact
                }
        })
        setContacts(updatedContacts)
      })
      };

    return (
      <>
      <h2>Edit Application Form</h2>
        <form onSubmit={handleSubmit} className="form-stack light-shadow center contact-form">

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
            <label for="email">Email:</label>
        <input
          onChange={handleEmail}
          value={email}
          type="email"
          id="email"
          name="email"
          />
        <label for="phone">House Number:</label>
        <input
          onChange={handleHouseNumber}
          value={houseNumber}
          type="number"
          id="house-number"
          name="house-number"
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
          value={phoneNumber}
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          // required
        />
        {/* <small> Format: 123-456-7890</small> */}
        <div className="form-one-btn">
          <button onClick={handleSubmit} type="submit" className="create-to-apply">Update Details</button>
        </div>
      </form>
      </>
    )
}