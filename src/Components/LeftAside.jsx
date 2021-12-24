import { Link } from "react-router-dom";
import ListOfChildren from "../Components/ListOfChildren"
export default function LeftAside(props) {
    const { kids, hideForm, setHideForm } = props;

    return (
         <aside className="left-aside list-section light-shadow">
          <header className="list-of-child-header">
            <h2>LIST OF CHILDREN</h2>
            <button onClick={() => setHideForm(!hideForm)} className="create-to-apply">
              {hideForm ? "Apply Now" : "Cancel"}
              </button>
          </header>
<ListOfChildren kids={kids} />
        </aside>
    );
  }
  