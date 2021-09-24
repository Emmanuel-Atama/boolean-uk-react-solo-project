function ApplicantsList(props) {
    const { contacts, hideForm, setHideForm, editContactForm,  setEditContactForm, setContactEdit, handleDelete } = props

    return (
    <aside className="right-aside">
        <header>
        <h2>Applicants</h2>
      <button 
      onClick = {() => {setHideForm(!hideForm)}} className="create-to-apply">
{hideForm ? "Apply Now" : "Cancel"}</button>

      </header>
      <ul>
          {contacts.map((contact, index) => {
              const {firstName, lastName, gender, email, houseNumber, street, city, postCode, phoneNumber, dob, status, bio, dbs, radioBarred, 
                radioConvict, radioDvla, radioDrivingPoints} = contact
              return(
                  <li key={index} className="child-list-border">
                      <h3>First Name: {firstName}</h3>
                      <p>Last Name: {lastName}</p>
                      <p>Email: {email}</p>
                      <p>Gender: {gender}</p>
                      <p>House Number: {houseNumber}</p>
                      <p>Street: {street}</p>
                      <p>City: {city}</p>
                      <p>PostCode: {postCode}</p>
                      <p>Phone Number: {phoneNumber}</p>
                      <p>Date Of Birth: {dob}</p>
                      <p>Status: {status}</p>
                      <p>Biography: {bio}</p>
                      <p>DBS Number: {dbs}</p>
                      <p>Barring List: {radioBarred}</p>
                      <p>Any Convictions: {radioConvict}</p>
                      <p>Driver's License: {radioDvla}</p>
                      <p>Driving Penalty: {radioDrivingPoints}</p>

                      <button onClick = {() => {setEditContactForm(!editContactForm)
                         setContactEdit(contact)}} className="delete-btn">
                            {editContactForm ? "Edit" : "cancel"}
                      </button>
      <button className="delete-btn" onClick={handleDelete}>Delete</button>
                  </li>
              )
          })}
      </ul>
      </aside>
    )
}
export default ApplicantsList