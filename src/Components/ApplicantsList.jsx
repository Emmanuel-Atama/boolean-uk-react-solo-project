function ApplicantsList(props) {
    const { contacts, hideForm, setHideForm, editContactForm,  setEditContactForm, setContactEdit } = props

    return (
    <aside className="right-aside">
        <header>
        <h2>Applicants</h2>
      <button 
      onClick = {() => {setEditContactForm(!editContactForm) 
      setHideForm(!hideForm)}} className="create-to-apply">
Apply Now
      </button>
      {/* <button 
      onClick = {() => {setEditContactForm(!editContactForm) 
      setHideForm(!hideForm)}} className="create-to-apply">
{hideForm ?? "Cancel"}
      </button> */}
      </header>
      <ul>
          {contacts.map((contact, index) => {
              const {firstName, lastName, email, houseNumber, street, city, postCode, phoneNumber} = contact
              return(
                  <li key={index} className="child-list-border">
                      <h3>First Name: {firstName}</h3>
                      <p>Last Name: {lastName}</p>
                      <p>Email: {email}</p>
                      <p>House Number: {houseNumber}</p>
                      <p>Street: {street}</p>
                      <p>City: {city}</p>
                      <p>PostCode: {postCode}</p>
                      <p>Phone Number: {phoneNumber}</p>

                      <button onClick = {() => {setEditContactForm(!editContactForm)
                         setContactEdit(contact)}}>
                            {editContactForm ? "Edit" : "Cancel"}
                      </button>
      
                  </li>
              )
          })}
      </ul>
      </aside>
    )
}
export default ApplicantsList