import React, { useState } from 'react';


function Connect() {
    // const [title, setTitle] = useState("Looking forward to connecting.");

    // // Handler for increasing the temp by 1
    // const changeTitle = () => {
    //   setTemp(temp + 1);
    // };
  
    return (
      <div className="card text-center">
        <div className="card-header bg-warning text-white">
         Connect with Me!
        </div>
        <div>
            <input type="email" label="Enter your email address">
            
            </input>
        </div>
        <div className="card-body">
          <button
            type="submit"
            className="btn btn-danger"
            // onClick={}
          >
          </button>
        </div>
      </div>
    );
  }
  
  export default Connect;
  