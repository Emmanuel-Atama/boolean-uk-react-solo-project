export default function ListOfChildren() {
    return (
      <>
        <aside className="list-section light-shadow">
          <header className="list-of-child-header">
            <h2>LIST OF CHILDREN</h2>
          </header>
          <ul>
            <li>
              <section>
                <h3>Full Names of Child</h3>
                <div className="list-of-child">
                  <button>View Child Details</button>
                  <button>Apply Now</button>
                </div>
              </section>
            </li>
          </ul>
        </aside>
      </>
    );
  }
  