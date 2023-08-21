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

function Payment() {

    const initialFormData = {  

        name: '',
        admnNo:'',
        acdmYr:'',
        amount:'',
        remark:'',
        fName:'',
        mob:'',
        checkbox:'',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [savedId, setSavedId] = useState(null);
  const [data, setData] = useState([]);

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
        console.log(fetchedData);
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
         Name:
          <input
            type="text"
            name="name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>
        <br/>
        

        <label>
          Admn No:
          <input
            type="text"
            name="admnNo"
            value={formData.admnNo}
            onChange={handleChange}
          />
        </label>
        <br/>


        <label>
          Academic Year:
          <input
          type="text"
          name="acdmYr"
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
          name="fName"
          value={formData.fullName}
          onChange={handleChange}
          />
        </label>
        <br/>

        <label>
          Date of Birth:
          <input
          type="date"
          name="dob"
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
          name="mob"
          value={formData.mobile}
          onChange={handleChange}
          />
        </label>
        <br/>

        <label>
          <input
          type="checkbox"
          name="checkbox"
          checked={formData.checkbox}
          onChange={handleChange}
          required
          />
          I have read and agrees to the <a href="">Terms & Conditions</a>
        </label>
        <br/>

<button type="submit">Submit</button>
        {savedId && <p>Form Data: {savedId}</p>}
        <button onClick={handleViewClick} disabled={!savedId} id="view">View Data</button>
       {data.length > 0 && (
       <div>
        <h2>Fetched Data:</h2>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.fetchedData}</li>
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