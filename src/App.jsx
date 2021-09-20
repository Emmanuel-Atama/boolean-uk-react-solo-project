import { useEffect, useState } from "react";
import CreateApplicationForm from "./Components/CreateApplicationForm";
import LeftAside from "./Components/LeftAside";
import Main from "./Components/Main";
import "./index.css";

export default function App() {
const [kids, setKids] = useState([])
const [contacts, setContacts] = useState([])
const [hideForm, setHideForm] = useState(true);
const [children, setChildren] = useState([]);

  console.log("Inside State; ", {kids, contacts, hideForm, children})

  useEffect(() => {
    const url = "http://localhost:3030/children";

    fetch(url)
      .then((res) => res.json())
      .then((kidsData) => {
        console.log("Inside Get Fetch: ", kidsData);

        setKids(kidsData);
        setChildren(kidsData)
      });
  }, []);
  return (
    <>
    <header className="header">
    <h1>Anems Foster Services</h1>
    <h3><i>...There is a home for every child...</i></h3>
    </header>
    <div className="three-column-grid-expand-center">
    <LeftAside kids={kids} hideForm={hideForm} setHideForm={setHideForm} />
      <Main />
      <aside className="right-aside">
        {!hideForm && (<CreateApplicationForm contacts={contacts} setContacts={setContacts} />)}
      </aside>
      </div>
    
    </>
   
    
  );
}

