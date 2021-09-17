import { useState } from "react";

export default function CreateChildDetails() {
const [firstName, setFirstName] = useState("")
const [lastName, SetLastName] = useState("")
const [age, setAge] = useState()



    const handleSubmit = (event) => {
        event.preventDefault();
      };
    return<>
    <h2>Create Child Info</h2>
    <form onSubmit={handleSubmit} className="form-stack light-shadow center contact-form margin-top"></form>
    </>
}