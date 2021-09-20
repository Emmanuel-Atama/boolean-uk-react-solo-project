export default function ApplicantsList(props) {
    const {contacts, hideForm, setHideForm, setContactEdit, editContactForm, setEditContactForm} = props
    return <>
    <aside className="right-aside">
        <header>
        <h2>Applicants</h2>
      <button onClick={() => (setHideForm(!hideForm))} className="create-to-apply">
{hideForm ? "Apply Now" : "Cancel"}
      </button>
      </header>
      <ul>
          {contacts.map((contact, index) => {
              const {firstName, lastName, email, street, city, postCode, phoneNumber} = contact
              return(
                  <li key={index} className="child-list-border">
                      <h3>FirstName: {firstName}</h3>
                      <p>LastName: {lastName}</p>
                      <p>Email: {email}</p>
                      <p>Street: {street}</p>
                      <p>City: {city}</p>
                      <p>PostCode: {postCode}</p>
                      <p>Phone Number: {phoneNumber}</p>
                      <button
                      onClick={() => {setEditContactForm(!editContactForm), setContactEdit(contact)}}
                      >
                {editContactForm ? "Edit" : "Cancel"}
                      </button>
                  </li>
              )
          })}
      </ul>
      </aside>
    </>
}