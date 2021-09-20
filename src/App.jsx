import { useEffect, useState } from "react";
import LeftAside from "./Components/LeftAside";
import ListOfChildren from "./Components/ListOfChildren";
import RightAside from "./Components/RightAside";
import "./index.css";

export default function App() {
const [kids, setKids] = useState([])
  const [children, setChildren] = useState([]);

  console.log("Inside State; ", {kids, children})
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
    <main className="grid-container">
      <LeftAside ListOfChildren={ListOfChildren} kids={kids} />
      <RightAside />
    </main>
  );
}

