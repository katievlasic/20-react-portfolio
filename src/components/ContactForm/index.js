import React, { useState } from 'react';


function Connect() {
    // const [title, setTitle] = useState("Looking forward to connecting.");

    // // Handler for increasing the temp by 1
    // const changeTitle = () => {
    //   setTemp(temp + 1);
    // };
  
    return (
      <div className="card text-center container">
        <div className="card-header col-4">
         Connect with Me!
        </div>
        <div>
            <input type="email" label="Enter your email address">
            
            </input>
        </div>
        <div className="card-body">
          <button
            type="submit"
            className="btn btn-warning"
            // onClick={}
          >
            Connect
          </button>
        </div>
      </div>
    );
  }
  
  export default Connect;
  