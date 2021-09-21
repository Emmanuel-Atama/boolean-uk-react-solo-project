import { useState } from "react";

export default function CreateApplicationForm2(props) {
  const [dob, setDob] = useState("")
  const [status, setStatus] = useState("")
  const [bio, setBio] = useState("")
  const [dbs, setDbs] = useState("")
  const [radioBarred, setRadioBarred] = useState(false)
  const [radioConvict, setRadioConvict] = useState(false)
  const [radioDvla, setRadioDvla] = useState(false)
  const [radioDrivingPoints, setRadioDrivingPoints] = useState(false)

// console.log("Inside CAF2 State: ", {dob, status, bio, dbs, radioBarred, radioConvict, radioDvla, radioDrivingPoints})

 const handleDOB = event => {setDob(event.target.value)}

 const handleStatus = event => {setStatus(event.target.value)}

 const handleBio = event => {setBio(event.target.value)}

 const handleRadioBarred= event => {setRadioBarred(event.target.checked)}

 const handleDbs = event => {setDbs(event.target.value)}

 const handleRadioConvict = event => {setRadioConvict(event.target.checked)}

 const handleRadioDvla = event => {setRadioDvla(event.target.checked)}

 const handleRadioDrivingPoints = event => {setRadioDrivingPoints(event.target.checked)}
 const handleSubmit = (event) => {
  event.preventDefault();

  const formToCreate = {
    dob,
   status,
    bio,
   dbs,
    radioBarred,
    radioConvict,
    radioDvla,
    radioDrivingPoints, 
  }  
  const fetchForm = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formToCreate)
  }
  fetch("http://localhost:3030/forms", fetchForm)
  .then(res => res.json())
  .then(newForm => {
    console.log("Forms POST request: ", newForm)
    const formToAdd = {
      ...newForm,
    }

    props.setForms([...props.forms, formToAdd])
  })
};
    return (
      <>
      <h2>Continue Application...</h2>
        <form onSubmit={handleSubmit} className="form-stack light-shadow center Form-form margin-top">
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
        <select name="status" id="status" value={status} onChange={handleStatus} required>
          <option value="">--Choose Your Status--</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="civil">Civil Partnership</option>
        </select>
        <label htmlFor="bio">Section One: Bio </label>
        <textarea value={bio} onChange={handleBio} name="bio" id="bio" cols="30" rows="10" placeholder="...Bio and Background"></textarea>
<label htmlFor="dbs">Disclosure Number (DBS): </label>
<input id="dbs" name="dbs" type="number" value={dbs} onChange={handleDbs}/>

<label htmlFor="barred">Are you barred from working with children?</label>
<input type="radio" name="yes" value="yes"  onChange={handleRadioBarred} checked={radioBarred} />Yes
<input type="radio" name="no" value="no"  onChange={handleRadioBarred} />No

<label htmlFor="convictions">Do you have Any spent or unspent convictions?</label>
<input type="radio" name="yes" value="yes"  onChange={handleRadioConvict} checked={radioConvict}/>Yes
<input type="radio" name="no" value="no"  onChange={handleRadioConvict} />No

<label htmlFor="dvla">Do you have a valid drivers license?</label>
<input type="radio" name="yes" value="yes"  onChange={handleRadioDvla} checked={radioDvla}/>Yes
<input type="radio" name="no" value="no"  onChange={handleRadioDvla} />No

<label htmlFor="driving-points">Do you have any points on your drivers license?</label>
<input type="radio" name="yes" value="yes" onChange={handleRadioDrivingPoints} checked={radioDrivingPoints}/>Yes
<input type="radio" name="no" value="no" onChange={handleRadioDrivingPoints} />No
<div>
        <button onClick={handleSubmit} type="submit" className="final-submit" >
         Submit Application
        </button>
      </div>
        </form>
      </>
    );
  }
  