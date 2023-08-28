// import React, { useState } from 'react';

// function Payment() {
//     const initialFormData = {
//     name: '',
//     admnNo:'',
//     acdmYr:'',
//     amount:'',
//     remark:'',
//     fName:'',
//     mob:'',
//     checkbox:'',

//   };

//   const [formData, setFormData] = useState(initialFormData);


//    const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     const inputValue = type === 'radio' || type === 'checkbox' ? checked : value;
  
//   setFormData((prevData) => ({
//       ...prevData,
//       [name]: inputValue,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Form data submitted:', formData);
//     setFormData(initialFormData);
//   };

import React, { useState } from 'react';
import List from './List'

function Payment() {

    const initialFormData = {  

        category:'',
        examType:'',
        semester:'',
        branch:'',
        name: '',
        admissionNumber:'',
        academicYear:'',
        amount:'',
        remark:'',
        fullName:'',
        dateOfBirth:'',
        email:'',
        mobile:'',
        paymentMode:'',
        checkBox:'',
  };

  const optionOne = ["Module:6", "Learn Time:6hrs"]
  const optionTwo = ["Module:5", "Learn Time:7hrs"]
  const optionThree = ["Module:6", "Learn Time:5hrs"]
  const optionFour = ["Module:6", "Learn Time:6hrs"]

  const [formData, setFormData] = useState(initialFormData);
  const [savedId, setSavedId] = useState(null);
  const [data, setData] = useState({});

    const handleChange = (event) => {
    const {name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    
  setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue
  }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5500/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Error saving form data');
      }

      const data = await response.json();
        setSavedId(data.id);
        console.log('Form data submitted:', data);
        setFormData(initialFormData);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleViewClick = async () => {
    if(savedId) {
    try {
      const response = await fetch(`http://localhost:5500/data?id=${savedId}`);
        const fetchedData = await response.json();
        setData(fetchedData);
        console.log(Object.entries(fetchedData));
     } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  };
  return (
    <div>
      <h1>Enter the academic details</h1>  
      <form onSubmit={handleSubmit}>
        <label>
          Payment Category:
          <select 
          name="category"
          value={formData.category}
          onChange={handleChange}>
            <option value="nil">--Select any Category--</option>
            <option value="exam">Examination Fess</option>
            <option value="admission">Admission Fees</option>
            <option value="mess">Mess Fees</option>
            <option value="sem">Semester Fees</option>
            </select>
        </label>
        <br/>

        <label>
          Type of Exam:
          <select
          name="examType"
          value={formData.examType}
          onChange={handleChange}>
            <option value="nil">--Select Exam Type--</option>
            <option value="regular">Regular</option>
            <option value="supply">Supplymentry</option>
            <option value="improvement">Improvment</option>
            <option value="revaluation">Revaluation</option>
            <option value="scrutiny">Scrutiny</option>
          </select>
        </label><br/>

        <label>
          Branch:
          <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}>
            <option value="">--Select Branch--</option>
            <option value="eee">Electrical</option>
            <option value="ec">Electronics</option>
            <option value="ce">Civil</option>
            <option value="cs">Computer Science</option>
          </select>
        </label><br/>

        <label>
          Semester:
          <select
          name="semester"
          value={formData.semester}
          onChange={handleChange}>
            <option value="">--Select Semester--</option>
            <option value="first">S1</option>
            <option value="second">S2</option>
            <option value="third">S3</option>
            <option value="fourth">S4</option>
            <option value="fifth">S5</option>
            <option value="sixth">S6</option>
            <option value="seventh">S7</option>
            <option value="eighth">S8</option>
          </select>
        </label><br/>

        <label>
         Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br/>
        

        <label>
          Admn No:
          <input
            type="text"
            name="admissionName"
            value={formData.admnNo}
            onChange={handleChange}
          />
        </label>
        <br/>


        <label>
          Academic Year:
          <input
          type="text"
          name="academicYear"
          value={formData.acdmYr}
          onChange={handleChange}
          />
        </label>
        <br/>

        <label>
          Fee Amount:
          <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          />
        </label>
        <br/>

        <label>
          Remark:
          <input
          type="text"
          name="remark"
          value={formData.remark}
          onChange={handleChange}
          />
        </label>
        <br/>

        <h2>Enter the banking details</h2>

        <label>
          <input
          type="radio"
          name="banking"
          value="personal"
          onChange={handleChange}
        />
        Personal
      </label>
      <label>
        <input
          type="radio"
          name="banking"
          value="corporate"
          onChange={handleChange}
        />
        Organization/Corporate
        </label>
        <br/>

        <label>
          Name:
          <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          />
        </label>
        <br/>

        <label>
          Date of Birth:
          <input
          type="date"
          name="dateOfBirth"
          value={formData.dob}
          onChange={handleChange}
          />
        </label>
        <br/>

        <label>
          Email ID:
          <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
        </label>
        <br/>

        <label>
          Mobile:
          <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          />
        </label>
        <br/>

        <div>
          <List header="UPI" values={optionOne}  handleChange={handleChange}  formData={formData}/>
          <List header="Online Banking" values={optionTwo}  handleChange={handleChange}  formData={formData}/>
          <List header="Debit Card" values={optionThree}  handleChange={handleChange}  formData={formData}/>
          <List header="Credit Card" values={optionFour}  handleChange={handleChange}  formData={formData}/>
        </div>

        <label>
          <input
          type="checkbox"
          name="checkBox"
          checked={formData.checkbox}
          onChange={handleChange}
          required
          />
          I have read and agrees to the <a href="">Terms & Conditions</a>
        </label>
        <br/>

<button type="submit">Submit</button>
        {savedId && <p>Form Data: {savedId}</p>}
        <button onClick={handleViewClick} id="view">View Data</button>
       {Object.entries(data).length> 0 && (
       <div>
        <h2>Fetched Data:</h2>
        <ul>
          {Object.entries(data).map(item => (
            // <li key={item[0]}>{item.fetchedData}</li>
            <li key={item[0]}>{JSON.stringify(item, null, 2)}</li>
            // <li key={key}><label>{key}</label> : <span>{value}</span></li>
          ))}
        </ul>
      </div>
    )}
      </form>
      <div id="view"></div>
    </div>
  );
}
export default Payment;