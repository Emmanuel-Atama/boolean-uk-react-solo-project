import { useEffect, useState } from "react";
import ApplicantsList from "./Components/ApplicantsList";
import CreateApplicationForm from "./Components/CreateApplicationForm";
import LeftAside from "./Components/LeftAside";
import "./index.css";

export default function App() {
const [kids, setKids] = useState([])
const [contacts, setContacts] = useState([])
const [hideForm, setHideForm] = useState(true);
const [contactEdit, setContactEdit] = useState([])

  console.log("Inside State; ", {kids, contacts, hideForm, contactEdit})

  useEffect(() => {
    const url = "http://localhost:3030/children";

    fetch(url)
      .then((res) => res.json())
      .then((kidsData) => {
        console.log("Inside Get Fetch: ", kidsData);

        setKids(kidsData);
      });
  }, []);
  return (
    <>
    <header className="header">
    <h1>ANEMS FOSTER SERVICES</h1>
    <h3><i>...There is a home for every child...</i></h3>
    </header>
    <div className="three-column-grid-expand-center">
    <LeftAside  kids={kids} hideForm={hideForm} setHideForm={setHideForm}/>
    <main className="center">
      {!hideForm && (<CreateApplicationForm contacts={contacts} setContacts={setContacts} />)}
    </main>
    <ApplicantsList
      contacts={contacts}
      hideForm={hideForm}
      setHideForm={setHideForm}
      // editContactForm={editContactForm}
      // setEditContactForm={setEditContactForm}
      setContactEdit={setContactEdit}
  />
      </div>
    
    </>
   
    
  );
}

