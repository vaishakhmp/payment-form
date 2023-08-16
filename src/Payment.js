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


   const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'radio' || type === 'checkbox' ? checked : value;
  
  setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData(initialFormData);
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
      </form>
    </div>
  );
}

export default Payment;