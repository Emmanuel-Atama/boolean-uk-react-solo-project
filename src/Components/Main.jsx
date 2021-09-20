import CreateApplicationForm from "./CreateApplicationForm";
import CreateApplicationForm2 from "./CreateApplicationForm2";

export default function Main(props) {

  const { contacts, setContacts} = props

    return (
      <>
        <main className="center">
        <CreateApplicationForm contacts={contacts} setContacts={setContacts}/>
        <CreateApplicationForm2 />
        </main>
      </>
    );
  }
  