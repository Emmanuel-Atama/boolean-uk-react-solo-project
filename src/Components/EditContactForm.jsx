import { useEffect, useState } from "react";

export default function EditContactForm (props) {

    const { contactEdit, contacts, setContacts } = props;
    const [gender, setGender] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("")
    const [houseNumber, setHouseNumber] = useState("")
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [postCode, setPostCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState()
    const [dob, setDob] = useState("")
  const [status, setStatus] = useState("")
  const [bio, setBio] = useState("")
  const [dbs, setDbs] = useState("")
  const [radioBarred, setRadioBarred] = useState(false)
  const [radioConvict, setRadioConvict] = useState(false)
  const [radioDvla, setRadioDvla] = useState(false)
  const [radioDrivingPoints, setRadioDrivingPoints] = useState(false)
    
      useEffect(() => {
        if (contactEdit) {
            setFirstName(contactEdit.firstName);
            setLastName(contactEdit.lastName);
            setGender(contactEdit.gender)
            setEmail(contactEdit.email)
            setHouseNumber(contactEdit.houseNumber)
            setStreet(contactEdit.street)
            setCity(contactEdit.city)
            setPostCode(contactEdit.postCode)
            setPhoneNumber(contactEdit.phoneNumber)
            setDob(contactEdit.dob)
            setStatus(contactEdit.status)
            setBio(contactEdit.bio)
            setDbs(contactEdit.dbs)
            setRadioBarred(contactEdit.radioBarred)
            setRadioConvict(contactEdit.radioConvict)
            setRadioDrivingPoints(contactEdit.radioDrivingPoints)
            setRadioDvla(contactEdit.radioDvla)
        }
      }, [contactEdit])

      const handleFirstName = (event) => {setFirstName(event.target.value);};

      const handleLastName = (event) => {setLastName(event.target.value)};
    
      const handleGender = event => {setGender(event.target.value)}
    
      const handleEmail = (event) => {setEmail(event.target.value)};
    
      const handleHouseNumber = (event) => {setHouseNumber(event.target.value)};
    
      const handleStreet = (event) => {setStreet(event.target.value)};
    
      const handleCity = (event) => {setCity(event.target.value)};
    
    const handlePostCode = (event) => {setPostCode(event.target.value)};
    
    const handlePhone = (event) => {setPhoneNumber(event.target.value)};
    
     const handleDOB = event => {setDob(event.target.value)}
    
     const handleStatus = event => {setStatus(event.target.value)}
    
     const handleBio = event => {setBio(event.target.value)}
  
     const handleDbs = event => {setDbs(event.target.value)}

     const handleRadioBarred= event => {setRadioBarred(event.target.checked)}
    
     const handleRadioConvict = event => {setRadioConvict(event.target.checked)}
    
     const handleRadioDvla = event => {setRadioDvla(event.target.checked)}
    
     const handleRadioDrivingPoints = event => {setRadioDrivingPoints(event.target.checked)}
    

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
        dob,
    status,
    bio,
    dbs,
    radioBarred,
    radioConvict,
    radioDvla,
    radioDrivingPoints
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
      const handleDelete = (event) => {
      
        const fetchContactToDelete = {
          method: "DELETE"
        };

      const delUrl = `http://localhost:3030/contacts/${contactEdit.id}`

      console.log("Inside delUrl: ", delUrl)

      fetch(delUrl, fetchContactToDelete).then()
      // .then((res) =>res.json())
      // .then((deletedContact) => {

      //   setContacts(deletedContact)
      // })

      }
    return (
      <>
      <h2>Edit Application</h2>
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

<label htmlFor="gender-status">Gender</label>
        <select name="gender" id="gender" value={gender} onChange={handleGender} required>
          <option value="">--Choose Your Gender--</option>
          <option value="single">Male</option>
          <option value="married">Female</option>
          <option value="civil">Prefer Not To Say</option>
        </select>

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
        <small> Format: 123-456-7890</small>
        <label htmlFor="DOB">DOB: </label>
<input  id="DOB"
        name="DOB"
        type= "date"
        min="1970-01-01"
        max="1996-01-01"
        value={dob}
        onChange={handleDOB}
        required
        />
        <label htmlFor="relationship-status">Status</label>
        <select name="status" id="status" value={status} onChange={handleStatus} required>
          <option value="">--Choose Your Status--</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="civil">Civil Partnership</option>
        </select>
        <label htmlFor="bio">Section One: Bio </label>
        <textarea value={bio} onChange={handleBio} name="bio" id="bio" cols="30" rows="10" placeholder="...Bio and Background"></textarea>
<label htmlFor="dbs">Disclosure Number (DBS): </label>
<input id="dbs" name="dbs" type="number" value={dbs} onChange={handleDbs} minLength="10" maxLength="10" />

<label htmlFor="barred">Are you barred from working with children?</label>
<input type="radio" name="children" value="yes"  onChange={handleRadioBarred} />Yes
<input type="radio" name="children" value="no"  onChange={handleRadioBarred} />No

<label htmlFor="convictions">Do you have Any spent or unspent convictions?</label>
<input type="radio" name="conviction" value="yes"  onChange={handleRadioConvict} />Yes
<input type="radio" name="conviction" value="no"  onChange={handleRadioConvict} />No

<label htmlFor="dvla">Do you have a valid drivers license?</label>
<input type="radio" name="driver" value="yes"  onChange={handleRadioDvla} />Yes
<input type="radio" name="driver" value="no"  onChange={handleRadioDvla} />No

<label htmlFor="driving-points">Do you have any points on your drivers license?</label>
<input type="radio" name="points" value="yes" onChange={handleRadioDrivingPoints} />Yes
<input type="radio" name="points" value="no" onChange={handleRadioDrivingPoints} />No
        <div>
          <button onClick={handleSubmit} type="submit" className="create-to-apply">Update Details</button>
          <button class="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
      </form>
      </>
    )
}