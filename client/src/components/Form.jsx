import React, { useState } from "react";

const Form = () => {
  const [form, setform] = useState({
    dui: "",
    amount: 0,
  });


  const handleChange = (e) => {
    setform({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    if (form.dui) {
      try {
        const response = await fetch("http://localhost:8080/bank/update", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ dui: form.dui, amount: form.amount }),
        });

        const dat = await response.json();
        if(dat.success===true){
            alert('Created/Updated succesfully');
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
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
};

export default Form;
