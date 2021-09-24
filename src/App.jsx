import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import ApplicantsList from "./Components/ApplicantsList";
import CreateApplicationForm from "./Components/CreateApplicationForm";
import EditContactForm from "./Components/EditContactForm";
import LeftAside from "./Components/LeftAside";
import ViewChildDetails from "./Components/ViewChildDetails";
import "./index.css";

export default function App() {
const [kids, setKids] = useState([])
const [contacts, setContacts] = useState([])
// const [forms, setForms] = useState([])
const [hideForm, setHideForm] = useState(true);
const [editContactForm, setEditContactForm] = useState(true)
const [contactEdit, setContactEdit] = useState([])

  console.log("Inside State; ", {kids, contacts, hideForm, contactEdit, editContactForm})

  useEffect(() => {
    const url = "http://localhost:3030/contacts";

    fetch(url)
      .then((res) => res.json())
      .then((contactData) => {
        // console.log("Inside Get Fetch: ", contactData);

        setContacts(contactData);
      });
  }, []);

  useEffect(() => {
    const url = "http://localhost:3030/children";

    fetch(url)
      .then((res) => res.json())
      .then((kidsData) => {
        // console.log("Inside Get Fetch: ", kidsData);

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
    {/* <Switch>
        <Route exact path="/ViewChildDetails">
<ViewChildDetails kids={kids}/>
        </Route>
      </Switch> */}
      {!hideForm && (<CreateApplicationForm contacts={contacts} setContacts={setContacts} />)}
      {!editContactForm && (<EditContactForm contacts={contacts} setContacts={setContacts} contactEdit={contactEdit}/>)}
    </main>
    <ApplicantsList
      contacts={contacts}
      hideForm={hideForm}
      setHideForm={setHideForm}
      editContactForm={editContactForm}
      setEditContactForm={setEditContactForm}
      setContactEdit={setContactEdit}
  />
      </div>
      {/* <Switch>
        <Route exact path="/ViewChildDetails">
<ViewChildDetails kids={kids}/>
        </Route>
      </Switch> */}
    </> 
  );
}

