import React from "react";
import './List.css'
 function List(props) {
   const { header,values  } = props;
    return(
       <div className="subjects">
         <label>
            <input type="radio" name="component"></input>
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