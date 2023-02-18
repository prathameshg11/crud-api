import React, { useState } from 'react'

const DeleteForm = () => {
    const [form, setform] = useState({
        dui: "",
      });
    
    
      const handleChange = (e) => {
        setform({ ...form, [e.target.id]: e.target.value });
      };
    
      const handleSubmit = async () => {
        if (form.dui) {
          try {
            const response = await fetch("http://localhost:8080/bank/delete", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ dui: form.dui}),
            });
    
            const dat = await response.json();
            if(dat.success===true){
              if(dat.data.deletedCount===0){
                alert('No such dui prensent in daatabase');
              }
              else{
                alert('Deleted succesfully');
              }
                
            }
            else{
                alert(dat.message);
            }
          } catch (error) {
            alert(error);
          }
        } else {
          alert("Please enter a prompt");
        }
      };
    
      return (
        <div className="Form">
          <form>
            <div className="mb-3">
              <label htmlFor="dui" className="form-label">
                DUI
              </label>
              <input
                type="string"
                className="form-control"
                id="dui"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      );
}

export default DeleteForm