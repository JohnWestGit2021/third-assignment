import React from 'react'

export default function Model({setmodal}) {
    return (
        <div id="myModal" className="modal">

            <div className="modal-content flex-col align-center">
                <h3>
                    Fill out the form and i will get back to You
              </h3>
                <h3>
                    Name
              </h3>
                <input className="model-inputs" placeholder="Enter Name" />
                <h3>
                    Email
</h3>
                <input className="model-inputs" placeholder="Enter Email" />
                <h3>
                    Message
</h3>
                <textarea className="model-inputs" name="" id="" rows="10"></textarea>

                <button onClick={()=>{setmodal(false)}} className="modal-Submit close">Submit</button>
            </div>

        </div>
    )
}
