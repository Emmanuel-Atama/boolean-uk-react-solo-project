export default function ListOfChildren(props) {
  // const { kids } = props
    return (
      <>
        <aside className="list-section light-shadow">
          <header className="list-of-child-header">
            <h2>LIST OF CHILDREN</h2>
          </header>
          <ul>
            {props.kids.map((kid, index) => {
              const {firstName, lastName, city} = kid
console.log("Inside Kids Map: ", kid)
return (
<li key={index}>
                <h3>Full Names of Child</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>City: {city}</p>
                <div className="list-of-child">
                  <button>View Child Details</button>
                  <button>Apply Now</button>
                </div>
            </li>
)
            })}
          </ul>
        </aside>
      </>
    );
  }
  