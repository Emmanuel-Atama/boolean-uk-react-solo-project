import {Link, useHistory, useParams} from "react-router-dom";

export default function ListOfChildren(props) {
  const { kids} = props

  const history = useHistory()

  const {kidGender} = useParams()

  let filteredKids = kids

  if (kidGender) {
    filteredKids = kids.filter((kid) => kid.gender === kidGender)
  }
  console.log("Inside Children List: ", filteredKids)
    return (
      <ul>
      {kids.map((kid, index) => {

        const {firstName, lastName, city, gender, medicalInfo} = kid
    // console.log("Inside Kids Map: ", kid)
  return (
    <li key={index} className="child-list-border">
          <h3>First Name: {firstName}</h3>
          <p>Last Name: {lastName}</p>
          <p>Gender: {gender}</p>
          <p>City: {city}</p>
          <p> Medical Info: {medicalInfo}</p>
          <div className="list-of-child">
            <button>
              <Link to="./ViewChildDetails">View Child Details</Link>
              </button>
            <button>
              <Link to="/">Back</Link>
            </button>
          </div>
      </li>
          )
      })}
    </ul>
    );
  }
