import React from "react";
import './List.css'
 function List(props) {
   const { header,values,handleChange,formData } = props;
    return(
       <div className="subjects">
         <label>
            <input type="radio" name="paymentMode" value={header} checked={formData.paymentMode=header} onChange={handleChange}></input>
         <h1>{header}</h1>
        <ul>
         {
            values && values.map((str) => {
               return (
                  <li>{str}</li>
               )
            })
         }
        </ul>
        </label>
       </div>
    )
 };
 export default List;