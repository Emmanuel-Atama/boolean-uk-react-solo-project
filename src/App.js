import { useEffect, useState } from "react";
import LeftAside from "./components/LeftAside";
import ListOfChildren from "./components/ListOfChildren";
import RightAside from "./components/RightAside";
import "./styles.css";

export default function App() {
  const [forms, setForms] = useState([]);
  const [children, setChildren] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3030/forms";
    console.log("Inside Url: ", url);

    fetch(url)
      .then((res) => res.json())
      .then((formsData) => {
        console.log("Inside Get Fetch: ", formsData);

        setForms(formsData);
      });
  }, []);
  return (
    <main className="grid-container">
      <LeftAside ListOfChildren={ListOfChildren} />
      <RightAside />
    </main>
  );
}

