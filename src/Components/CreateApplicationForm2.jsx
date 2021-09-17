import { useState } from "react";

export default function CreateApplicationForm2() {
  const [dob, setDob] = useState("")

console.log("Inside CAF2 State: ", {dob})

 const handleDOB = event => {

  setDob(event.target.value)
 }
 const handleSubmit = (event) => {
  event.preventDefault();
};
    return (
      <>
        <form onSubmit={handleSubmit} className="form-stack light-shadow center contact-form margin-top">
<label htmlFor="DOB">DOB: </label>
<input  id="DOB"
        name="DOB"
        type= "date"
        min="1970-01-01"
        max="1996-01-01"
        value={dob}
        onChange={handleDOB}
        required
        />
        <label htmlFor="relationship-status">Status</label>
        <select name="status" id="status" required>
          <option value="">--Choose Your Status--</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="civil">Civil Partnership</option>
        </select>
        <label htmlFor="bio">Section One: Bio </label>
        <textarea name="bio" id="bio" cols="30" rows="10" placeholder="...Bio and Background"></textarea>
<label htmlFor="dbs">Disclosure Number (DBS): </label>
<input id="dbs" name="dbs" type="number"/>
        </form>
      </>
    );
  }
  