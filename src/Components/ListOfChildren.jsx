export default function ListOfChildren(props) {

  const { kids} = props

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
            <button>View Child Details</button>
          </div>
      </li>
          )
      })}
    </ul>
    );
  }
  