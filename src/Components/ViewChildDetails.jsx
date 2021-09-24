export default function ViewChildDetails(props) {
    const { kids} = props

return (
  <ul>
  {kids.map((kid, index) => {

    const {firstName, lastName, city, gender, medicalInfo, age, postCode, SEN} = kid
// console.log("Inside Kids Map: ", kid)
return (
<li key={index} className="child-center">
      <h3>First Name: {firstName}</h3>
      <p>Last Name: {lastName}</p>
      <p>Gender: {gender}</p>
      <p>Age: {age}</p>
      <p>PostCode: {postCode} </p>
      <p>City: {city} </p>
      <p>Medical Info: {medicalInfo} </p>
      <p>Gender: {gender} </p>
      <p>SEN Register: {SEN} </p>
  </li>
      )
  })}
</ul>
)
}